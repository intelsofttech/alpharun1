import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectautomobilePage } from './selectautomobile.page';

const routes: Routes = [
  {
    path: '',
    component: SelectautomobilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectautomobilePageRoutingModule {}
