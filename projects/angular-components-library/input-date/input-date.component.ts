import {
  Component,
  Input,
  OnInit,
  forwardRef,
  ElementRef,
  AfterViewInit,
  SimpleChanges,
  HostBinding,
  ViewChild,
} from '@angular/core';

import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ITEM_VALUE } from 'angular-components-library/core';
import { GeneralInputComponent } from 'angular-components-library/core';
@Component({
  selector: 'acl-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./styles/input-date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AclInputDateComponent),
      multi: true,
    },
  ],
})
export class AclInputDateComponent
  extends GeneralInputComponent
  implements OnInit, AfterViewInit
{
  @Input() appearance: 'legacy' | 'standard' | 'fill' | 'outline' = 'standard';
  @Input() label!: string;
  @Input() hint!: string;
  @Input() placeholder!: string;
  @Input('left-icon') leftIcon!: string;
  @Input('right-icon') rightIcon!: string;
  @Input() type: string = 'text';
  @Input() color!: string;

  @HostBinding('class') classAttr!: string;
  @HostBinding('style') style!: string;
  @ViewChild('input') input!: ElementRef;

  data: any;
  formControl!: FormControl;

  constructor(private elementRef: ElementRef) {
    super();
  }
  ngOnInit(): void {
    if (this.data) {
      this.updateInputs();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      (changes.disabled && !changes.disabled.isFirstChange()) ||
      (changes.error && !changes.error.isFirstChange())
    ) {
    }
  }

  ngAfterViewInit(): void {
    if (this.data) {
      this.updateVisualComponentValue(this.data[ITEM_VALUE]);
    }

    this.input.nativeElement.addEventListener('change', (event: Event) => {
      this.value = (event.target as HTMLInputElement).value;
      this._onChange();
      if (this.formControl) {
        this.formControl.setValue(this.value);
        if (this.formControl.errors) {
          this.status = 'error';
        } else {
          this.status = 'default';
        }
      }
    });
  }

  format(time: number) {
    if (time < 10) {
      return `0${time}`;
    }
    return time.toString();
  }

  updateVisualComponentValue(value: any): void {

    if (this.formControl.errors) {
      this.status = 'error';
    } else {
      this.status = 'default';
    }

    
    if (value) {
      let d!: Date;
      if (typeof value === 'string') {
        d = new Date(value);
      }

      const t = `${d.getFullYear()}-${this.format(
        d.getMonth() + 1
      )}-${this.format(d.getDate())}`;
      const input = this.input.nativeElement as HTMLInputElement;
      input.value = t;
    }
  }
}
