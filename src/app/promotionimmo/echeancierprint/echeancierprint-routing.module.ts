import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcheancierprintPage } from './echeancierprint.page';

const routes: Routes = [
  {
    path: '',
    component: EcheancierprintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcheancierprintPageRoutingModule {}
