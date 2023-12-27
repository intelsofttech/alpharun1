import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationdetailPage } from './locationdetail.page';

const routes: Routes = [
  {
    path: '',
    component: LocationdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationdetailPageRoutingModule {}
