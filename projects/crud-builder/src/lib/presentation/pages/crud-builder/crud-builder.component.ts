import {
  AfterViewInit,
  Component,
  ComponentRef,
  ElementRef,
  Injector,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { Observable } from 'rxjs';
import { AdDirective } from '../../../core/ad/ad.directive';
import { DEFINITION_TOKEN } from '../../../crud-builder-injection-tokens';
import { IActionModel } from '../../../domain/models/actions.model';
import { IDefinitionModel } from '../../../domain/models/definition.model';
import { IPresentationModel } from '../../../domain/models/presentation.model';
import { DynamicComponentService } from '../../services/dynamic-component.service';
import { DetailComponent } from '../detail/detail.component';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'crubu-crud-builder',
  templateUrl: './crud-builder.component.html',
})
export class CrudBuilderComponent implements OnInit, AfterViewInit {
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
   * @type {((IActionModel | string)[])}
   * @memberof ListComponent
   */
  @Input('row-actions') rowActions!: (IActionModel | string)[];

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
   * This is the action used for updating data to the model
   *
   * @type {IActionModel}
   * @memberof ListComponent
   */
  @Input('update-action') updateAction!: IActionModel;

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

  @ViewChildren(AdDirective) listAdHost!: QueryList<AdDirective>;
  // @ViewChild('detail', { static: true }) detailAdHost: AdDirective;

  constructor(
    public injector: Injector,
    public componentRef: ElementRef,
    private dynamicComponentService: DynamicComponentService
  ) {}
  ngAfterViewInit(): void {
    this.render();
  }

  hide(elementRef: AdDirective): void {
    (
      elementRef.viewContainerRef.element.nativeElement as HTMLElement
    ).classList.add('hidden');
  }
  unhide(elementRef: AdDirective): void {
    (
      elementRef.viewContainerRef.element.nativeElement as HTMLElement
    ).classList.remove('hidden');
  }
  render(): void {
    const host: AdDirective = this.listAdHost.get(0) as AdDirective;
    const detailHost: AdDirective = this.listAdHost.get(1) as AdDirective;

    let listComponent = this.dynamicComponentService.createComponent(
      ListComponent,
      host.viewContainerRef,
      {
        initialPage: this.initialPage,
        definition: this.definition,
        presentation: this.presentation,
        rowActions: this.rowActions,
        generalActions: this.generalActions,
        createAction: this.createAction,
        dataFunction: this.dataFunction,
        sizePage: this.sizePage,
      }
    );

    // this.hide(detailHost);

    (listComponent.instance as ListComponent).selectedItem.subscribe((data) => {
      host.viewContainerRef.detach(0);

      const detailComponent = this.dynamicComponentService.createComponent(
        DetailComponent,
        host.viewContainerRef,
        {
          ...data,
          updateAction: this.updateAction,
          repr: this.definition.schema.repr,
          relationship: this.definition.relationship,
        },
        true
      );

      (detailComponent.instance as DetailComponent).updatedItem.subscribe(
        (data) => {
          if (data.mode == 'new') {
          
            (this.createAction.event as (item?: any) => Promise<any>)(
              data.item
            );
            const instance: ListComponent =
              listComponent.instance as ListComponent;
              instance.insertNewItem(data.item);
            
            listComponent.changeDetectorRef.detectChanges();
          }

          host.viewContainerRef.detach(0);

          host.viewContainerRef.insert(listComponent.hostView);
        }
      );
    });
  }
  ngOnInit(): void {}
}
