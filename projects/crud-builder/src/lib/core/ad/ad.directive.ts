import { Directive, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[crubuAd]'
})
export class AdDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
