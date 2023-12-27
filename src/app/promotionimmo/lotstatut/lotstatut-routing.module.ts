import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LotstatutPage } from './lotstatut.page';

const routes: Routes = [
  {
    path: '',
    component: LotstatutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LotstatutPageRoutingModule {}
