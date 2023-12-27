import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChargevariablePage } from './chargevariable.page';

const routes: Routes = [
  {
    path: '',
    component: ChargevariablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChargevariablePageRoutingModule {}
