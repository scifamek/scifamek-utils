import { Injectable, Type, ViewContainerRef } from '@angular/core';
import { AdComponent } from '../models/ad-component.model';
@Injectable({
  providedIn: 'root',
})
export class DynamicComponentService {
  constructor() {}

  createComponent(
    component: Type<AdComponent>,
    viewContainerRef: ViewContainerRef,
    data: any,
    clear = false
  ) {
    if (clear) {
      viewContainerRef.clear();
    }
    const ref = viewContainerRef.createComponent<AdComponent>(component);
    ref.instance.data = data;
    return ref;
  }
}
