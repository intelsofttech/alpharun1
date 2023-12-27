import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationprintPage } from './locationprint.page';

const routes: Routes = [
  {
    path: '',
    component: LocationprintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationprintPageRoutingModule {}
