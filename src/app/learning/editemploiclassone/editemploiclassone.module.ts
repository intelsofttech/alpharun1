import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditemploiclassonePageRoutingModule } from './editemploiclassone-routing.module';

import { EditemploiclassonePage } from './editemploiclassone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditemploiclassonePageRoutingModule
  ],
  declarations: [EditemploiclassonePage]
})
export class EditemploiclassonePageModule {}
