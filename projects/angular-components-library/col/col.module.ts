import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AclColComponent } from './col.component';
import { AclCoreModule } from 'angular-components-library/core';

@NgModule({
  declarations: [AclColComponent],
  imports: [CommonModule, AclCoreModule],
  exports: [AclColComponent],
})
export class AclColModule {}
