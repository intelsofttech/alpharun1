import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaisienotesPage } from './saisienotes.page';

const routes: Routes = [
  {
    path: '',
    component: SaisienotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaisienotesPageRoutingModule {}
