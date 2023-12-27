import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidateabsencePage } from './validateabsence.page';

const routes: Routes = [
  {
    path: '',
    component: ValidateabsencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidateabsencePageRoutingModule {}
