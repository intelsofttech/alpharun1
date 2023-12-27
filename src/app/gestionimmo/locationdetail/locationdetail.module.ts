import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationdetailPageRoutingModule } from './locationdetail-routing.module';

import { LocationdetailPage } from './locationdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationdetailPageRoutingModule
  ],
  declarations: [LocationdetailPage]
})
export class LocationdetailPageModule {}
