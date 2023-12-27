import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembredetailPage } from './membredetail.page';

const routes: Routes = [
  {
    path: '',
    component: MembredetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembredetailPageRoutingModule {}
