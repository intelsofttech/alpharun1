import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuittanceimprimePage } from './quittanceimprime.page';

const routes: Routes = [
  {
    path: '',
    component: QuittanceimprimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuittanceimprimePageRoutingModule {}
