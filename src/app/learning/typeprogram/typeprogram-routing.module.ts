import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeprogramPage } from './typeprogram.page';

const routes: Routes = [
  {
    path: '',
    component: TypeprogramPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeprogramPageRoutingModule {}
