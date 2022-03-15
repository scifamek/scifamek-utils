import { BaseBehavior } from 'angular-components-library/core';
import { INPUT_IDENTIFIER, INPUT_QUERY } from './input.constants';

export class InputBehavior extends BaseBehavior {
  input!: HTMLInputElement;

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

  addSubscribers(): void {
    this.addSubscriber(
      ['blur'],
      (event) => {
        this.toogleProperty('focus');
      },
      INPUT_IDENTIFIER
    );

    this.addSubscriber(
      ['focus'],
      (event) => {
        this.toogleProperty('focus');
      },
      INPUT_IDENTIFIER
    );
  }

  setValue(value: string) {
    if(this.input){

      this.input.value = value;
    }
  }
  getValue() {
    return this.input?.value;
  }
  getElements() {
    this.input = this.addChildren(
      INPUT_QUERY,
      INPUT_IDENTIFIER
    ) as HTMLInputElement;
    const response = this.isAllTrue(this.input);
    return response;
  }
}
