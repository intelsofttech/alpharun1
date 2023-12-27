import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChargevariablePageRoutingModule } from './chargevariable-routing.module';

import { ChargevariablePage } from './chargevariable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChargevariablePageRoutingModule
  ],
  declarations: [ChargevariablePage]
})
export class ChargevariablePageModule {}
