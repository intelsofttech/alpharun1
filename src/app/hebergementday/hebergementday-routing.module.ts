import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HebergementdayPage } from './hebergementday.page';

const routes: Routes = [
  {
    path: '',
    component: HebergementdayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HebergementdayPageRoutingModule {}
