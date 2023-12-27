import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PointpresencePage } from './pointpresence.page';

const routes: Routes = [
  {
    path: '',
    component: PointpresencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PointpresencePageRoutingModule {}
