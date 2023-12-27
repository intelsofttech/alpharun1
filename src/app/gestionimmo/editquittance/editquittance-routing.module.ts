import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditquittancePage } from './editquittance.page';

const routes: Routes = [
  {
    path: '',
    component: EditquittancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditquittancePageRoutingModule {}
