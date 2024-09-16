import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AclButtonModule } from 'angular-components-library/button';
import { AclDropdownItemModule } from 'angular-components-library/dropdown-item';
import { AclInputModule } from 'angular-components-library/input';
import { AclSelectModule } from 'angular-components-library/select';
import { ButtonExampleComponent } from './button-example/button-example.component';
import { DropdownItemsExampleComponent } from './dropdown-items-example/dropdown-items-example.component';
import { InputExampleComponent } from './input-example/input-example.component';
import { SelectExampleComponent } from './select-example/select-example.component';
import { AclFileComponent, AclFileModule } from 'angular-components-library/file';
import { FileExampleComponent } from './file-example/file-example.component';

export const EXAMPLES = [
  ButtonExampleComponent,
  InputExampleComponent,
  SelectExampleComponent,
  DropdownItemsExampleComponent,
  FileExampleComponent
];
@NgModule({
  declarations: EXAMPLES,
  imports: [
    CommonModule,
    AclButtonModule,
    AclFileModule,
    AclInputModule,
    AclSelectModule,
    AclDropdownItemModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: EXAMPLES,
})
export class ComponentExamplesModule {}
