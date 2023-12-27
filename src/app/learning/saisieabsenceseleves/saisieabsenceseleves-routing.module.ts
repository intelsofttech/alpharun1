import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaisieabsenceselevesPage } from './saisieabsenceseleves.page';

const routes: Routes = [
  {
    path: '',
    component: SaisieabsenceselevesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaisieabsenceselevesPageRoutingModule {}
