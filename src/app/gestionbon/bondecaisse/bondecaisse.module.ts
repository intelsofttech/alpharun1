import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BondecaissePageRoutingModule } from './bondecaisse-routing.module';

import { BondecaissePage } from './bondecaisse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BondecaissePageRoutingModule
  ],
  declarations: [BondecaissePage]
})
export class BondecaissePageModule {}
