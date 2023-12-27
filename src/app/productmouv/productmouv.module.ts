import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductmouvPageRoutingModule } from './productmouv-routing.module';

import { ProductmouvPage } from './productmouv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductmouvPageRoutingModule
  ],
  declarations: [ProductmouvPage]
})
export class ProductmouvPageModule {}
