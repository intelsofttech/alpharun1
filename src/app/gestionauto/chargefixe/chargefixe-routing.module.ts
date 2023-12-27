import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChargefixePage } from './chargefixe.page';

const routes: Routes = [
  {
    path: '',
    component: ChargefixePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChargefixePageRoutingModule {}
