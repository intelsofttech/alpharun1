import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BulletinpaiePage } from './bulletinpaie.page';

const routes: Routes = [
  {
    path: '',
    component: BulletinpaiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BulletinpaiePageRoutingModule {}
