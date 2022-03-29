import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentListComponent } from './pages/component-list/component-list.component';


const ROUTES: Routes = [
  {
    path: '',
    component: ComponentListComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(ROUTES)],
  providers: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
