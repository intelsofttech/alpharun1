import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionimmoquittancePageRoutingModule } from './gestionimmoquittance-routing.module';

import { GestionimmoquittancePage } from './gestionimmoquittance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionimmoquittancePageRoutingModule
  ],
  declarations: [GestionimmoquittancePage]
})
export class GestionimmoquittancePageModule {}
