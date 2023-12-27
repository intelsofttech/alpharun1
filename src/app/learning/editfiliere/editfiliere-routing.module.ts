import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditfilierePage } from './editfiliere.page';

const routes: Routes = [
  {
    path: '',
    component: EditfilierePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditfilierePageRoutingModule {}
