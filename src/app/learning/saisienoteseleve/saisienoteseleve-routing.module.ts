import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaisienoteselevePage } from './saisienoteseleve.page';

const routes: Routes = [
  {
    path: '',
    component: SaisienoteselevePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaisienoteselevePageRoutingModule {}
