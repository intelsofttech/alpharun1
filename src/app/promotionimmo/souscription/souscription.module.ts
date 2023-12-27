import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { SouscriptionPageRoutingModule } from './souscription-routing.module';

import { SouscriptionPage } from './souscription.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    SouscriptionPageRoutingModule
  ],
  declarations: [SouscriptionPage]
})
export class SouscriptionPageModule {}
