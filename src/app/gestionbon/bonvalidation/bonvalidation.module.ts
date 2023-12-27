import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BonvalidationPageRoutingModule } from './bonvalidation-routing.module';

import { BonvalidationPage } from './bonvalidation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BonvalidationPageRoutingModule
  ],
  declarations: [BonvalidationPage]
})
export class BonvalidationPageModule {}
