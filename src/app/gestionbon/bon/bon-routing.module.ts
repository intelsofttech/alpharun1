import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BonPage } from './bon.page';

const routes: Routes = [
  {
    path: '',
    component: BonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BonPageRoutingModule {}
