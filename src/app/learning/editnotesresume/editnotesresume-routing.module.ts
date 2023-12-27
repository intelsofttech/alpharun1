import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditnotesresumePage } from './editnotesresume.page';

const routes: Routes = [
  {
    path: '',
    component: EditnotesresumePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditnotesresumePageRoutingModule {}
