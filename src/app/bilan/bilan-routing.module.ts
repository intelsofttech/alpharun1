import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BilanPage } from './bilan.page';

const routes: Routes = [
  {
    path: '',
    component: BilanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BilanPageRoutingModule {}
