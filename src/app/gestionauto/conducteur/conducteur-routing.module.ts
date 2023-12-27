import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConducteurPage } from './conducteur.page';

const routes: Routes = [
  {
    path: '',
    component: ConducteurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConducteurPageRoutingModule {}
