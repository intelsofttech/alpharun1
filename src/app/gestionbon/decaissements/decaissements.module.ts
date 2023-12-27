import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DecaissementsPageRoutingModule } from './decaissements-routing.module';

import { DecaissementsPage } from './decaissements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DecaissementsPageRoutingModule
  ],
  declarations: [DecaissementsPage]
})
export class DecaissementsPageModule {}
