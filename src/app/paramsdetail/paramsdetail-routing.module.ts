import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParamsdetailPage } from './paramsdetail.page';

const routes: Routes = [
  {
    path: '',
    component: ParamsdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParamsdetailPageRoutingModule {}
