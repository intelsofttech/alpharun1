import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecaissementsPage } from './decaissements.page';

const routes: Routes = [
  {
    path: '',
    component: DecaissementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecaissementsPageRoutingModule {}
