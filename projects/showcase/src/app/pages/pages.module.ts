import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentListComponent } from './component-list/component-list.component';
import {
  ComponentExamplesModule,
  EXAMPLES,
} from '../component-examples/component-examples.module';
import { ComponentDetailComponent } from './component-detail/component-detail.component';
import { AdHostDirective } from '../components/ad-host.directive';
import { ComponentsModule } from '../components/components.module';
import { AclButtonModule } from 'angular-components-library/button';
import { CrudBuilderExampleComponent } from './crud-builder/crud-builder-example.component';
// import { CrudBuilderModule } from 'crud-builder';
import { AclCardModule } from 'angular-components-library/card';
import { AclFileModule } from 'angular-components-library/file';

@NgModule({
  declarations: [
    ComponentListComponent,
    ComponentDetailComponent,
    CrudBuilderExampleComponent,
  ],
  imports: [
    CommonModule,
    ComponentExamplesModule,
    ComponentsModule,
    AclButtonModule,
    AclCardModule,
    AclFileModule,
    // CrudBuilderModule,
  ],
  exports: [
    ComponentListComponent,
    ComponentDetailComponent,
    CrudBuilderExampleComponent,
  ],
})
export class PagesModule {}
