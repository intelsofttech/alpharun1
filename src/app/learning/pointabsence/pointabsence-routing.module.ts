import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PointabsencePage } from './pointabsence.page';

const routes: Routes = [
  {
    path: '',
    component: PointabsencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PointabsencePageRoutingModule {}
