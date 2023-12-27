import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeriodePage } from './periode.page';

const routes: Routes = [
  {
    path: '',
    component: PeriodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeriodePageRoutingModule {}
