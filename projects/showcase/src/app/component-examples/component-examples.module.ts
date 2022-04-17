import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonExampleComponent } from './button-example/button-example.component';
import { AclButtonModule } from 'angular-components-library/button';
import { AclInputModule } from 'angular-components-library/input';
import { AclSelectModule } from 'angular-components-library/select';
import { InputExampleComponent } from './input-example/input-example.component';
import { SelectExampleComponent } from './select-example/select-example.component';

export const EXAMPLES = [ButtonExampleComponent, InputExampleComponent,SelectExampleComponent];
@NgModule({
  declarations: EXAMPLES,
  imports: [CommonModule, AclButtonModule, AclInputModule, AclSelectModule],
  exports: EXAMPLES,
})
export class ComponentExamplesModule {}
