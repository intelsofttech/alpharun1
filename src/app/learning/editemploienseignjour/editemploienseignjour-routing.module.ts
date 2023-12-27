import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditemploienseignjourPage } from './editemploienseignjour.page';

const routes: Routes = [
  {
    path: '',
    component: EditemploienseignjourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditemploienseignjourPageRoutingModule {}
