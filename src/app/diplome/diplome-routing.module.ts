import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiplomePage } from './diplome.page';

const routes: Routes = [
  {
    path: '',
    component: DiplomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiplomePageRoutingModule {}
