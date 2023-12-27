import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BonprintPageRoutingModule } from './bonprint-routing.module';

import { BonprintPage } from './bonprint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BonprintPageRoutingModule
  ],
  declarations: [BonprintPage]
})
export class BonprintPageModule {}
