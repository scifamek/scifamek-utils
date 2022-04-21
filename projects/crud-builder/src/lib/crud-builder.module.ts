import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { PagesModule } from './presentation/pages/pages.module';
import {
  CREATE_ACTION_TOKEN,
  DATA_FUNCTION_ACTION_TOKEN,
  DEFINITION_TOKEN,
  GENERAL_ACTIONS_TOKEN,
  INITIAL_PAGE_TOKEN,
  PRESENTATION_TOKEN,
  ROW_ACTIONS_TOKEN,
  SIZE_PAGE_TOKEN,
} from './crud-builder-injection-tokens';
import { IDefinitionModel } from './domain/models/definition.model';
import { IPresentationModel } from './domain/models/presentation.model';
import { IActionModel } from './domain/models/actions.model';
import { Observable } from 'rxjs';
import { CrudBuilderComponent } from './presentation/pages/crud-builder/crud-builder.component';

export interface CrudBuilderConfigurations {
  initialPage: number;
  definition: IDefinitionModel;
  presentation: IPresentationModel;
  rowActions: (IActionModel | string)[];
  generalActions: IActionModel[];
  createAction: IActionModel;
  dataFunctionAction: (
    page: number,
    sizePage: number,
    definition: IDefinitionModel
  ) => Observable<any>;
  sizePage: number;
}
@NgModule({
  declarations: [],
  imports: [PagesModule, CoreModule, CommonModule],
  exports: [PagesModule],
  providers: [],
})
export class CrudBuilderModule {
  static forRoot(config: CrudBuilderConfigurations) {
    return {
      ngModule: CrudBuilderModule,

      providers: [
        { provide: INITIAL_PAGE_TOKEN, useValue: config.initialPage || 0 },
        { provide: DEFINITION_TOKEN, useValue: config.definition },
        { provide: PRESENTATION_TOKEN, useValue: config.presentation },
        { provide: ROW_ACTIONS_TOKEN, useValue: config.rowActions },
        { provide: GENERAL_ACTIONS_TOKEN, useValue: config.generalActions },
        { provide: CREATE_ACTION_TOKEN, useValue: config.createAction },
        {
          provide: DATA_FUNCTION_ACTION_TOKEN,
          useValue: config.dataFunctionAction,
        },
        { provide: SIZE_PAGE_TOKEN, useValue: config.sizePage || 10 },
      ],
    };
  }
}
