import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectconducteurPage } from './selectconducteur.page';

const routes: Routes = [
  {
    path: '',
    component: SelectconducteurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectconducteurPageRoutingModule {}
