import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaisiepresenceensPage } from './saisiepresenceens.page';

const routes: Routes = [
  {
    path: '',
    component: SaisiepresenceensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaisiepresenceensPageRoutingModule {}
