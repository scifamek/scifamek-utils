import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter, Input,
  OnChanges, Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdDirective } from '../../../core/ad/ad.directive';
import { IActionModel } from '../../../domain/models/actions.model';
import { IDefinitionModel } from '../../../domain/models/definition.model';
import { IPresentationModel } from '../../../domain/models/presentation.model';

@Component({
  selector: 'crubu-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements AfterViewInit, OnChanges {
  static route = 'list';

  lastPage!: number;
  @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;

  /**
   *Current page of the data
   *
   * By default, it's zero, and continuely will be changed when the user interact on the Graphical interface.
   * @memberof ListComponent
   */
  @Input() initialPage = 0;

  /**
   * Model that configures the columns, tags, definitions and schema to be used.
   *
   *  columns: [
   *     {
   *       definition: string;
   *       tag: string;
   *     }
   *   ];
   *   definitions: string[];
   *   tags: string[];
   *   schema: any;
   * @type {IDefinitionModel}
   * @memberof ListComponent
   */
  @Input() definition!: IDefinitionModel;

  /**
   * Configure how to visualize the information on the screen.
   *
   * This structure is recursive, that means that inside the screen, the algorithm makes
   * a tree with the components provided by the library.
   *
   * @type {IPresentationModel}
   * @memberof ListComponent
   */
  @Input() presentation!: IPresentationModel;

  /**
   * Actions executed per row
   *
   * @type {((IActionModel)[])}
   * @memberof ListComponent
   */
  @Input('row-actions') rowActions!: (IActionModel)[];

  /**
   *Actions executed for all data inside the view
   *
   * @type {IActionModel[]}
   * @memberof ListComponent
   */
  @Input('general-actions') generalActions!: IActionModel[];

  /**
   * This is the action used for creating data to the model
   *
   * @type {IActionModel}
   * @memberof ListComponent
   */
  @Input('create-action') createAction!: IActionModel;

  /**
   * This function lets to get the data
   *
   * @memberof ListComponent
   */
  @Input('data-function') dataFunction!: (
    page: number,
    sizePage: number,
    definition: any
  ) => Observable<any>;

  /**
   *Size of the page
   *
   * @memberof ListComponent
   */
  @Input('size-page') sizePage = 10;

  items: any;
  selectedItems: any;
  data: any;

  page!: number;
  @Output('selectedItem') selectedItem = new EventEmitter();
  @ViewChild(MatTable, { static: false }) table!: MatTable<any>;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef // @Inject(INITIAL_PAGE_TOKEN) private initialPage, // @Inject(DEFINITION_TOKEN) public definition, // @Inject(PRESENTATION_TOKEN) private presentation, // @Inject(ROW_ACTIONS_TOKEN) private rowActions, // @Inject(GENERAL_ACTIONS_TOKEN) public generalActions,
  ) // @Inject(CREATE_ACTION_TOKEN) public createAction,
  // @Inject(DATA_FUNCTION_ACTION_TOKEN) private dataFunction,
  // @Inject(SIZE_PAGE_TOKEN) private sizePage
  {
    this.items = {};
    this.selectedItems = {};
  }
  ngOnInit(): void {
    if (this.data) {
      this.initialPage = this.data.initialPage;
      this.definition = this.data.definition;
      this.presentation = this.data.presentation;
      this.rowActions = this.data.rowActions;
      this.generalActions = this.data.generalActions;
      this.createAction = this.data.createAction;
      this.dataFunction = this.data.dataFunction;
      this.sizePage = this.data.sizePage;

      this.page = this.initialPage;
      this.lastPage = this.page;

      this.addActions();
    }
  }

  ngAfterViewInit(): void {
    this.goToPage(0);
    this.changeDetectorRef.detectChanges();
  }

  pageIsValid() {
    return this.initialPage in this.items;
  }
  ngOnChanges(changes: SimpleChanges): void {
    const condition =
      changes.definition !== undefined &&
      (changes.definition.currentValue !== undefined ||
        changes.definition.previousValue !== undefined);
    if (condition) {
      this.addActions();
    }
  }
  insertNewItem(newItem: any) {
    this.items[this.page].unshift(newItem);
    this.table.dataSource = this.items[this.page];
    this.table.renderRows();
  }
  updateItem(event: any, data: any) {
    let index = 0;
    for (const item of this.selectedItems[this.page]) {
      if (JSON.stringify(item) === JSON.stringify(data)) {
        break;
      }
      index += 1;
    }
    if (event.target.checked) {
      this.selectedItems[this.page].push(data);
    } else {
      this.selectedItems[this.page].splice(index, 1);
    }
    this.selectedItems = { ...this.selectedItems };
  }
  addActions() {
    this.definition.definitions.unshift(' ');
    this.definition.definitions.push('actions');
  }

  execute(action: IActionModel, obj: any) {
     const exec = (item: any, items: any[]) =>{
      if (typeof action.event === 'string') {
        eval(action.event);
      } else {
        action.event(item, items);
      }
    }

    let dialogRef;
    if (action) {
      if (action.mode) {
        dialogRef = this.goToDetail(action.mode, obj);
      } else {
        exec(obj, this.items[this.page]);
      }
      this.table.renderRows();
    }
  }
  goToPage(diff: number) {
    if (this.page + diff >= 0) {
      this.page += diff;
    }
    if (this.page > this.lastPage) {
      this.lastPage = this.page;
    }
    if (!(this.page in this.items) && this.dataFunction) {
      this.dataFunction(this.page, this.sizePage, this.definition).subscribe(
        (data) => {
          this.items[this.page] = data;
          this.selectedItems[this.page] = [];
        }
      );
    }
  }

  goToDetail(mode: string, item: any) {
    this.selectedItem.emit({
      item: item,
      mode: mode,
      columns: this.definition.columns,
      definitions: this.definition.definitions,
      tags: this.definition.tags,
      presentation: this.presentation,
    });
  }
}
