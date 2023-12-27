import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditemploiclassjourPage } from './editemploiclassjour.page';

const routes: Routes = [
  {
    path: '',
    component: EditemploiclassjourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditemploiclassjourPageRoutingModule {}
