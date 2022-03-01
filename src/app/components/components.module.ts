import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdHostDirective } from './ad-host.directive';



@NgModule({
  declarations: [
    AdHostDirective
  ],
  exports: [
    AdHostDirective
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
