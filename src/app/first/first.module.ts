import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { FirstPageRoutingModule } from './first-routing.module';
import { FirstPage } from './first.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	ReactiveFormsModule,
	HttpClientModule,
    FirstPageRoutingModule
  ],
  schemas: [
	CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [FirstPage]
})
export class FirstPageModule {}
