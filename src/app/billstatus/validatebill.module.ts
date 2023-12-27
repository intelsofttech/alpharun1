import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ValidatebillPageRoutingModule } from './validatebill-routing.module';

import { ValidatebillPage } from './validatebill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    ValidatebillPageRoutingModule
  ],
  declarations: [ValidatebillPage]
})
export class ValidatebillPageModule {}
