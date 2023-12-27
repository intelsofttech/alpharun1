import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LotilotPage } from './lotilot.page';

const routes: Routes = [
  {
    path: '',
    component: LotilotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LotilotPageRoutingModule {}
