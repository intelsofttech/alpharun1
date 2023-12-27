import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BilanPageRoutingModule } from './bilan-routing.module';

import { BilanPage } from './bilan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BilanPageRoutingModule
  ],
  declarations: [BilanPage]
})
export class BilanPageModule {}
