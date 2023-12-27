import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { SouscriptiondetailPageRoutingModule } from './souscriptiondetail-routing.module';

import { SouscriptiondetailPage } from './souscriptiondetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    SouscriptiondetailPageRoutingModule
  ],
  declarations: [SouscriptiondetailPage]
})
export class SouscriptiondetailPageModule {}
