import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BondecaisseretourPageRoutingModule } from './bondecaisseretour-routing.module';

import { BondecaisseretourPage } from './bondecaisseretour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BondecaisseretourPageRoutingModule
  ],
  declarations: [BondecaisseretourPage]
})
export class BondecaisseretourPageModule {}
