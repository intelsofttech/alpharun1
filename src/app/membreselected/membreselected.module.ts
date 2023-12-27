import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembreselectedPageRoutingModule } from './membreselected-routing.module';

import { MembreselectedPage } from './membreselected.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembreselectedPageRoutingModule
  ],
  declarations: [MembreselectedPage]
})
export class MembreselectedPageModule {}
