import { Observable } from 'rxjs';

export interface IDefinitionModel {
  columns: {
    definition: string;
    tag: string;
  }[];
  definitions: string[];
  tags: string[];
  schema: any;
  relationship: {
    to: string;
    from: string;
    dataFunction: () => Observable<{ display: string; value: string }[]>;
  }[];
}
