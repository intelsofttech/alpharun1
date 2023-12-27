import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidateabsencePageRoutingModule } from './validateabsence-routing.module';

import { ValidateabsencePage } from './validateabsence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidateabsencePageRoutingModule
  ],
  declarations: [ValidateabsencePage]
})
export class ValidateabsencePageModule {}
