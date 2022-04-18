import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AclSelectComponent } from './select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AclDropdownItemModule } from 'angular-components-library/dropdown-item';

@NgModule({
  declarations: [AclSelectComponent],
  imports: [CommonModule, ReactiveFormsModule, AclDropdownItemModule],
  exports: [AclSelectComponent],
  schemas: [],
})
export class AclSelectModule {}
