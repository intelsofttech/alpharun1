import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EtablissementPageRoutingModule } from './etablissement-routing.module';

import { EtablissementPage } from './etablissement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EtablissementPageRoutingModule
  ],
  declarations: [EtablissementPage]
})
export class EtablissementPageModule {}
