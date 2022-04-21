import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { IActionModel } from './domain/models/actions.model';
import { IDefinitionModel } from './domain/models/definition.model';
import { IPresentationModel } from './domain/models/presentation.model';

export const INITIAL_PAGE_TOKEN = new InjectionToken<number>(
  'Initial page for the module. This is zero by default.'
);
export const DEFINITION_TOKEN = new InjectionToken<IDefinitionModel>(
  'Labels, properties and columns for the model that you have to use.'
);

export const PRESENTATION_TOKEN = new InjectionToken<IPresentationModel>(
  'Represents how to display the information.'
);

export const ROW_ACTIONS_TOKEN = new InjectionToken<(IActionModel | string)[]>(
  'Actions per file'
);

export const GENERAL_ACTIONS_TOKEN = new InjectionToken<IActionModel[]>(
  'Actions for a group of items.'
);

export const CREATE_ACTION_TOKEN = new InjectionToken<IActionModel>(
  'Action used for creating a new item.'
);

export const DATA_FUNCTION_ACTION_TOKEN = new InjectionToken<
(page: number, sizePage:number, definition: IDefinitionModel) => Observable<any>
>('Function that lets you to get the data.');


export const SIZE_PAGE_TOKEN = new InjectionToken<number>(
    'Size of each page in the table. It is 15 by default.'
  );