import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AclInputComponent } from './input.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AclInputComponent],
  imports: [CommonModule, MatInputModule, MatIconModule, ReactiveFormsModule],
  exports: [AclInputComponent],
  schemas: [],
})
export class AclInputModule {}
