import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditpresencePage } from './editpresence.page';

const routes: Routes = [
  {
    path: '',
    component: EditpresencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditpresencePageRoutingModule {}
