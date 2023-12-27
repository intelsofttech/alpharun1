import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditioncotisationPage } from './editioncotisation.page';

const routes: Routes = [
  {
    path: '',
    component: EditioncotisationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditioncotisationPageRoutingModule {}
