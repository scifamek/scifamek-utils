import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AclButtonComponent } from './button.component';
import { AclCoreModule } from 'angular-components-library/core';

@NgModule({
  declarations: [AclButtonComponent],
  imports: [CommonModule, AclCoreModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [AclButtonComponent],
})
export class AclButtonModule {}
