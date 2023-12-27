import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectbillPage } from './projectbill.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectbillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectbillPageRoutingModule {}
