import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecteurPage } from './secteur.page';

const routes: Routes = [
  {
    path: '',
    component: SecteurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecteurPageRoutingModule {}
