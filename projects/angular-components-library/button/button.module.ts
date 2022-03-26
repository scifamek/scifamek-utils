import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AclButtonComponent } from './button.component';

@NgModule({
  declarations: [AclButtonComponent],
  imports: [CommonModule],
  exports: [AclButtonComponent],
})
export class AclButtonModule {}
