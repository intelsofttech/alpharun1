import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditemploiclassallPage } from './editemploiclassall.page';

const routes: Routes = [
  {
    path: '',
    component: EditemploiclassallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditemploiclassallPageRoutingModule {}
