import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartnerselectedPageRoutingModule } from './partnerselected-routing.module';

import { PartnerselectedPage } from './partnerselected.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartnerselectedPageRoutingModule
  ],
  declarations: [PartnerselectedPage]
})
export class PartnerselectedPageModule {}
