import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IlotstatusPage } from './ilotstatus.page';

const routes: Routes = [
  {
    path: '',
    component: IlotstatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IlotstatusPageRoutingModule {}
