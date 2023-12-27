import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionimmoquittancePage } from './gestionimmoquittance.page';

const routes: Routes = [
  {
    path: '',
    component: GestionimmoquittancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionimmoquittancePageRoutingModule {}
