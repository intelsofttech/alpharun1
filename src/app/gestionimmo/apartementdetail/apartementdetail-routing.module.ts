import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApartementdetailPage } from './apartementdetail.page';

const routes: Routes = [
  {
    path: '',
    component: ApartementdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApartementdetailPageRoutingModule {}
