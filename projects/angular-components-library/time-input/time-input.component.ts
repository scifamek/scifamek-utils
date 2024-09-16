import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  Input,
  ViewChild,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  NgControl,
} from '@angular/forms';
import {
  GeneralInputComponent,
  ITEM_VALUE,
} from 'angular-components-library/core';

@Component({
  selector: 'acl-time-input',
  templateUrl: './time-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AclTimeInputComponent),
      multi: true,
    },
  ],
  styleUrls: ['./time-input.component.scss'],
})
export class AclTimeInputComponent
  extends GeneralInputComponent
  implements AfterViewInit
{
  @HostBinding('class') classAttr!: string;
  @Input() color!: string;
  data: any;
  @Input() disabled = false;
  formControl!: FormControl;
  @Input() hint!: string;
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  @Input() kind = 'input';
  @Input() label = '';
  @Input('left-icon') leftIcon!: string;
  onChange = (data: any) => {};
  onTouched = () => {};
  @Input() placeholder!: string;
  @Input('right-icon') rightIcon!: string;
  @HostBinding('style') style!: string;
  value: any;

  constructor(private elementRef: ElementRef) {
    super();
  }

  change(data: any) {
    this.onChange(this.value);
  }

  ngAfterViewInit(): void {
    if (this.data) {

      this.updateInputs();

      this.updateVisualComponentValue(this.data[ITEM_VALUE]);

      this.input.nativeElement.addEventListener('change', (event: Event) => {
        this.value = (event.target as HTMLInputElement).value;
        this._onChange();
        if (this.formControl) {
          this.formControl.setValue(this.value);
        }
      });
    }
  }

  ngOnInit(): void {
    this.updateInputs();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  updateVisualComponentValue(value: any): void {
    super.writeValue(value);
    if (value) {
      console.log(this.input.nativeElement, value);
      const input = this.input.nativeElement as HTMLInputElement;
      input.value = value;
    }
  }

  writeValue(obj: any): void {
    const val = obj;
    this.value = val;
    if (this.input) {
      const t: HTMLInputElement = this.input.nativeElement as HTMLInputElement;
      t.value = val;
    }
  }
}
