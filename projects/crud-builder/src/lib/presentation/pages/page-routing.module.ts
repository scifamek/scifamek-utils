import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';

export const CrudBuilderRoutes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'detail',
    component: DetailComponent,
  },
];


export default CrudBuilderRoutes;