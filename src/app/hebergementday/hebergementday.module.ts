import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HebergementdayPageRoutingModule } from './hebergementday-routing.module';

import { HebergementdayPage } from './hebergementday.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HebergementdayPageRoutingModule
  ],
  declarations: [HebergementdayPage]
})
export class HebergementdayPageModule {}
