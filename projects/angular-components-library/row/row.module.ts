import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AclRowComponent } from './row.component';
import { AclCoreModule } from 'angular-components-library/core';

@NgModule({
  declarations: [AclRowComponent],
  imports: [CommonModule, AclCoreModule],
  exports: [AclRowComponent],
})
export class AclRowModule {}
