import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApartmentstatusPage } from './apartmentstatus.page';

const routes: Routes = [
  {
    path: '',
    component: ApartmentstatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApartmentstatusPageRoutingModule {}
