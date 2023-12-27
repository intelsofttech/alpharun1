import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvestissementPage } from './investissement.page';

const routes: Routes = [
  {
    path: '',
    component: InvestissementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvestissementPageRoutingModule {}
