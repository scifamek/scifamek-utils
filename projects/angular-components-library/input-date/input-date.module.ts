import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AclInputDateComponent } from './input-date.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AclInputDateComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [AclInputDateComponent],
})
export class AclInputDateModule {}
