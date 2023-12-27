import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjecteditionPage } from './projectedition.page';

const routes: Routes = [
  {
    path: '',
    component: ProjecteditionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjecteditionPageRoutingModule {}
