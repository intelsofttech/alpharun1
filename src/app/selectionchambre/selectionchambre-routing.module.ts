import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectionchambrePage } from './selectionchambre.page';

const routes: Routes = [
  {
    path: '',
    component: SelectionchambrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectionchambrePageRoutingModule {}
