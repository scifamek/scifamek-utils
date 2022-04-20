import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentListComponent } from './pages/component-list/component-list.component';
import { CrudBuilderExampleComponent } from './pages/crud-builder/crud-builder-example.component';


const ROUTES: Routes = [
  {
    path: '',
    component: ComponentListComponent,
  },
  {
    path: 'crud-builder',
    component: CrudBuilderExampleComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(ROUTES)],
  providers: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
