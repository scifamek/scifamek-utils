import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AclSelectComponent } from './select.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AclSelectComponent],
  imports: [CommonModule, MatSelectModule, ReactiveFormsModule],
  exports: [AclSelectComponent],
  schemas: [],
})
export class AclSelectModule {}
