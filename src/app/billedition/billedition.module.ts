import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BilleditionPageRoutingModule } from './billedition-routing.module';

import { BilleditionPage } from './billedition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BilleditionPageRoutingModule
  ],
  declarations: [BilleditionPage]
})
export class BilleditionPageModule {}
