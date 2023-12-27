import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaisieabsencePage } from './saisieabsence.page';

const routes: Routes = [
  {
    path: '',
    component: SaisieabsencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaisieabsencePageRoutingModule {}
