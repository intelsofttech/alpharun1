import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListecotisationsPage } from './listecotisations.page';

const routes: Routes = [
  {
    path: '',
    component: ListecotisationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListecotisationsPageRoutingModule {}
