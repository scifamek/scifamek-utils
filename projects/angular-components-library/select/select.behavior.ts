import { BaseBehavior } from 'angular-components-library/core';
import {
  SELECT_COLLAPSE_ICON_NAME,
  SELECT_EXPAND_ATTRIBUTE,
  SELECT_EXPAND_ICON_NAME,
  SELECT_INPUT_IDENTIFIER,
  SELECT_INPUT_QUERY,
  SELECT_ITEMS_IDENTIFIER,
  SELECT_ITEMS_QUERY,
  SELECT_TOGGLE_ICON_IDENTIFIER,
  SELECT_TOGGLE_ICON_QUERY,
} from './select.constants';

export class SelectBehavior extends BaseBehavior {
  input!: HTMLElement;
  toggle!: HTMLSpanElement;
  itemsContainer!: HTMLUListElement;

  constructor() {
    super();
  }

  init() {
    const isAllReady = this.getElements();
    if (isAllReady) {
      this.addSubscribers();
    }
    super.init();
  }
  getElements() {
    this.input = this.addChildren(
      SELECT_INPUT_QUERY,
      SELECT_INPUT_IDENTIFIER
    ) as HTMLInputElement;

    this.toggle = this.addChildren(
      SELECT_TOGGLE_ICON_QUERY,
      SELECT_TOGGLE_ICON_IDENTIFIER
    ) as HTMLSpanElement;

    this.itemsContainer = this.addChildren(
      SELECT_ITEMS_QUERY,
      SELECT_ITEMS_IDENTIFIER
    ) as HTMLUListElement;

    const response = this.isAllTrue(
      this.input,
      this.toggle,
      this.itemsContainer
    );
    return response;
  }

  expandSelect() {
    const isExpanded = this.toogleElementProperty(
      SELECT_EXPAND_ATTRIBUTE,
      SELECT_ITEMS_IDENTIFIER
    );
    console.log(this.toggle)
    
    this.toggle.innerText = isExpanded
      ? SELECT_COLLAPSE_ICON_NAME
      : SELECT_EXPAND_ICON_NAME;
  }
  addSubscribers(): void {
    this.addSubscriber(
      ['click'],
      (event) => {
        console.log(event, 'Soy checho toggle');
        this.expandSelect();
      },
      SELECT_TOGGLE_ICON_IDENTIFIER
    );

    this.addSubscriber(
      ['focus'],
      (event) => {
        console.log(event, 'Soy checho identifier');
      },
      SELECT_INPUT_IDENTIFIER
    );
  }
}
