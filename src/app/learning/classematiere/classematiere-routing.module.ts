import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassematierePage } from './classematiere.page';

const routes: Routes = [
  {
    path: '',
    component: ClassematierePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassematierePageRoutingModule {}
