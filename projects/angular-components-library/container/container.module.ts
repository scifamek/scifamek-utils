import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AclContainerComponent } from './container.component';
import { AclCoreModule } from 'angular-components-library/core';

@NgModule({
  declarations: [AclContainerComponent],
  imports: [CommonModule, AclCoreModule],
  exports: [AclContainerComponent],
  schemas: [],
})
export class AclContainerModule {}
