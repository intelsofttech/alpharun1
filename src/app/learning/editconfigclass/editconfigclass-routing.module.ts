import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditconfigclassPage } from './editconfigclass.page';

const routes: Routes = [
  {
    path: '',
    component: EditconfigclassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditconfigclassPageRoutingModule {}
