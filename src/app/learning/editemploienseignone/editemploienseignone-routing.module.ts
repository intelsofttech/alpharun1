import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditemploienseignonePage } from './editemploienseignone.page';

const routes: Routes = [
  {
    path: '',
    component: EditemploienseignonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditemploienseignonePageRoutingModule {}
