import { ActionableEvent } from './base.constants';
import { Behavior } from './behavior';

interface ISubscription {
  events: ActionableEvent[];
  listener: Listener;
  identifier: string;
}

type Listener = (item: any) => void;
type Listeners = Listener[];

interface IChildrenConfiguration {
  path: string;
  elements: HTMLElement | Array<HTMLElement>;
  listeners?: { [index in ActionableEvent]?: Listeners };
}

type Children = {
  [index: string]: IChildrenConfiguration;
};

export class BaseBehavior implements Behavior {
  private pendingElementsToBeAdded: ISubscription[];
  private root!: HTMLElement;
  private children: Children;
  public ready: boolean;

  constructor() {
    this.ready = false;
    this.children = {};
    this.pendingElementsToBeAdded = [];
  }
  /**
   * Set the main HTML element for the behavior.
   *
   * If the element is null or undefined the root element will not change and this will return false.
   *
   * @param {HTMLElement} element
   * @return {*}  {boolean}
   * @memberof BaseBehavior
   */
  setRoot(element: HTMLElement): boolean {
    if (element) {
      this.root = element;
      return true;
    }
    return false;
  }

  /**
   * Execute all subscription, that means, first, the method resolve all pending subscription, and then
   * remove all sub
   *
   * @memberof BaseBehavior
   */
  public init() {
    this.resolvePendingSubscriptions();
    this.performListeners(this.removeListenersToElement);
    this.performListeners(this.setListenersToElement);
  }

  protected resolvePendingSubscriptions() {
    const pendingSubscriptionsTemp = [...this.pendingElementsToBeAdded];
    this.pendingElementsToBeAdded = [];
    for (const pendingSubscription of pendingSubscriptionsTemp) {
      const wasConfigured = this.addSubscriber(
        pendingSubscription.events,
        pendingSubscription.listener,
        pendingSubscription.identifier
      );
    }
  }
  public isAllTrue(...params: any[]) {
    const response = params.reduce((acc, current) => {
      return acc && current != null && current != undefined;
    }, true);
    return response;
  }

  /**
   * Add children to the main set of elements.
   *
   * All queries are made inside de root element, for that reason, if the target element is not inside
   * the root component, these children will not be added to the main set of elements.
   *
   * @protected
   * @param {string} path Query selector string according to the component. Example: div > p > span
   * @param {string} identifier Identificator for the component
   * @example mySpan:
   * @return {*}  {(HTMLElement | HTMLElement[] | null)} Element or elements got for the query
   * @memberof BaseBehavior
   */
  protected addChildren(
    path: string,
    identifier: string
  ): HTMLElement | HTMLElement[] | null {
    const list: NodeListOf<HTMLElement> = this.root.querySelectorAll(
      `:scope ${path}`
    );
    let response = null;
    if (list.length > 0) {
      response = list.length > 1 ? Array.from(list) : list[0];
      this.children[identifier] = {
        path,
        elements: response,
      };
    }

    return response;
  }

  /**
   * Set listeners for a specific element, trigered by many HTML events
   *
   * @param {ActionableEvent[]} events Events that will trigger the listener
   * @param {Listener} listener Listener to be executed
   * @param {string} identifier Element identifier. The element have to exists.
   * @return {*}  {boolean}
   * @memberof BaseBehavior
   */
  addSubscriber(
    events: ActionableEvent[],
    listener: Listener,
    identifier: string
  ): boolean {
    const configuration = this.getChildrenConfiguration(identifier);
    if (configuration) {
      if (!configuration.listeners) {
        configuration.listeners = {};
      }
      for (const event of events) {
        if (!configuration.listeners[event]) {
          configuration.listeners[event] = [];
        }
        configuration.listeners[event]?.push(listener);
      }
      return true;
    } else {
      
      this.pendingElementsToBeAdded.push({
        events,
        listener,
        identifier,
      } as ISubscription);
    }
    return false;
  }

  private setListenersToElement = (
    element: HTMLElement,
    listeners: Listeners | undefined,
    event: ActionableEvent
  ) => {
    if (listeners) {
      for (const listener of listeners) {
        element.addEventListener(event, listener);
      }
    }
  };

  private removeListenersToElement = (
    element: HTMLElement,
    listeners: Listeners | undefined,
    event: ActionableEvent
  ) => {
    if (listeners) {
      for (const listener of listeners) {
        element.removeEventListener(event, listener);
      }
    }
  };
  private performListeners(
    func: (
      element: HTMLElement,
      listeners: Listeners | undefined,
      event: ActionableEvent
    ) => void
  ) {
    for (const config of Object.values(this.children)) {
      // if (config.subscriptions) {
      for (const event in config?.listeners) {
        if (config.elements instanceof Array) {
          for (const element of config.elements) {
            func(
              element,
              config.listeners[event as ActionableEvent],
              event as ActionableEvent
            );
          }
        } else {
          func(
            config.elements,
            config.listeners[event as ActionableEvent],
            event as ActionableEvent
          );
        }
      }
    }
    // }
  }

  

  public getChildren(identifier: string): HTMLElement | Array<HTMLElement> {
    return this.children[identifier].elements;
  }
  public getChildrenConfiguration(identifier: string): IChildrenConfiguration {
    return this.children[identifier];
  }

  public getChildrenByPath(
    path: string
  ): HTMLElement | Array<HTMLElement> | null {
    const response = Object.values(this.children)
      .filter((item) => {
        return item.path == path;
      })
      .map((item) => {
        return item.elements;
      });
    return response.length > 0 ? response[0] : null;
  }

  public toogleElementProperty(name: string, identifier: string): void {
    const element = this.getChildren(identifier) as HTMLElement;
    if (element) {
      element.toggleAttribute(name);
    }
  }

  public toogleProperty(name: string): void {
    this.root.toggleAttribute(name);
  }

  public get isReady(): boolean {
    return this.ready;
  }
}
