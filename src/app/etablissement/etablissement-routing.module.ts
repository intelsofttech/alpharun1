import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EtablissementPage } from './etablissement.page';

const routes: Routes = [
  {
    path: '',
    component: EtablissementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtablissementPageRoutingModule {}
