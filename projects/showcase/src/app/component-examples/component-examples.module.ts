import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AclButtonModule } from 'angular-components-library/button';
import { AclDropdownItemModule } from 'angular-components-library/dropdown-item';
import { AclInputModule } from 'angular-components-library/input';
import { AclSelectModule } from 'angular-components-library/select';
import { AclSegmentedControlModule } from 'projects/angular-components-library/segmented-control/segmented-control.module';
import { ButtonExampleComponent } from './button-example/button-example.component';
import { DropdownItemsExampleComponent } from './dropdown-items-example/dropdown-items-example.component';
import { InputExampleComponent } from './input-example/input-example.component';
import { SegmentedControlExampleComponent } from './segmented-control-example/segmented-control-example.component';
import { SelectExampleComponent } from './select-example/select-example.component';

export const EXAMPLES = [
  ButtonExampleComponent,
  InputExampleComponent,
  SelectExampleComponent,
  DropdownItemsExampleComponent,
  SegmentedControlExampleComponent
];
@NgModule({
  declarations: EXAMPLES,
  imports: [
    CommonModule,
    AclButtonModule,
    AclInputModule,
    AclSelectModule,
    AclDropdownItemModule,
    AclSegmentedControlModule
  ],
  exports: EXAMPLES,
})
export class ComponentExamplesModule {}
