import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonExampleComponent } from './button-example/button-example.component';
import { AclButtonModule } from 'angular-components-library/button';
import { AclInputModule } from 'angular-components-library/input';
import { InputExampleComponent } from './input-example/input-example.component';

export const EXAMPLES = [ButtonExampleComponent, InputExampleComponent];
@NgModule({
  declarations: EXAMPLES,
  imports: [CommonModule, AclButtonModule, AclInputModule],
  exports: EXAMPLES,
})
export class ComponentExamplesModule {}
