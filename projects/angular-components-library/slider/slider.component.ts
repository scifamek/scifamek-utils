import {
  Component,
  Input,
  OnInit,
  forwardRef,
  ElementRef,
  ViewChild,
  AfterViewInit,
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

  @Input() invert: boolean = false;

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
  formControl!: FormControl;

  constructor(private el: ElementRef) {
    super();
  }
  ngAfterViewInit(): void {
    this.writeValue(this.data[ITEM_VALUE]);
  }

  writeValue(value: any): void {
    super.writeValue(value);

    if (this.status == STATES.ERROR_STATE) {
      ('Hay hpta, lo voy a poner rojo');
    }

    this.formControl.setValue(value);
  }

  ngOnInit(): void {
    if (this.data) {
      this.formControl = this.data.formControl;
      this.label = this.data['configuration']['label'];
      this.icon = this.data['configuration']['icon'];
      this.invert = this.data['configuration']['invert'];
      this.max = this.data['configuration']['max'];
      this.min = this.data['configuration']['min'];
      this.step = this.data['configuration']['step'];
      this.thumbLabel = this.data['configuration']['thumbLabel'];
    }
  }
}
