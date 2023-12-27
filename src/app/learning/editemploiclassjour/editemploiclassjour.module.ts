import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditemploiclassjourPageRoutingModule } from './editemploiclassjour-routing.module';

import { EditemploiclassjourPage } from './editemploiclassjour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditemploiclassjourPageRoutingModule
  ],
  declarations: [EditemploiclassjourPage]
})
export class EditemploiclassjourPageModule {}
