import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditemploienseignallPageRoutingModule } from './editemploienseignall-routing.module';

import { EditemploienseignallPage } from './editemploienseignall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditemploienseignallPageRoutingModule
  ],
  declarations: [EditemploienseignallPage]
})
export class EditemploienseignallPageModule {}
