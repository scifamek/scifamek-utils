import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AclFileComponent } from './file.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AclButtonModule } from 'angular-components-library/button';

@NgModule({
  declarations: [AclFileComponent],
  imports: [CommonModule, ReactiveFormsModule, AclButtonModule],
  exports: [AclFileComponent],
})
export class AclFileModule {}
