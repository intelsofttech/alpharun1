import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ProductstockPageRoutingModule } from './productstock-routing.module';

import { ProductstockPage } from './productstock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    ProductstockPageRoutingModule
  ],
  declarations: [ProductstockPage]
})
export class ProductstockPageModule {}
