import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AclSegmentedControlComponent } from './segmented-control.component';



@NgModule({
  declarations: [
    AclSegmentedControlComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AclSegmentedControlComponent
  ]
})
export class AclSegmentedControlModule { }
