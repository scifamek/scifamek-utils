import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AclLabelComponent } from './label.component';
@NgModule({
  declarations: [AclLabelComponent],
  imports: [CommonModule],
  exports: [AclLabelComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AclLabelModule {}
