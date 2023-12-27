import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { LocationprintPageRoutingModule } from './locationprint-routing.module';

import { LocationprintPage } from './locationprint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    LocationprintPageRoutingModule
  ],
  declarations: [LocationprintPage]
})
export class LocationprintPageModule {}
