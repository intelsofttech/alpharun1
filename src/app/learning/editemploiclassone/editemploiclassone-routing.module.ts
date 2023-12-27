import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditemploiclassonePage } from './editemploiclassone.page';

const routes: Routes = [
  {
    path: '',
    component: EditemploiclassonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditemploiclassonePageRoutingModule {}
