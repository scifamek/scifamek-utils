import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  SimpleChanges,
  forwardRef,
} from '@angular/core';

import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  GeneralInputComponent,
  ITEM_VALUE,
} from 'angular-components-library/core';
import { InputBehavior } from './input.behavior';
import { INPUT_IDENTIFIER } from './input.constants';
@Component({
  selector: 'acl-input',
  templateUrl: './input.component.html',
  styleUrls: ['./styles/input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AclInputComponent),
      multi: true,
    },
  ],
})
export class AclInputComponent
  extends GeneralInputComponent
  implements OnInit, AfterViewInit
{
  @Input() appearance: 'legacy' | 'standard' | 'fill' | 'outline' = 'standard';
  @Input() label!: string;
  @Input() hint!: string;
  @Input() rows!: number;
  @Input() placeholder!: string;
  @Input('left-icon') leftIcon!: string;
  @Input('right-icon') rightIcon!: string;
  @Input() type: string = 'text';
  @Input() step: number = 1;
  @Input() min?: number;
  @Input() max?: number;
  @Input() color!: string;
  @Input() kind = 'input';
  @HostBinding('class') classAttr!: string;
  @HostBinding('style') style!: string;

  data: any;
  @Input() formControl?: FormControl;
  behavior!: InputBehavior;

  constructor(private elementRef: ElementRef) {
    super();
    this.behavior = new InputBehavior();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      (changes.disabled && !changes.disabled.isFirstChange()) ||
      (changes.error && !changes.error.isFirstChange())
    ) {
      this.behavior.toogleElementProperty(this.status, INPUT_IDENTIFIER);
    }
    if (changes.disabled) {
      if (changes.disabled.currentValue) {
        this.status = 'disabled';
      } else {
        this.status = 'default';
      }

      this.behavior.toogleElementProperty(this.status, INPUT_IDENTIFIER);
    }
  }

  ngAfterViewInit(): void {
    this.behavior.setRoot(this.elementRef.nativeElement);
    this.configListeners();
    this.behavior.init();

    if (this.disabled) {
      this.status = 'disabled';
    }

    if (this.data) {
      this.updateVisualComponentValue(this.data[ITEM_VALUE]);
    } else if (this.value) {
      this.updateVisualComponentValue(this.value);
    }

    this.behavior.toogleElementProperty(this.status, INPUT_IDENTIFIER);
  }
  configListeners() {
    this.behavior.addSubscriber(
      ['keyup'],
      (event) => {
        this.value = this.behavior.getValue();
        if (this.type == 'number') {
          this.value = parseFloat(this.value);
        }
        this._onChange(this.value);
        if (this.formControl) {
          this.formControl.setValue(this.value);
          if (this.formControl.errors) {
            this.status = 'error';
          } else {
            this.status = 'default';
          }
        }
      },
      INPUT_IDENTIFIER
    );
  }
  writeValue(value: string): void {
    super.writeValue(value);

    if (this.behavior) {
      this.behavior.setValue(value);
    }
  }

  updateVisualComponentValue(value: any): void {
    super.writeValue(value);
    if (this.formControl) {
      this.formControl.registerOnChange((value: any) => {
        this.value = value;
        if (this.behavior) {
          this.behavior.setValue(value);
        }
      });
    }
    if (this.formControl && this.formControl.errors) {
      this.status = 'error';
    } else {
      this.status = 'default';
    }

    if (value) {
      if (this.behavior) {
        this.behavior.setValue(value);
      }
    }
  }

  ngOnInit(): void {
    this.updateInputs();
  }
}
