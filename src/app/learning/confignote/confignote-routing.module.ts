import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfignotePage } from './confignote.page';

const routes: Routes = [
  {
    path: '',
    component: ConfignotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfignotePageRoutingModule {}
