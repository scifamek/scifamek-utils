import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AclCardComponent } from './card.component';
import { AclCoreModule } from 'angular-components-library/core';
import { AclButtonModule } from 'angular-components-library/button';

@NgModule({
  declarations: [AclCardComponent],
  imports: [CommonModule, AclCoreModule, AclButtonModule],
  exports: [AclCardComponent],
})
export class AclCardModule {}
