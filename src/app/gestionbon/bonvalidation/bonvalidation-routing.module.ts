import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BonvalidationPage } from './bonvalidation.page';

const routes: Routes = [
  {
    path: '',
    component: BonvalidationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BonvalidationPageRoutingModule {}
