import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditmatiereniveauPage } from './editmatiereniveau.page';

const routes: Routes = [
  {
    path: '',
    component: EditmatiereniveauPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditmatiereniveauPageRoutingModule {}
