import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BienimmobilierPageRoutingModule } from './bienimmobilier-routing.module';

import { BienimmobilierPage } from './bienimmobilier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BienimmobilierPageRoutingModule
  ],
  declarations: [BienimmobilierPage]
})
export class BienimmobilierPageModule {}
