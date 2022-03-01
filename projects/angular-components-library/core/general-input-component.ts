import { ControlValueAccessor } from '@angular/forms';

export enum STATES {
  ERROR_STATE = 'error',
  VALID_STATE = 'valid',
  DEFAULT_STATE = 'default',
}
export class GeneralInputComponent implements ControlValueAccessor {
  private _status: STATES = STATES.DEFAULT_STATE;
  private _disabled!: boolean | string;
  private _touched: boolean = false;
  private _onChange!: (value: any) => {};
  private _onTouched: any;

  constructor(){
    this.onChangeElement = (event: any) => {};
  }
  value: any;
  registerOnChange(onChange: any): void {
    this.onChangeElement = onChange;
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
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
            this.status = STATES.VALID_STATE;
          } else {
            this.status = STATES.ERROR_STATE;
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

  public get disabled(): boolean | string {
    return this._disabled;
  }

  public set disabled(value: boolean | string) {
    this._disabled = value;
  }

  public get touched(): boolean {
    return this._touched;
  }

  public set touched(value) {
    if (value) {
      this._touched = value;
    }
  }

  public get status(): STATES {
    return this._status;
  }

  public set status(value: STATES) {
    if (value) {
      this._status = value;
    }
  }

  public get onTouched(): any {
    return this._onTouched;
  }
  public set onTouched(value: any) {
    this._onTouched = value;
  }

  public get onChangeElement(): any {
    return this._onChange;
  }
  public set onChangeElement(value: any) {
    this._onChange = value;
  }
}
