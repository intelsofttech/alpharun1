import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BienimmobilierPage } from './bienimmobilier.page';

const routes: Routes = [
  {
    path: '',
    component: BienimmobilierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BienimmobilierPageRoutingModule {}
