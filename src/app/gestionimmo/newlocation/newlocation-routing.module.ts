import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewlocationPage } from './newlocation.page';

const routes: Routes = [
  {
    path: '',
    component: NewlocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewlocationPageRoutingModule {}
