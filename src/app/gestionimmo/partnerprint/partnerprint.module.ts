import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartnerprintPageRoutingModule } from './partnerprint-routing.module';

import { PartnerprintPage } from './partnerprint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartnerprintPageRoutingModule
  ],
  declarations: [PartnerprintPage]
})
export class PartnerprintPageModule {}
