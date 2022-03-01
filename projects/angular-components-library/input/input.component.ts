import {
  Component,
  Input,
  OnInit,
  forwardRef,
  ElementRef,
  ViewChild,
  AfterViewInit,
  SimpleChanges,
} from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ITEM_VALUE } from 'angular-components-library/core';
import {
  IGeneralComponent,
  GeneralInputComponent,
  STATES,
} from 'angular-components-library/core';
@Component({
  selector: 'acl-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
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
  implements OnInit, IGeneralComponent, AfterViewInit
{
  @Input() appearance: 'legacy' | 'standard' | 'fill' | 'outline' = 'standard';
  @Input() label!: string;
  @Input() hint!: string;
  @Input() placeholder: string = '';
  @Input('left-icon') leftIcon!: string;
  @Input('right-icon') rightIcon!: string;
  @Input() type!: string;
  @Input() color!: string;
  @Input() error!: boolean | string;

  @ViewChild('input', { static: false }) input!: HTMLInputElement;
  @ViewChild('textarea', { static: false }) textarea!: ElementRef;

  data: any;
  formControl!: FormControl;

  constructor(private elementRef: ElementRef) {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.disabled && !changes.disabled.isFirstChange()) {
      this.updateNativeProperty('disabled', this.disabled);
    }
    if (changes.error && !changes.error.isFirstChange()) {
      this.updateNativeProperty('error', this.error);
    }
  }

  updateNativeProperty(name: string, value: any) {
    const element = this.elementRef.nativeElement;
    if (element) {
      if (value == false || (value as unknown as string) == '') {
        element.setAttribute(name, '');
      } else {
        element.removeAttribute(name);
      }
    }
  }

  ngAfterViewInit(): void {
    this.input = this.elementRef.nativeElement.querySelector('input');
    this.configListeners();
    this.updateNativeProperty('disabled', this.disabled);
    this.updateNativeProperty('error', this.error);

    if (this.data) {
      this.writeValue(this.data[ITEM_VALUE]);
    } else if (this.value) {
      this.writeValue(this.value);
    }
  }
  configListeners() {
    this.input.addEventListener('keyup', (event) => {
      this.value = this.input.value;
      this.onChangeElement(this.value);
      if (this.formControl) {
        this.formControl.setValue(this.value);
      }
    });
    this.input.addEventListener('blur', (event) => {
      this.validate();
      this.elementRef.nativeElement.removeAttribute('focus');
    });
    this.input.addEventListener('focus', (event) => {
      this.elementRef.nativeElement.setAttribute('focus', '');
    });
  }

  writeValue(value: any): void {
    super.writeValue(value);

    if (this.status == STATES.ERROR_STATE) {
    }
    if (value) {
      console.log(value)
      if (this.input) {
        this.input.value = value;
      } else if (this.textarea) {
        this.textarea.nativeElement.value = value;
      }
    }
  }

  ngOnInit(): void {
    if (this.data) {
      this.formControl = this.data.formControl;
      this.label = this.data['configuration']['label'];
      this.hint = this.data['configuration']['hint'];
      this.placeholder = this.data['configuration']['placeholder'];
      this.rightIcon = this.data['configuration']['right-icon'];
      this.leftIcon = this.data['configuration']['left-icon'];
      this.type = this.data['configuration']['type'];
    }
  }
}
