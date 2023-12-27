import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditpresenceensPage } from './editpresenceens.page';

const routes: Routes = [
  {
    path: '',
    component: EditpresenceensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditpresenceensPageRoutingModule {}
