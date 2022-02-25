import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdDirective } from './ad/ad.directive';
import { DynamicComponentService } from './services/dynamic-component.service';

@NgModule({
  declarations: [AdDirective],
  imports: [CommonModule],
  providers: [DynamicComponentService],
  exports: [AdDirective],
})
export class AclCoreModule {}
