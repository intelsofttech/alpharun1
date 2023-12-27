import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembregroupePage } from './membregroupe.page';

const routes: Routes = [
  {
    path: '',
    component: MembregroupePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembregroupePageRoutingModule {}
