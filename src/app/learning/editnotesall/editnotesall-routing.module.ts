import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditnotesallPage } from './editnotesall.page';

const routes: Routes = [
  {
    path: '',
    component: EditnotesallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditnotesallPageRoutingModule {}
