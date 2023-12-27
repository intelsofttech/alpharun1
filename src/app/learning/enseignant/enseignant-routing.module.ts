import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnseignantPage } from './enseignant.page';

const routes: Routes = [
  {
    path: '',
    component: EnseignantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnseignantPageRoutingModule {}
