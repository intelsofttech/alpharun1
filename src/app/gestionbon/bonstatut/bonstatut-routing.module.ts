import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BonstatutPage } from './bonstatut.page';

const routes: Routes = [
  {
    path: '',
    component: BonstatutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BonstatutPageRoutingModule {}
