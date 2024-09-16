import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AclTimeInputComponent } from './time-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AclTimeInputComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [AclTimeInputComponent],
})
export class AclTimeInputModule {}
