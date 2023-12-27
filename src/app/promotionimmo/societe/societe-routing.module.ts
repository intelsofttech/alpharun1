import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocietePage } from './societe.page';

const routes: Routes = [
  {
    path: '',
    component: SocietePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocietePageRoutingModule {}
