import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { PartnerPageRoutingModule } from './partner-routing.module';

import { PartnerPage } from './partner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    PartnerPageRoutingModule
  ],
  declarations: [PartnerPage]
})
export class PartnerPageModule {}
