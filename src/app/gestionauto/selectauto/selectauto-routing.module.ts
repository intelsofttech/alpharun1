import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectautoPage } from './selectauto.page';

const routes: Routes = [
  {
    path: '',
    component: SelectautoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectautoPageRoutingModule {}
