import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditnotesPage } from './editnotes.page';

const routes: Routes = [
  {
    path: '',
    component: EditnotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditnotesPageRoutingModule {}
