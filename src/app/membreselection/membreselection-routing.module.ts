import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembreselectionPage } from './membreselection.page';

const routes: Routes = [
  {
    path: '',
    component: MembreselectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembreselectionPageRoutingModule {}
