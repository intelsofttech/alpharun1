import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvestissementPageRoutingModule } from './investissement-routing.module';

import { InvestissementPage } from './investissement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvestissementPageRoutingModule
  ],
  declarations: [InvestissementPage]
})
export class InvestissementPageModule {}
