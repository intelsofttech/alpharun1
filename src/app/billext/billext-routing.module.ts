import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillextPage } from './billext.page';

const routes: Routes = [
  {
    path: '',
    component: BillextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillextPageRoutingModule {}
