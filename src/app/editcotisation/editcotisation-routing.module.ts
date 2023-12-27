import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditcotisationPage } from './editcotisation.page';

const routes: Routes = [
  {
    path: '',
    component: EditcotisationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditcotisationPageRoutingModule {}
