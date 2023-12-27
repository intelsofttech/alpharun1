import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BonprintPage } from './bonprint.page';

const routes: Routes = [
  {
    path: '',
    component: BonprintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BonprintPageRoutingModule {}
