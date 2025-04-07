import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  QueryList,
  Renderer2,
  SimpleChanges,
  ViewChildren,
  forwardRef,
} from '@angular/core';

import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  GeneralInputComponent,
  ITEM_VALUE,
} from 'angular-components-library/core';

@Component({
  selector: 'acl-choice-input',
  templateUrl: './choice-input.component.html',
  styleUrls: ['./styles/choice-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AclChoiceInputComponent),
      multi: true,
    },
  ],
})
export class AclChoiceInputComponent
  extends GeneralInputComponent
  implements OnInit, AfterViewInit
{
  select() {
    throw new Error('Method not implemented.');
  }
  @HostBinding('class') classAttr!: string;

  data: any;
  formControl!: FormControl;
  @Input() label!: string;
  @Input() options?: {
    display: string;
    value: string;
  }[];
  @Input() multiple = true;
  @HostBinding('style') style!: string;
  value: any[] | any;
  myName:string; 

  @ViewChildren('optionItems') optionItems!: QueryList<ElementRef>;
  

  constructor(public elementRef: ElementRef, private renderer2: Renderer2) {
    super();
    this.value = [];
    this.myName = `G-${Math.random().toString()}`

    // this.innerFormControl = new FormControl('', [Validators.required]);
  }

  ngAfterViewInit(): void {
    if (this.data) {
      this.updateVisualComponentValue(this.data[ITEM_VALUE]);
    } else if (this.value) {
      this.updateVisualComponentValue(this.value);
    }
  }

  reco() {
    const value = this.optionItems
      .map((item) => {
        const input: HTMLInputElement = item.nativeElement;
        const checked = input.checked;
        return [checked, input];
      })
      .map(([checked, item], index) => {
        const val = this.options![index].value;
        if (checked) {
          return val;
        }
        return null;
      })
      .filter((x) => !!x);
    if (this.multiple) {
      this.value = value;
    } else {
      this.value = value.length ? value[0] : undefined;
    }
    if (this.formControl) {
      this.formControl.setValue(this.value);
    }
  }
  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    this.updateInputs();
  }

  updateVisualComponentValue(value: any): void {
    super.writeValue(value);
    if (this.formControl && this.formControl.errors) {
      this.status = 'error';
    } else {
      this.status = 'default';
    }

    if (value) {
      this.value = value;
    }
  }
}
