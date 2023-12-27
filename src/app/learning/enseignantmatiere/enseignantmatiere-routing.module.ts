import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnseignantmatierePage } from './enseignantmatiere.page';

const routes: Routes = [
  {
    path: '',
    component: EnseignantmatierePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnseignantmatierePageRoutingModule {}
