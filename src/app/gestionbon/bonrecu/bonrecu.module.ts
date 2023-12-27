import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BonrecuPageRoutingModule } from './bonrecu-routing.module';

import { BonrecuPage } from './bonrecu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BonrecuPageRoutingModule
  ],
  declarations: [BonrecuPage]
})
export class BonrecuPageModule {}
