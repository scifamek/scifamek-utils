import { Type } from '@angular/core';
import {
  ComponentFactoryResolver,
  Injectable,
  ViewContainerRef,
} from '@angular/core';
import { AdComponent } from '../models/ad-component-model';
@Injectable({
  providedIn: 'root',
})
export class DynamicComponentService {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  createComponent(component: Type<AdComponent>, viewContainerRef: ViewContainerRef, data: any, clear=false) {

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory<AdComponent>(
      component
    );

    if(clear){
      viewContainerRef.clear();
    }
    const createdComponent = viewContainerRef.createComponent<AdComponent>(
      componentFactory
    );
    createdComponent.instance.data = data;
    return createdComponent;
  }
}
