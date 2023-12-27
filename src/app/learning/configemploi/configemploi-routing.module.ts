import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigemploiPage } from './configemploi.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigemploiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigemploiPageRoutingModule {}
