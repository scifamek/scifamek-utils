import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild,
  forwardRef,
} from '@angular/core';

import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  GeneralInputComponent,
  ITEM_VALUE,
} from 'angular-components-library/core';
@Component({
  selector: 'acl-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./styles/switch.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AclSwitchComponent),
      multi: true,
    },
  ],
})
export class AclSwitchComponent
  extends GeneralInputComponent
  implements OnInit, AfterViewInit
{
  @Input() label!: string;
  @Input('background-color') backgroundColor!: string;
  @Input() color!: string;
  @HostBinding('class') classAttr!: string;
  @HostBinding('style') style!: string;

  @ViewChild('input') input?: ElementRef<HTMLInputElement>;

  id = Math.random().toString();
  data: any;
  formControl?: FormControl;

  constructor(private elementRef: ElementRef) {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      (changes.disabled && !changes.disabled.isFirstChange()) ||
      (changes.error && !changes.error.isFirstChange())
    ) {
    }
  }

  writeValue(value: string): void {
    super.writeValue(value);


  }
  ngAfterViewInit(): void {
    this.configListeners();

    if (this.data) {
      this.updateVisualComponentValue(this.data[ITEM_VALUE]);
    } else if (this.value) {
      this.updateVisualComponentValue(this.value);
    }
  }
  configListeners() {
    this.input?.nativeElement.addEventListener('change', (x) => {
      const val = (x.target as HTMLInputElement).checked;
      this.value = val;
      this._onChange(this.value);
      if (this.formControl) {
        this.formControl.setValue(this.value);
        if (this.formControl.errors) {
          this.status = 'error';
        } else {
          this.status = 'default';
        }
      }
    });

    // this.behavior.addSubscriber(
    //   ['keyup'],
    //   (event) => {
    //     this.value = this.behavior.getValue();
    //     if (this.type == 'number') {
    //       this.value = parseFloat(this.value);
    //     }
    //     this._onChange();
    //     if (this.formControl) {
    //       this.formControl.setValue(this.value);
    //       if (this.formControl.errors) {
    //         this.status = 'error';
    //       } else {
    //         this.status = 'default';
    //       }
    //     }
    //   },
    //   INPUT_IDENTIFIER
    // );
  }

  updateVisualComponentValue(value: any): void {
    super.writeValue(value);
    if (this.formControl) {
      this.formControl.registerOnChange((value: any) => {
        this.value = value;
      });
    }
    if (this.formControl && this.formControl.errors) {
      this.status = 'error';
    } else {
      this.status = 'default';
    }

    if (value) {
    }
  }

  ngOnInit(): void {
    this.updateInputs();
  }
}
