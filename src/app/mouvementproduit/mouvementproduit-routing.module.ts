import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MouvementproduitPage } from './mouvementproduit.page';

const routes: Routes = [
  {
    path: '',
    component: MouvementproduitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MouvementproduitPageRoutingModule {}
