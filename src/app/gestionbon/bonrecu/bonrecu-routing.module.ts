import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BonrecuPage } from './bonrecu.page';

const routes: Routes = [
  {
    path: '',
    component: BonrecuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BonrecuPageRoutingModule {}
