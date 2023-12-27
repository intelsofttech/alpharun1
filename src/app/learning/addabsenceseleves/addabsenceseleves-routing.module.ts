import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddabsenceselevesPage } from './addabsenceseleves.page';

const routes: Routes = [
  {
    path: '',
    component: AddabsenceselevesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddabsenceselevesPageRoutingModule {}
