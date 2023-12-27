import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductmouvPage } from './productmouv.page';

const routes: Routes = [
  {
    path: '',
    component: ProductmouvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductmouvPageRoutingModule {}
