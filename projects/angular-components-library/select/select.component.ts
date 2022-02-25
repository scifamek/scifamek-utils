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
import { MatSelect } from '@angular/material/select';
import {
  IGeneralComponent,
  ITEM_VALUE,
  GeneralInputComponent,
  STATES,
} from 'angular-components-library/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'acl-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
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
  implements OnInit, IGeneralComponent, AfterViewInit
{
  @Input() label!: string;
  @Input() hint!: string;
  @Input() placeholder!: string;
  @Input() icon!: string;
  @Input() multiple: boolean = false;

  @Input() relativeProperty!: any;
  @Output() onChange = new EventEmitter();

  @ViewChild(MatSelect) select!: MatSelect;

  formControl: any;
  items = of([]);

  constructor() {
    super();
  }
  data: any;
  dataFunction!: () => Observable<any>;

  ngOnInit(): void {
    if (this.data) {
      this.items = this.data['configuration']['items'];
      this.label = this.data['configuration']['label'];
      this.dataFunction = this.data['dataFunction'];
      this.placeholder = this.data['configuration']['placeholder'];
      this.icon = this.data['configuration']['icon'];
      this.multiple = this.data['configuration']['multiple'];

      this.relativeProperty = this.data.relativeProperty;
      this.formControl = this.data.formControl;
      this.getItems();
    }
  }

  getItems() {
    if (this.dataFunction) {
      this.items = this.dataFunction();
    }
  }
  markItems() {}

  ngAfterViewInit(): void {
    this.writeValue(this.data[ITEM_VALUE]);
    this.select.valueChange.subscribe(async (value: any[]) => {
      let data: any = (await this.items.toPromise())
        .filter((item: any) => value.includes(item.value))
        .reduce(
          (acc, curr, indx, arr) => {
            acc['text'] = [...acc['text'], curr['text']];
            acc['value'] = [...acc['value'], curr['value']];
            return acc;
          },
          {
            text: [],
            value: [],
          }
        );
      this.onChange.emit({
        relativeProperty: this.relativeProperty,
        ...data,
      });
    });
  }

  writeValue(value: any): void {
    super.writeValue(value);

    if (this.status == STATES.ERROR_STATE) {
    }

    if (this.select) {
      this.select.writeValue(value);
    }
  }
}
