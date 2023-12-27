import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectpartnerPage } from './selectpartner.page';

const routes: Routes = [
  {
    path: '',
    component: SelectpartnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectpartnerPageRoutingModule {}
