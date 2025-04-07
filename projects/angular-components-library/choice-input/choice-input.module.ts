import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AclButtonModule } from 'angular-components-library/button';
import { AclInputModule } from 'angular-components-library/input';
import { AclChoiceInputComponent } from './choice-input.component';

@NgModule({
  declarations: [AclChoiceInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AclButtonModule,
    AclInputModule,
    MatIconModule,
  ],
  exports: [AclChoiceInputComponent],
})
export class AclChoiceInputModule {}
