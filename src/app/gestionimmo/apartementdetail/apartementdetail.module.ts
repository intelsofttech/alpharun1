import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApartementdetailPageRoutingModule } from './apartementdetail-routing.module';

import { ApartementdetailPage } from './apartementdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApartementdetailPageRoutingModule
  ],
  declarations: [ApartementdetailPage]
})
export class ApartementdetailPageModule {}
