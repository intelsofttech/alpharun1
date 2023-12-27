import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypematierePage } from './typematiere.page';

const routes: Routes = [
  {
    path: '',
    component: TypematierePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypematierePageRoutingModule {}
