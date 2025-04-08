import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AclCoordinateInputComponent } from './coordinate-input.component';

@NgModule({
  declarations: [AclCoordinateInputComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [AclCoordinateInputComponent],
})
export class AclCoordinateInputModule {}
