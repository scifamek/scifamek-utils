import { Observable } from 'rxjs';

export interface IActionModel {
  display: string;
  color?: string;
  icon?: string;
  event:
    | string
    | ((item?: any, items?: any) => Promise<any>)
    | ((item?: any, items?: any) => void)
    | ((item?: any, items?: any) => Observable<any>);
  mode?: 'new' | 'edit' | 'detail';
}
