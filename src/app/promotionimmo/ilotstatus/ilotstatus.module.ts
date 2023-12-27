import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlotstatusPageRoutingModule } from './ilotstatus-routing.module';

import { IlotstatusPage } from './ilotstatus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlotstatusPageRoutingModule
  ],
  declarations: [IlotstatusPage]
})
export class IlotstatusPageModule {}
