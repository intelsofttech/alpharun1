import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuittancedetailPage } from './quittancedetail.page';

const routes: Routes = [
  {
    path: '',
    component: QuittancedetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuittancedetailPageRoutingModule {}
