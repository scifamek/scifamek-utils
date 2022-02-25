import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AclCardComponent } from './card.component';
import { AclCoreModule } from 'angular-components-library/core';

@NgModule({
  declarations: [AclCardComponent],
  imports: [CommonModule, AclCoreModule],
  exports: [AclCardComponent],
})
export class AclCardModule {}
