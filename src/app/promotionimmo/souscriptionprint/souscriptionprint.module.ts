import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { SouscriptionprintPageRoutingModule } from './souscriptionprint-routing.module';

import { SouscriptionprintPage } from './souscriptionprint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    SouscriptionprintPageRoutingModule
  ],
  declarations: [SouscriptionprintPage]
})
export class SouscriptionprintPageModule {}
