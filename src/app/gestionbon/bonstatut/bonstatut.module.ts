import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BonstatutPageRoutingModule } from './bonstatut-routing.module';

import { BonstatutPage } from './bonstatut.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BonstatutPageRoutingModule
  ],
  declarations: [BonstatutPage]
})
export class BonstatutPageModule {}
