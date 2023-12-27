import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { AddtocartPageRoutingModule } from './addtocart-routing.module';

import { AddtocartPage } from './addtocart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    AddtocartPageRoutingModule
  ],
  declarations: [AddtocartPage]
})
export class AddtocartPageModule {}
