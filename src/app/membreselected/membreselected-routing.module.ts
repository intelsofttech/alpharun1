import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembreselectedPage } from './membreselected.page';

const routes: Routes = [
  {
    path: '',
    component: MembreselectedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembreselectedPageRoutingModule {}
