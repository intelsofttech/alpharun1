import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { HebergementdetailPageRoutingModule } from './hebergementdetail-routing.module';

import { HebergementdetailPage } from './hebergementdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    HebergementdetailPageRoutingModule
  ],
  schemas: [
	CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [HebergementdetailPage]
})
export class HebergementdetailPageModule {}
