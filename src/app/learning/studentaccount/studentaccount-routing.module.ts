import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentaccountPage } from './studentaccount.page';

const routes: Routes = [
  {
    path: '',
    component: StudentaccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentaccountPageRoutingModule {}
