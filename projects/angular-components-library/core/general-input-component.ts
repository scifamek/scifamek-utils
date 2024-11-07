import { Injectable, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { applyMixins, RenderedGeneralComponent } from './general-component';

export type STATES = 'error' | 'valid' | 'default' | 'disabled';

@Injectable()
export class GeneralInputComponent implements ControlValueAccessor {
  @Input() status: STATES = 'default';
  @Input() protected disabled: boolean = false;
  touched: boolean = false;
  _onChange: any = () => {};
  _onTouched: any = () => {};

  constructor() {}

  value: any;
  registerOnChange(fn: any): void {
    this._onChange = fn;
     
    (value: any) => {
      console.log(value, 123)
      console.log(fn);
    };
  }
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }
  public onSetValue!: (value: any) => void;
  private validators!: any[];

  /**
 *This methods lets you execute all validator that you have configured for the component and after
 this will alter the status, and after that, this will call onValidate method, sending the current status
 *
 * @memberof GeneralInput
 */
  validate() {
    if (this.validators) {
      for (const validator of this.validators) {
        const typeValidator = typeof validator;
        if (typeValidator == 'string') {
          eval(validator);
        } else if (typeValidator == 'function') {
          const validatorResponse = validator(this.value);
          if (validatorResponse) {
            this.status = 'valid';
          } else {
            this.status = 'error';
          }
        }
      }
      this.onValidate(this.status);
    }
  }

  /**
   *This method is in charge of modify the visual component when the value is passed from the outside.
   *
   * @memberof GeneralInput
   */
  writeValue(value: any) {
    this.value = value;
    this.validate();
  }

  /**
   *This method is in charge of call the custom method passed by configuration when the visual component is modified.
   *
   * @memberof GeneralInput
   */
  setValue() {
    if (this.onSetValue) {
      this.onSetValue(this.value);
    }
  }
  onValidate(status: STATES) {}
}

export interface GeneralInputComponent extends RenderedGeneralComponent {}
applyMixins(GeneralInputComponent, [RenderedGeneralComponent]);
