import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BondecaisseretourPage } from './bondecaisseretour.page';

const routes: Routes = [
  {
    path: '',
    component: BondecaisseretourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BondecaisseretourPageRoutingModule {}
