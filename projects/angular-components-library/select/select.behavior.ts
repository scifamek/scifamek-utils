import { BaseBehavior } from 'angular-components-library/core';
import {
  SELECT_COLLAPSE_ICON_NAME,
  SELECT_EXPAND_ATTRIBUTE,
  SELECT_EXPAND_ICON_NAME,
  SELECT_INPUT_IDENTIFIER,
  SELECT_INPUT_QUERY,
  SELECT_ITEMS_CONTAINER_IDENTIFIER,
  SELECT_ITEMS_CONTAINER_QUERY,
  SELECT_ITEMS_IDENTIFIER,
  SELECT_ITEMS_QUERY,
  SELECT_TOGGLE_ICON_IDENTIFIER,
  SELECT_TOGGLE_ICON_QUERY,
} from './select.constants';

export class SelectBehavior extends BaseBehavior {
  private selectedItems: any[];

  private input!: HTMLInputElement;
  private toggle!: HTMLSpanElement;
  private itemsContainer!: HTMLUListElement;
  private items!: HTMLLIElement[];

  dataFunction!: () => any;

  onChangeFunction!: (value: any) => void;

  constructor() {
    super();
    this.selectedItems = [];
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
      SELECT_ITEMS_CONTAINER_QUERY,
      SELECT_ITEMS_CONTAINER_IDENTIFIER
    ) as HTMLUListElement;

    this.items = this.addChildren(
      SELECT_ITEMS_QUERY,
      SELECT_ITEMS_IDENTIFIER
    ) as HTMLLIElement[];

    const response = this.isAllTrue(
      this.input,
      this.toggle,
      this.itemsContainer
    );
    return response;
  }

  toggleSelect() {
    const isExpanded = this.toogleElementProperty(
      SELECT_EXPAND_ATTRIBUTE,
      SELECT_ITEMS_CONTAINER_IDENTIFIER
    );

    this.toggle.innerText = isExpanded
      ? SELECT_COLLAPSE_ICON_NAME
      : SELECT_EXPAND_ICON_NAME;
  }
  addSubscribers(): void {
    this.addSubscriber(
      ['click'],
      (event) => {
        this.toggleSelect();
      },
      SELECT_TOGGLE_ICON_IDENTIFIER
    );

    this.addSubscriber(['focus'], (event) => {}, SELECT_INPUT_IDENTIFIER);

    this.addSubscriber(
      ['click'],
      (event) => {
        const element = event.target;
        const valueObj = JSON.parse(element.getAttribute('item'));
        this.toggleSelect();
        this.updateVisualComponentValue(valueObj.display);
        if (this.onChangeFunction) {
          this.onChangeFunction(valueObj);
        }
      },
      SELECT_ITEMS_IDENTIFIER
    );
  }
  updateVisualComponentValue(value: string) {
    if (value) {
      this.input.value = value;
    }
  }
}
