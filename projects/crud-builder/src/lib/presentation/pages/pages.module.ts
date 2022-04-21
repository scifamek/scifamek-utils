import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AclColComponent, AclColModule } from 'angular-components-library/col';
// import {
//   AclSliderComponent,
//   AclSliderModule,
// } from 'angular-components-library/slider';
import {
  AclContainerComponent,
  AclContainerModule,
} from 'angular-components-library/container';
import { AclCoreModule } from 'angular-components-library/core';
import { AclFooterModule } from 'angular-components-library/footer';
import {
  AclInputComponent,
  AclInputModule,
} from 'angular-components-library/input';
import {
  AclLabelComponent,
  AclLabelModule,
} from 'angular-components-library/label';
import { AclRowComponent, AclRowModule } from 'angular-components-library/row';
import { AclButtonModule } from 'angular-components-library/button';
import {
  AclSelectComponent,
  AclSelectModule,
} from 'angular-components-library/select';
import { CoreModule } from '../../core/core.module';
import { CrudBuilderComponent } from './crud-builder/crud-builder.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';

@NgModule({
  entryComponents: [
    DetailComponent,
    AclInputComponent,
    AclColComponent,
    AclContainerComponent,
    AclRowComponent,
    AclLabelComponent,
    AclSelectComponent,
    // AclSliderComponent,
  ],
  declarations: [ListComponent, DetailComponent, CrudBuilderComponent],
  imports: [
    CommonModule,
    MatTableModule,
    CoreModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    AclCoreModule,
    AclInputModule,
    AclColModule,
    AclContainerModule,
    AclRowModule,
    AclLabelModule,
    AclSelectModule,
    AclButtonModule,
    // AclSliderModule,
    AclFooterModule,
  ],
  exports: [ListComponent, DetailComponent, CrudBuilderComponent],
})
export class PagesModule {}
