import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AclJsonInputComponent } from './json-input.component';
@NgModule({
  declarations: [AclJsonInputComponent],
  imports: [CommonModule, FormsModule],
  exports: [AclJsonInputComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AclJsonInputModule {}
