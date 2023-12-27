import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectpropertyPage } from './selectproperty.page';

const routes: Routes = [
  {
    path: '',
    component: SelectpropertyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectpropertyPageRoutingModule {}
