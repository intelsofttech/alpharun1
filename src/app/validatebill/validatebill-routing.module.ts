import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidatebillPage } from './validatebill.page';

const routes: Routes = [
  {
    path: '',
    component: ValidatebillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidatebillPageRoutingModule {}
