import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanningpaymentPage } from './planningpayment.page';

const routes: Routes = [
  {
    path: '',
    component: PlanningpaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanningpaymentPageRoutingModule {}
