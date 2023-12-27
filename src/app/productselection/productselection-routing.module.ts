import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductselectionPage } from './productselection.page';

const routes: Routes = [
  {
    path: '',
    component: ProductselectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductselectionPageRoutingModule {}
