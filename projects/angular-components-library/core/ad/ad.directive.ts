import { Directive, ElementRef, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[aclAd]',
})
export class AdDirective {
  constructor(
    public viewContainerRef: ViewContainerRef,
    public elementRef: ElementRef
  ) {}
}
