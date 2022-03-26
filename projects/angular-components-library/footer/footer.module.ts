import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AclFooterComponent } from './footer.component';
import { AclButtonModule } from 'angular-components-library/button';

@NgModule({
  declarations: [AclFooterComponent],
  imports: [CommonModule, AclButtonModule],
  exports: [AclFooterComponent],
  schemas: [],
})
export class AclFooterModule {}
