import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AclButtonModule } from 'angular-components-library/button';
import { AclDynamicInputComponent } from './dynamic-input.component';

@NgModule({
  declarations: [AclDynamicInputComponent],
  imports: [CommonModule, ReactiveFormsModule, AclButtonModule],
  exports: [AclDynamicInputComponent],
})
export class AclDynamicInputModule {}
