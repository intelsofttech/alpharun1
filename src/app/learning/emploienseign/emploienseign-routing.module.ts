import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmploienseignPage } from './emploienseign.page';

const routes: Routes = [
  {
    path: '',
    component: EmploienseignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmploienseignPageRoutingModule {}
