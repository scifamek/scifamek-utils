import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AclFooterComponent } from './footer.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AclFooterComponent],
  imports: [CommonModule, MatIconModule],
  exports: [AclFooterComponent],
  schemas: [],
})
export class AclFooterModule {}
