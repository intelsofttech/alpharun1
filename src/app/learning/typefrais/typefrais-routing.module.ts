import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypefraisPage } from './typefrais.page';

const routes: Routes = [
  {
    path: '',
    component: TypefraisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypefraisPageRoutingModule {}
