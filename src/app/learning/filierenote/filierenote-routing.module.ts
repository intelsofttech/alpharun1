import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilierenotePage } from './filierenote.page';

const routes: Routes = [
  {
    path: '',
    component: FilierenotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilierenotePageRoutingModule {}
