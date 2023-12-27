import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartnermodalPage } from './partnermodal.page';

const routes: Routes = [
  {
    path: '',
    component: PartnermodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnermodalPageRoutingModule {}
