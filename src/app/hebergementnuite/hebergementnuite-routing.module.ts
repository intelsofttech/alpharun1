import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HebergementnuitePage } from './hebergementnuite.page';

const routes: Routes = [
  {
    path: '',
    component: HebergementnuitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HebergementnuitePageRoutingModule {}
