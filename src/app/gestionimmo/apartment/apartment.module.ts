import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ApartmentPageRoutingModule } from './apartment-routing.module';

import { ApartmentPage } from './apartment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    ApartmentPageRoutingModule
  ],
  declarations: [ApartmentPage]
})
export class ApartmentPageModule {}
