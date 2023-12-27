import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ApartmentprintPageRoutingModule } from './apartmentprint-routing.module';

import { ApartmentprintPage } from './apartmentprint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    ApartmentprintPageRoutingModule
  ],
  declarations: [ApartmentprintPage]
})
export class ApartmentprintPageModule {}
