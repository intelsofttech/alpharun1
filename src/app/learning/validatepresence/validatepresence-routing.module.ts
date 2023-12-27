import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidatepresencePage } from './validatepresence.page';

const routes: Routes = [
  {
    path: '',
    component: ValidatepresencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidatepresencePageRoutingModule {}
