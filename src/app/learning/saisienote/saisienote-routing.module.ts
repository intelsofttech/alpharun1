import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaisienotePage } from './saisienote.page';

const routes: Routes = [
  {
    path: '',
    component: SaisienotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaisienotePageRoutingModule {}
