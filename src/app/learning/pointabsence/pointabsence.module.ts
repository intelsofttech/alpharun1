import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PointabsencePageRoutingModule } from './pointabsence-routing.module';

import { PointabsencePage } from './pointabsence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PointabsencePageRoutingModule
  ],
  declarations: [PointabsencePage]
})
export class PointabsencePageModule {}
