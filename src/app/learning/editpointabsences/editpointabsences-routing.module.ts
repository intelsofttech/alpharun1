import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditpointabsencesPage } from './editpointabsences.page';

const routes: Routes = [
  {
    path: '',
    component: EditpointabsencesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditpointabsencesPageRoutingModule {}
