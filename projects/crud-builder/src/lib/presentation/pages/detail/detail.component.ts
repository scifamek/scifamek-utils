import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { _countGroupLabelsBeforeOption } from '@angular/material/core';
// import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
// import { AdDirective } from '../../../core/ad/ad.directive';
import { IActionModel } from '../../../domain/models/actions.model';
// import { componentsMap } from '../../services/components-map';
import { componentMap } from 'angular-components-library/component-mapper';
import {
  DynamicComponentService,
  AdDirective,
} from 'angular-components-library/core';
// import { DynamicComponentService } from '../../services/dynamic-component.service';
@Component({
  selector: 'crubu-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, AfterViewInit, OnChanges {
  static route = 'detail';

  @Input() item: any;

  @Input() mode!: string;

  @Input() columns!: any;

  @Input() definitions: any;

  @Input() tags: any;

  @Input() presentation: any;

  /**
   * This is the action used for updating data to the model
   *
   * @type {IActionModel}
   * @memberof ListComponent
   */
  @Input('update-action') updateAction!: IActionModel;

  @Output('updatedItem') updatedItem = new EventEmitter();

  data!: any;

  formGroup!: FormGroup;

  @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;

  /**
   * Configuration for displaying the representation of the item
   *
   * @type {*}
   * @memberof DetailComponent
   */
  reprConfiguration: any;

  repr!: string;

  constructor(
    private dynamicComponentService: DynamicComponentService,
    public changeDetectorRef: ChangeDetectorRef
  ) {
    this.formGroup = new FormGroup({});
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes.item) {
      }
    }
  }

  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  ngOnInit(): void {
    if (this.data) {
      this.updateAction = this.data.updateAction;
      this.item = this.data.item;
      this.reprConfiguration = this.data.repr;
      this.mode = this.data.mode;
    }
    this.init();
  }

  extractRepresentation() {
    let values: string[] = [];
    for (const part of this.reprConfiguration) {
      if (this.item && part in this.item) {
        values.push(this.item[part]);
      }
    }
    this.repr = values.join(' ');
  }

  init() {
    this.extractRepresentation();

    const group = {};
    let i = 0;
    if ('component' in this.data['presentation']) {
      this.render(
        this.adHost.viewContainerRef,
        this.data['presentation'],
        group
      );
    } else {
      if ('children' in this.data['presentation']) {
        for (const child of this.data['presentation']['children']) {
          this.render(this.adHost.viewContainerRef, child, group);
        }
      }
    }

    this.formGroup = new FormGroup(group);
  }

  private render(ref: ViewContainerRef, componentConfig: any, group: any) {
    // console.log(componentMap);

    const formControlData = {
      value: '',
      disabled: this.data.mode == 'detail',
    };
    const property = componentConfig['property'];
    let formControl;
    let data = { ...componentConfig };
    let relation: any;
    if (property) {
      formControlData.value =
        this.item && property in this.item ? this.item[property] : '';
      formControl = new FormControl(
        formControlData
        // this.data.presentation[definition]['validators']
      );
      // this.formGroup.addControl(property, formControl);
      if (this.data.relationship) {
        relation = (this.data.relationship as Array<any>)
          .filter((item) => {
            return item.from == property;
          })
          .pop();
      }

      data = {
        ...data,
        formControl: formControl,
        dataFunction: relation?.dataFunction || null,
        relativeProperty: relation?.to || null,
      };
      group[property] = formControl;
    }
    const component = componentConfig['component'];
    const componentClass = (componentMap as any)[component];
    // console.log(componentConfig, componentClass);
    if (!(componentConfig['component'] in ['acl-col', 'acl-row'])) {
      data = {
        ...data,
        itemValue:
          this.item && property in this.item ? this.item[data['property']] : '',
      };
    }
    const newComponent = this.dynamicComponentService.createComponent(
      componentClass,
      ref,
      data
    );
    if (relation) {
      (newComponent.instance as any).onChange.subscribe((displayData: any) => {
        this.item[relation.to] = displayData.display;
        console.log(displayData,'Viene del onchange');
      });
    }
    if ('children' in componentConfig) {
      for (const child of componentConfig['children']) {
        // console.log(newComponent.instance, 123);
        const newRef = newComponent.instance.adHost;
        this.render(newRef.viewContainerRef, child, group);
      }
    }
    return newComponent;
  }

  public back() {
    this.updatedItem.emit({ item: this.formGroup.value, mode: this.data.mde });
  }
  public saveItem() {
    const newItem = this.formGroup.value;

    for (const key in newItem) {
      if (Object.prototype.hasOwnProperty.call(newItem, key)) {
        const element = newItem[key];
        this.item[key] = element;
      }
    }
    this.updatedItem.emit({ item: this.item, mode: this.mode });
    if (this.updateAction) {
      (this.updateAction.event as (item?: any) => Observable<any>)(this.item);
    }
  }
}
