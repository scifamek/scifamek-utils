import {
  Component,
  Input,
  OnInit,
  forwardRef,
  ElementRef,
  ViewChild,
  AfterViewInit,
  HostBinding,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

import {
  GeneralInputComponent,
  IGeneralComponent,
  STATES,
  ITEM_VALUE,
} from 'angular-components-library/core';
@Component({
  selector: 'acl-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AclSliderComponent),
      multi: true,
    },
  ],
})
export class AclSliderComponent
  extends GeneralInputComponent
  implements OnInit, IGeneralComponent, AfterViewInit
{
  @Input() label!: string;

  @Input() icon!: string;

  @Input() invert = false;

  @Input() max!: number;

  @Input() min!: number;

  @Input() step!: number;

  @Input() thumbLabel!: string;

  @Input('tick-interval') tickInterval!: number | 'auto';

  @Input() vertical: boolean = false;

  @Input('aria-labelledby') ariaLabelledby!: string;

  formatLabel = (value: number): string => {
    return String(value) + String(this.thumbLabel);
  };

  getSliderTickInterval(): number | 'auto' {
    return this.tickInterval || 0;
  }

  data: any;

  @HostBinding('class') classAttr!: string;
  @HostBinding('style') style!: string;
  formControl!: FormControl;

  constructor(private el: ElementRef) {
    super();
  }
  ngAfterViewInit(): void {
    if (this.data) {
      this.updateVisualComponentValue(this.data[ITEM_VALUE]);
    }
  }

  updateVisualComponentValue(value: any): void {
    super.writeValue(value);
    this.formControl.setValue(value);
  }

  ngOnInit(): void {
    this.updateInputs();
  }
}
