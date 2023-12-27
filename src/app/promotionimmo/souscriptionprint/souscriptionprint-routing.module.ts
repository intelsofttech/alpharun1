import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SouscriptionprintPage } from './souscriptionprint.page';

const routes: Routes = [
  {
    path: '',
    component: SouscriptionprintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SouscriptionprintPageRoutingModule {}
