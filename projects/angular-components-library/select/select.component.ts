import {
  Component,
  Input,
  OnInit,
  forwardRef,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  RenderedGeneralComponent,
  ITEM_VALUE,
  GeneralInputComponent,
  STATES,
} from 'angular-components-library/core';
import { Observable, of } from 'rxjs';

interface IItem {
  display: string;
  value: any;
}
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
  implements OnInit, AfterViewInit
{
  @Input() label!: string;
  @Input() hint!: string;
  @Input() placeholder!: string;
  @Input() icon!: string;
  @Input() multiple: boolean = false;

  @Input() color!: string;
  @Output() onChange = new EventEmitter();

  formControl: any;
  @Input() items: IItem[] ;
  constructor() {
    super();
    this.items = []
  }
  data: any;
  dataFunction!: () => Observable<any> | (() => any[]);

  ngOnInit(): void {
    this.updateInputs();
    this.getItems();
  }

  getItems() {
    if (this.dataFunction) {
      const data = this.dataFunction();
      if (data instanceof Observable) {
        data.subscribe((items: any[]) => {
          console.log(typeof items)
          const newItems: IItem[] = items;
          // this.items.push(items);
        });
      }
    }
  }
  markItems() {}

  ngAfterViewInit(): void {
    if (this.data) {
      this.writeValue(this.data[ITEM_VALUE]);
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
    super.writeValue(value);
    // if (this.select) {
    //   this.select.writeValue(value);
    // }
  }
}
