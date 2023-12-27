import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { PartnermodalPageRoutingModule } from './partnermodal-routing.module';

import { PartnermodalPage } from './partnermodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    PartnermodalPageRoutingModule
  ],
  declarations: [PartnermodalPage]
})
export class PartnermodalPageModule {}
