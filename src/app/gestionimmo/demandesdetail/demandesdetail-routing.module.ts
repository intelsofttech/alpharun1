import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandesdetailPage } from './demandesdetail.page';

const routes: Routes = [
  {
    path: '',
    component: DemandesdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandesdetailPageRoutingModule {}
