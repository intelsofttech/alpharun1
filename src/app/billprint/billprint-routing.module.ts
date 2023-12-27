import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillprintPage } from './billprint.page';

const routes: Routes = [
  {
    path: '',
    component: BillprintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillprintPageRoutingModule {}
