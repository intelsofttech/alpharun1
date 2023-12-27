import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcheancierPage } from './echeancier.page';

const routes: Routes = [
  {
    path: '',
    component: EcheancierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcheancierPageRoutingModule {}
