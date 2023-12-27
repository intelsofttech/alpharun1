import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ProductselectionPageRoutingModule } from './productselection-routing.module';

import { ProductselectionPage } from './productselection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    ProductselectionPageRoutingModule
  ],
  declarations: [ProductselectionPage]
})
export class ProductselectionPageModule {}
