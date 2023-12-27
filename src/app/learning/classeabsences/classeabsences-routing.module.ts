import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClasseabsencesPage } from './classeabsences.page';

const routes: Routes = [
  {
    path: '',
    component: ClasseabsencesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasseabsencesPageRoutingModule {}
