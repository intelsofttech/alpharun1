import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectproprietairePage } from './selectproprietaire.page';

const routes: Routes = [
  {
    path: '',
    component: SelectproprietairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectproprietairePageRoutingModule {}
