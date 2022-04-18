import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentListComponent } from './component-list/component-list.component';
import { ComponentExamplesModule, EXAMPLES } from '../component-examples/component-examples.module';
import { ComponentDetailComponent } from './component-detail/component-detail.component';
import { AdHostDirective } from '../components/ad-host.directive';
import { ComponentsModule } from '../components/components.module';
import { AclButtonModule } from 'angular-components-library/button';
import { AclSegmentedControlModule } from 'projects/angular-components-library/segmented-control/segmented-control.module';

@NgModule({
    declarations: [ComponentListComponent, ComponentDetailComponent],
    imports: [
        CommonModule,
        ComponentExamplesModule,
        ComponentsModule,
        AclButtonModule,
        AclSegmentedControlModule
    ],
    exports: [ComponentListComponent, ComponentDetailComponent]
})
export class PagesModule {}
