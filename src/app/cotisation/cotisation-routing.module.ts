import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CotisationPage } from './cotisation.page';

const routes: Routes = [
  {
    path: '',
    component: CotisationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CotisationPageRoutingModule {}
