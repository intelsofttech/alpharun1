import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartnerselectedPage } from './partnerselected.page';

const routes: Routes = [
  {
    path: '',
    component: PartnerselectedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnerselectedPageRoutingModule {}
