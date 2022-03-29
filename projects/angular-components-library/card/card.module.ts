import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AclCardComponent } from './card.component';
import { AclButtonModule } from 'angular-components-library/button';

@NgModule({
  declarations: [AclCardComponent],
  imports: [CommonModule, AclButtonModule],
  exports: [AclCardComponent],
})
export class AclCardModule {}
