import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewcotisationPage } from './newcotisation.page';

const routes: Routes = [
  {
    path: '',
    component: NewcotisationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewcotisationPageRoutingModule {}
