import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaisiecotisationPage } from './saisiecotisation.page';

const routes: Routes = [
  {
    path: '',
    component: SaisiecotisationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaisiecotisationPageRoutingModule {}
