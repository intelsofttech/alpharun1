import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatiereniveauPage } from './matiereniveau.page';

const routes: Routes = [
  {
    path: '',
    component: MatiereniveauPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatiereniveauPageRoutingModule {}
