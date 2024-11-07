import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AclSwitchComponent } from './switch.component';

@NgModule({
  declarations: [AclSwitchComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [AclSwitchComponent],
})
export class AclSwitchModule {}
