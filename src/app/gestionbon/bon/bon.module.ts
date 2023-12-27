import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BonPageRoutingModule } from './bon-routing.module';

import { BonPage } from './bon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BonPageRoutingModule
  ],
  declarations: [BonPage]
})
export class BonPageModule {}
