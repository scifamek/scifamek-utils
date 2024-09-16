import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AclCardComponent } from './card.component';
import { AclButtonModule } from 'angular-components-library/button';
import { AclCoreModule } from 'angular-components-library/core';

@NgModule({
  declarations: [AclCardComponent],
  imports: [CommonModule, AclButtonModule, AclCoreModule],
  exports: [AclCardComponent],
})
export class AclCardModule {}
