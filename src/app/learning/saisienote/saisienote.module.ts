import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaisienotePageRoutingModule } from './saisienote-routing.module';

import { SaisienotePage } from './saisienote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaisienotePageRoutingModule
  ],
  declarations: [SaisienotePage]
})
export class SaisienotePageModule {}
