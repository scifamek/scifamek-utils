import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AclInputComponent } from './input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AclInputComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [AclInputComponent],
  schemas: [],
})
export class AclInputModule {}
