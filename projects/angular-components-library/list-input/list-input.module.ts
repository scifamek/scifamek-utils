import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AclButtonModule } from 'angular-components-library/button';
import { AclInputModule } from 'angular-components-library/input';
import { AclListInputComponent } from './list-input.component';

@NgModule({
  declarations: [AclListInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AclButtonModule,
    AclInputModule,
    MatIconModule,
  ],
  exports: [AclListInputComponent],
})
export class AclListInputModule {}
