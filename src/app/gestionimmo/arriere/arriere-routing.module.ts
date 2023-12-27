import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArrierePage } from './arriere.page';

const routes: Routes = [
  {
    path: '',
    component: ArrierePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArrierePageRoutingModule {}
