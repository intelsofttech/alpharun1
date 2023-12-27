import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditabsencesPage } from './editabsences.page';

const routes: Routes = [
  {
    path: '',
    component: EditabsencesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditabsencesPageRoutingModule {}
