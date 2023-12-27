import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BondetailPageRoutingModule } from './bondetail-routing.module';

import { BondetailPage } from './bondetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BondetailPageRoutingModule
  ],
  declarations: [BondetailPage]
})
export class BondetailPageModule {}
