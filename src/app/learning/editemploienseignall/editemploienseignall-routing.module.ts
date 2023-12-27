import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditemploienseignallPage } from './editemploienseignall.page';

const routes: Routes = [
  {
    path: '',
    component: EditemploienseignallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditemploienseignallPageRoutingModule {}
