import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrintquittancePage } from './printquittance.page';

const routes: Routes = [
  {
    path: '',
    component: PrintquittancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrintquittancePageRoutingModule {}
