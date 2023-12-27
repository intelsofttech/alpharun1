import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DettePage } from './dette.page';

const routes: Routes = [
  {
    path: '',
    component: DettePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DettePageRoutingModule {}
