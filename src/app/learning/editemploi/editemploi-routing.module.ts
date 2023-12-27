import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditemploiPage } from './editemploi.page';

const routes: Routes = [
  {
    path: '',
    component: EditemploiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditemploiPageRoutingModule {}
