import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentListComponent } from './pages/component-list/component-list.component';
import { ComponentDetailComponent } from './pages/component-detail/component-detail.component';
import { RouterModule, Routes } from '@angular/router';

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
