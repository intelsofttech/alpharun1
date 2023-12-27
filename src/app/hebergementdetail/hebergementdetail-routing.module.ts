import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HebergementdetailPage } from './hebergementdetail.page';

const routes: Routes = [
  {
    path: '',
    component: HebergementdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HebergementdetailPageRoutingModule {}
