import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  Input,
  ViewChild,
  forwardRef,
} from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  GeneralInputComponent,
  ITEM_VALUE,
} from 'angular-components-library/core';

@Component({
  selector: 'acl-coordinate-input',
  templateUrl: './coordinate-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AclCoordinateInputComponent),
      multi: true,
    },
  ],
  styleUrls: ['./coordinate-input.component.scss'],
})
export class AclCoordinateInputComponent
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
  innerValue: any;

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

      if (this.value) {
        const { latitude, longitude } = this.value;

        this.innerValue = `${latitude}, ${longitude}`;
      }

      this.input.nativeElement.addEventListener('change', (event: Event) => {
        this.value = (event.target as HTMLInputElement).value;

        const fragments = this.value.split(',');

        const [latitude, longitude] = fragments;

        const transformed = {
          latitude: 0,
          longitude: 0,
        };


        if (latitude != undefined && longitude != undefined) {

          transformed.latitude = parseFloat(latitude.trim());
          transformed.longitude = parseFloat(longitude.trim());

          this.innerValue = `${latitude}, ${longitude}`;
          this.value = transformed

          this._onChange();

          if (this.formControl) {
            this.formControl.setValue(this.value);
          }
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
