import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChiffredaffairePage } from './chiffredaffaire.page';

const routes: Routes = [
  {
    path: '',
    component: ChiffredaffairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChiffredaffairePageRoutingModule {}
