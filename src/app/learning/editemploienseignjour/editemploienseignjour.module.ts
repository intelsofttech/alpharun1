import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditemploienseignjourPageRoutingModule } from './editemploienseignjour-routing.module';

import { EditemploienseignjourPage } from './editemploienseignjour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditemploienseignjourPageRoutingModule
  ],
  declarations: [EditemploienseignjourPage]
})
export class EditemploienseignjourPageModule {}
