import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiliereenseignPage } from './filiereenseign.page';

const routes: Routes = [
  {
    path: '',
    component: FiliereenseignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiliereenseignPageRoutingModule {}
