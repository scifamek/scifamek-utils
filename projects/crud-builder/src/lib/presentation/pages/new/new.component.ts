import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { _countGroupLabelsBeforeOption } from '@angular/material/core';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AdDirective } from '../../../core/ad/ad.directive';
import { DynamicComponentService } from '../../services/dynamic-component.service';
import { containersMap } from '../../services/containers-map';
@Component({
  selector: 'crubu-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit, AfterViewInit, OnChanges {
  static route = 'new';

  @Input() item;

  @Input() mode;

  @Input() columns;

  @Input() definitions;

  @Input() tags;

  @Input() presentation;

  entityFG: FormGroup;

  rowsIndexes: {} = {};
  
  data;

  @ViewChild(AdDirective, { static: true }) adHost: AdDirective;

  constructor(
    private dynamicComponentService: DynamicComponentService,
    public changeDetectorRef: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      this.data = {};
      this.data['item'] = JSON.parse(params.item);
      this.data['columns'] = JSON.parse(params.columns);
      this.data['presentation'] = JSON.parse(params.presentation);
      this.data['mode'] = (params.mode);
      this.data['definitions'] = (params.definitions);
    });
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

  onNoClick(): void {
    // this.dialogRef.close();
  }

  onSubmit() {
    if (this.entityFG.valid) {
      // this.dialogRef.close(this.entityFG.value);
    }
  }

  addRows() {
    for (const key in this.data.presentation) {
      if (Object.prototype.hasOwnProperty.call(this.data.presentation, key)) {
        const element = this.data.presentation[key];
        const responsive = element['responsive'];

        if (
          Object.keys(this.rowsIndexes).indexOf(String(responsive['row'])) ===
          -1
        ) {
          this.rowsIndexes[responsive['row']] = [element];
        } else {
          this.rowsIndexes[responsive['row']].push(element);
        }
      }
    }

    for (const key in this.rowsIndexes) {
      if (Object.prototype.hasOwnProperty.call(this.rowsIndexes, key)) {
        const element = this.rowsIndexes[key];

        const ref = this.dynamicComponentService.createComponent(
          containersMap['crubu-row'],
          this.adHost.viewContainerRef,
          element
        );
      }
    }
  }

  createCol(responsive, component) {
    const ref = this.dynamicComponentService.createComponent(
      containersMap['crubu-col'],

      this.adHost.viewContainerRef,
      {
        responsive: responsive,
        component: component,
      }
    );
    return ref;
  }
  ngOnInit(): void {
    this.init();
  }
  init(){
    if (this.data.mode == 'create' || this.data.mode == 'edit' || this.data.mode == 'detail') {
      const group = {};
      let i = 0;
      this.addRows();
      for (const property of Object.keys(this.data.item)) {
        group[property] = new FormControl(
          this.data.item ? this.data.item[property] : ''
          // this.data.presentation[definition]['validators']
        );

        i++;
      }
      this.entityFG = new FormGroup(group);
    }
  }
}
