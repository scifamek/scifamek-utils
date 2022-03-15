import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AclSliderComponent } from './slider.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AclSliderComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [AclSliderComponent],
  schemas: [],
})
export class AclSliderModule {}
