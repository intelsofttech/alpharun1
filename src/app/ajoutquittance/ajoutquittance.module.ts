import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutquittancePageRoutingModule } from './ajoutquittance-routing.module';

import { AjoutquittancePage } from './ajoutquittance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutquittancePageRoutingModule
  ],
  declarations: [AjoutquittancePage]
})
export class AjoutquittancePageModule {}
