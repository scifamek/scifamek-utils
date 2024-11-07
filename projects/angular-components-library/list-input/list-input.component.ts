import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  SimpleChanges,
  forwardRef
} from '@angular/core';

import { FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import {
  GeneralInputComponent,
  ITEM_VALUE,
} from 'angular-components-library/core';

@Component({
  selector: 'acl-list-input',
  templateUrl: './list-input.component.html',
  styleUrls: ['./styles/list-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AclListInputComponent),
      multi: true,
    },
  ],
})
export class AclListInputComponent
  extends GeneralInputComponent
  implements OnInit, AfterViewInit
{
  @HostBinding('class') classAttr!: string;

  currentEditingData?: {
    index: number;
    item: string;
  };
  data: any;
  formControl!: FormControl;
  innerFormControl: FormControl;
  @Input() hint!: string;
  @Input() label!: string;
  @Input() placeholder!: string;
  @HostBinding('style') style!: string;
  value: any[];

  constructor(public elementRef: ElementRef) {
    super();
    this.value = [];
    this.registerOnChange((value: any) => {
      console.log(value);
    });
    this.innerFormControl = new FormControl('', [Validators.required]);
  }

  addData() {
    if (!this.value || !Array.isArray(this.value)) {
      this.value = [];
    }
    const value: any = this.innerFormControl.value;

    if (this.currentEditingData) {
      this.value.splice(this.currentEditingData.index, 1, value);
      this.currentEditingData = undefined;
    } else {
      this.value.push(value);
    }
    if (this.formControl) {
      this.formControl.setValue(this.value);
    }
    this._onChange(this.value);
  }

  delteItem(i: number) {
    console.log(this.value);

    this.value.splice(i, 1);
    this.formControl.setValue(this.value);
    this._onChange(this.value);
  }

  ngAfterViewInit(): void {
    if (this.data) {
      console.log('this.data');
      console.log(this.data);

      this.updateVisualComponentValue(this.data[ITEM_VALUE]);
    } else if (this.value) {
      this.updateVisualComponentValue(this.value);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    this.updateInputs();
    console.log(' *** ', this.disabled);
    
    console.log(this.value);
  }

  setForm(item: string, index: number) {
    if (this.currentEditingData?.index == index) {
      this.currentEditingData = undefined;
    } else {
      this.currentEditingData = {
        index,
        item,
      };
    }
  }

  updateVisualComponentValue(value: any): void {
    super.writeValue(value);
    if (this.formControl && this.formControl.errors) {
      this.status = 'error';
    } else {
      this.status = 'default';
    }
    console.log(Array.isArray(value));

    if (value) {
      this.value = value;
    }
  }
}
