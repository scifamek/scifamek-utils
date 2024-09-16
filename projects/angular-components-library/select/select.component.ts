import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  GeneralInputComponent,
  ITEM_VALUE,
} from 'angular-components-library/core';

import { IItem } from 'angular-components-library/dropdown-item';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { SelectBehavior } from './select.behavior';

@Component({
  selector: 'acl-select',
  templateUrl: './select.component.html',
  styleUrls: ['./styles/select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AclSelectComponent),
      multi: true,
    },
  ],
})
export class AclSelectComponent
  extends GeneralInputComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  behavior!: SelectBehavior;

  updateBehaviorData: BehaviorSubject<string>;
  updateBehaviorDataSubscription!: Subscription;
  formControl!: FormControl;

  @Input() label!: string;
  @Input() hint!: string;
  @Input() placeholder!: string;
  @Input() icon!: string;
  @Input() multiple: boolean = false;
  @Input() items: IItem[];
  @Input() color!: string;

  @Output() onChange: EventEmitter<any> ;
  relativeProperty: any;

  @HostBinding('class') classAttr!: string;
  @HostBinding('style') style!: string;

  @HostBinding('attr.color') get attrColor() {
    return this.color;
  }

  constructor(private elementRef: ElementRef) {
    super();
    this.onChange = new EventEmitter();
    this.behavior = new SelectBehavior();
    this.items = [];

    this.updateBehaviorData = new BehaviorSubject('');
  }
  ngOnDestroy(): void {
    this.updateBehaviorDataSubscription.unsubscribe();
  }
  data: any;
  @Input() dataFunction!: () => Observable<any> | (() => any[]);

  ngOnInit(): void {
    this.updateInputs();
    this.getItems();
  }

  onChangeFunction(value: any) {
    this.value = value;
    if (this.formControl) {
      this.formControl.setValue(this.value.value);
      if (this.formControl.errors) {
        this.status = 'error';
      } else {
        this.status = 'default';
      }
    }
    this._onChange(this.value?.value);
    this.onChange.emit(value);
  }

  getItems() {
    if (this.dataFunction) {
      const data = this.dataFunction();
      if (data instanceof Observable) {
        data.subscribe((items: IItem[]) => {
          this.items.push(...items);
        });
      }
    }
  }
  
  markItems() {}

  ngAfterViewInit(): void {
    this.behavior.setRoot(this.elementRef.nativeElement);
    this.behavior.onChangeFunction = (value) => this.onChangeFunction(value);
    this.behavior.init();

    this.updateBehaviorDataSubscription = this.updateBehaviorData.subscribe(
      (value) => {
        this.updateVisualComponentValue(value);
      }
    );
    if (this.data) {
      this.updateVisualComponentValue(this.data[ITEM_VALUE]);
    }
    // this.select.valueChange.subscribe(async (value: any[]) => {
    //   let data: any = (await this.items.toPromise())
    //     .filter((item: any) => value.includes(item.value))
    //     .reduce(
    //       (acc, curr, indx, arr) => {
    //         acc['text'] = [...acc['text'], curr['text']];
    //         acc['value'] = [...acc['value'], curr['value']];
    //         return acc;
    //       },
    //       {
    //         text: [],
    //         value: [],
    //       }
    //     );
    //   this.onChange.emit({
    //     relativeProperty: this.relativeProperty,
    //     ...data,
    //   });
    // });
  }
  writeValue(value: any): void {
    this.updateBehaviorData.next(value);
  }

  updateVisualComponentValue(value: any): void {
    super.writeValue(value);

    if (this.formControl.errors) {
      this.status = 'error';
    } else {
      this.status = 'default';
    }


    const selectedDisplay: IItem | undefined = this.items
      .filter((item) => {
        return item.value == value;
      })
      ?.pop();
    if (selectedDisplay) {
      this.behavior.updateVisualComponentValue(selectedDisplay.display);
    }
  }
}
