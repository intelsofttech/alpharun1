import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddemploiPage } from './addemploi.page';

const routes: Routes = [
  {
    path: '',
    component: AddemploiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddemploiPageRoutingModule {}
