import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BonhistoriquePageRoutingModule } from './bonhistorique-routing.module';

import { BonhistoriquePage } from './bonhistorique.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BonhistoriquePageRoutingModule
  ],
  declarations: [BonhistoriquePage]
})
export class BonhistoriquePageModule {}
