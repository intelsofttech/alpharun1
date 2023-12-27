import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductstockPage } from './productstock.page';

const routes: Routes = [
  {
    path: '',
    component: ProductstockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductstockPageRoutingModule {}
