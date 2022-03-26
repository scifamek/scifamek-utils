import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AclInputComponent } from './input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AclInputComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [AclInputComponent],
})
export class AclInputModule {}
