import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramcontentPage } from './programcontent.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramcontentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramcontentPageRoutingModule {}
