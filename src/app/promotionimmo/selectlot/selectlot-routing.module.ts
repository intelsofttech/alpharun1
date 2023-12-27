import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectlotPage } from './selectlot.page';

const routes: Routes = [
  {
    path: '',
    component: SelectlotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectlotPageRoutingModule {}
