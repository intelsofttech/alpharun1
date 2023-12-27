import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BondecaissePage } from './bondecaisse.page';

const routes: Routes = [
  {
    path: '',
    component: BondecaissePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BondecaissePageRoutingModule {}
