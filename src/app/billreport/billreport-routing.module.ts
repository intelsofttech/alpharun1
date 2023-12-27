import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillreportPage } from './billreport.page';

const routes: Routes = [
  {
    path: '',
    component: BillreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillreportPageRoutingModule {}
