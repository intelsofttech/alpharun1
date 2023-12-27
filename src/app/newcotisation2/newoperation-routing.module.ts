import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewoperationPage } from './newoperation.page';

const routes: Routes = [
  {
    path: '',
    component: NewoperationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewoperationPageRoutingModule {}
