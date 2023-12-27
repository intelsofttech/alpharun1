import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartnerbillPage } from './partnerbill.page';

const routes: Routes = [
  {
    path: '',
    component: PartnerbillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnerbillPageRoutingModule {}
