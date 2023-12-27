import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { HebergementnuitePageRoutingModule } from './hebergementnuite-routing.module';

import { HebergementnuitePage } from './hebergementnuite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    HebergementnuitePageRoutingModule
  ],
  schemas: [
	CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [HebergementnuitePage]
})
export class HebergementnuitePageModule {}
