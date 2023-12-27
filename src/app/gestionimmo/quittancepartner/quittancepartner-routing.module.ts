import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuittancepartnerPage } from './quittancepartner.page';

const routes: Routes = [
  {
    path: '',
    component: QuittancepartnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuittancepartnerPageRoutingModule {}
