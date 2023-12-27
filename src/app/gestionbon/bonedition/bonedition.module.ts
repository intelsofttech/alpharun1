import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoneditionPageRoutingModule } from './bonedition-routing.module';

import { BoneditionPage } from './bonedition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoneditionPageRoutingModule
  ],
  declarations: [BoneditionPage]
})
export class BoneditionPageModule {}
