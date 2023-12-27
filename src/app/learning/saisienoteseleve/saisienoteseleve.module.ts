import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaisienoteselevePageRoutingModule } from './saisienoteseleve-routing.module';

import { SaisienoteselevePage } from './saisienoteseleve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaisienoteselevePageRoutingModule
  ],
  declarations: [SaisienoteselevePage]
})
export class SaisienoteselevePageModule {}
