import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BilleditionPage } from './billedition.page';

const routes: Routes = [
  {
    path: '',
    component: BilleditionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BilleditionPageRoutingModule {}
