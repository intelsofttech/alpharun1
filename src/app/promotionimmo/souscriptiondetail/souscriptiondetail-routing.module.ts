import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SouscriptiondetailPage } from './souscriptiondetail.page';

const routes: Routes = [
  {
    path: '',
    component: SouscriptiondetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SouscriptiondetailPageRoutingModule {}
