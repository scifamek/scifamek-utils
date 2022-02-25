import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AclSliderComponent } from './slider.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [AclSliderComponent],
  imports: [CommonModule, ReactiveFormsModule, MatSliderModule],
  exports: [AclSliderComponent],
  schemas: [],
})
export class AclSliderModule {}
