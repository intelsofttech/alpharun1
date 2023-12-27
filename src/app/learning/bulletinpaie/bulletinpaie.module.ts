import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BulletinpaiePageRoutingModule } from './bulletinpaie-routing.module';

import { BulletinpaiePage } from './bulletinpaie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BulletinpaiePageRoutingModule
  ],
  declarations: [BulletinpaiePage]
})
export class BulletinpaiePageModule {}
