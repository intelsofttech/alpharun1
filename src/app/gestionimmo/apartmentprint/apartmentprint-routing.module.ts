import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApartmentprintPage } from './apartmentprint.page';

const routes: Routes = [
  {
    path: '',
    component: ApartmentprintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApartmentprintPageRoutingModule {}
