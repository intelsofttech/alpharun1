import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EcheancierprintPageRoutingModule } from './echeancierprint-routing.module';

import { EcheancierprintPage } from './echeancierprint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EcheancierprintPageRoutingModule
  ],
  declarations: [EcheancierprintPage]
})
export class EcheancierprintPageModule {}
