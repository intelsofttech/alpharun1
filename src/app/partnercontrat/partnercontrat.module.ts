import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { PartnercontratPageRoutingModule } from './partnercontrat-routing.module';

import { PartnercontratPage } from './partnercontrat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    PartnercontratPageRoutingModule
  ],
  declarations: [PartnercontratPage]
})
export class PartnercontratPageModule {}
