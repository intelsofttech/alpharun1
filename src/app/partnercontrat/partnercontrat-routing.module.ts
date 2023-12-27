import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartnercontratPage } from './partnercontrat.page';

const routes: Routes = [
  {
    path: '',
    component: PartnercontratPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnercontratPageRoutingModule {}
