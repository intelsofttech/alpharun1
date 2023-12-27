import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProprietePage } from './propriete.page';

const routes: Routes = [
  {
    path: '',
    component: ProprietePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProprietePageRoutingModule {}
