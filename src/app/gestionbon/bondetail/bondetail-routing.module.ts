import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BondetailPage } from './bondetail.page';

const routes: Routes = [
  {
    path: '',
    component: BondetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BondetailPageRoutingModule {}
