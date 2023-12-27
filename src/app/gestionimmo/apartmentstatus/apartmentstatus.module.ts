import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApartmentstatusPageRoutingModule } from './apartmentstatus-routing.module';

import { ApartmentstatusPage } from './apartmentstatus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApartmentstatusPageRoutingModule
  ],
  declarations: [ApartmentstatusPage]
})
export class ApartmentstatusPageModule {}
