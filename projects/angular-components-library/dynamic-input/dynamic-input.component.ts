import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
  forwardRef,
} from '@angular/core';

import { FormBuilder, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AclCardComponent } from 'angular-components-library/card';
import { AclChoiceInputComponent } from 'angular-components-library/choice-input';
import { AclColComponent } from 'angular-components-library/col';
import { AclContainerComponent } from 'angular-components-library/container';
import {
  DynamicComponentService,
  GeneralInputComponent,
  ITEM_VALUE,
} from 'angular-components-library/core';
import { AclFileComponent } from 'angular-components-library/file';
import { AclInputComponent } from 'angular-components-library/input';
import { AclInputDateComponent } from 'angular-components-library/input-date';
import { AclJsonInputComponent } from 'angular-components-library/json-input';
import { AclLabelComponent } from 'angular-components-library/label';
import { AclListInputComponent } from 'angular-components-library/list-input';
import { AclRowComponent } from 'angular-components-library/row';
import { AclSelectComponent } from 'angular-components-library/select';
import { AclSwitchComponent } from 'angular-components-library/switch';
import { AclTimeInputComponent } from 'angular-components-library/time-input';


@Component({
  selector: 'acl-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./styles/dynamic-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AclDynamicInputComponent),
      multi: true,
    },
  ],
})
export class AclDynamicInputComponent
  extends GeneralInputComponent
  implements OnInit, AfterViewInit
{
  @Input('add-label') addLabel: string = 'Agregar';
  @ViewChild('swap') checkbox?: ElementRef;
  @HostBinding('class') classAttr!: string;
  componentsMapper: any = {
    card: AclCardComponent,
    col: AclColComponent,
    container: AclContainerComponent,
    input: AclInputComponent,
    label: AclLabelComponent,
    row: AclRowComponent,
    select: AclSelectComponent,
    file: AclFileComponent,
    'input-date': AclInputDateComponent,
    'time-input': AclTimeInputComponent,
    'dynamic-input': AclDynamicInputComponent,
    switch: AclSwitchComponent,
    'choice-input': AclChoiceInputComponent,
    'json-input': AclJsonInputComponent,
    'list-input': AclListInputComponent,
  };
  currentEditingData?: {
    index: number;
    item: any;
  };
  data: any;
  @Input('edit-label') editLabel: string = 'Guardar';
  @ViewChild('form', {
    read: ViewContainerRef,
  })
  form?: ViewContainerRef;
  formControl!: FormControl;
  formControlReferences: {
    [property: string]: FormControl;
  } = {};
  @Input() hint!: string;
  @Input() label!: string;
  @Input() model?: {
    [property: string]: {
      display: string;
      componentName: string;
      configuration: any;
    };
  };
  @Input() opened = false;
  @Input() placeholder!: string;
  properties?: string[];
  @Input() repr?: string[];
  @HostBinding('style') style!: string;
  value: any[];

  constructor(
    private elementRef: ElementRef,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private dynamicComponentService: DynamicComponentService
  ) {
    super();
    this.formControlReferences = {};
    this.value = [];
    this.registerOnChange((value: any) => {
    });
  }

  addData() {

    if (!this.value || !Array.isArray(this.value)) {
      this.value = [];
    }
    const value: any = {};
    for (const property in this.formControlReferences) {
      const control = this.formControlReferences[property];

      value[property] = control.value;
    }

    if (this.currentEditingData) {
      this.value.splice(this.currentEditingData.index, 1, value);
      this.currentEditingData = undefined;
      this.clearForm();
    } else {
      this.value.push(value);
    }
    if (this.formControl) {
      this.formControl.setValue(this.value);
    }
    this._onChange(this.value);
  }

  clearForm() {
    for (const property in this.formControlReferences) {
      const control = this.formControlReferences[property];

      control.reset();
    }
  }

  delteItem(i: number) {

    this.value.splice(i, 1);
    this.formControl.setValue(this.value);
    this._onChange(this.value);
  }

  ngAfterViewInit(): void {

    if (this.checkbox) {
      (this.checkbox.nativeElement as HTMLInputElement).addEventListener(
        'change',
        (event: any) => {
          this.opened = event.target.checked;
        }
      );
    }
    if (this.model) {
      this.properties = Object.keys(this.model);
    }
    this.form?.clear();
    this.createForm();

    if (this.data) {
      this.updateVisualComponentValue(this.data[ITEM_VALUE]);
    } else if (this.value) {
      this.updateVisualComponentValue(this.value);
    }
  }

  private createForm() {
    if (this.model && this.form) {

      for (const property in this.model) {
        const element = this.model[property];

        const component = this.componentsMapper[element.componentName];

        const control = this.fb.control('');
        const ref = this.dynamicComponentService.createComponent(
          component,
          this.form,
          {
            configuration: {
              ...element.configuration,
              label: element.display,
            },
            formControl: control,
          }
        );
        const instance = ref.instance;

        this.formControlReferences[property] = control;
      }
    }
  }



  ngOnChanges(changes: SimpleChanges): void {
    this.createForm();
  }

  ngOnInit(): void {
    this.updateInputs();
  }

  setForm(item: any, index: number) {
    if (this.currentEditingData?.index == index) {
      this.currentEditingData = undefined;
      this.clearForm();
    } else {
      this.currentEditingData = {
        index,
        item,
      };

      for (const property in this.formControlReferences) {
        const control = this.formControlReferences[property];

        control.setValue(item[property]);
      }
    }
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
