import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditabsenceselevePage } from './editabsenceseleve.page';

const routes: Routes = [
  {
    path: '',
    component: EditabsenceselevePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditabsenceselevePageRoutingModule {}
