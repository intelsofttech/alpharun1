import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartnerprintPage } from './partnerprint.page';

const routes: Routes = [
  {
    path: '',
    component: PartnerprintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnerprintPageRoutingModule {}
