import { ElementRef, ViewContainerRef } from "@angular/core";

export interface AdComponent {
  data: any;
  adHost: {
    viewContainerRef: ViewContainerRef;
    elementRef: ElementRef;
  };
}
