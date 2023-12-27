import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutquittancePage } from './ajoutquittance.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutquittancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutquittancePageRoutingModule {}
