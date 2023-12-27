import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { BillreportPageRoutingModule } from './billreport-routing.module';

import { BillreportPage } from './billreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    BillreportPageRoutingModule
  ],
  declarations: [BillreportPage]
})
export class BillreportPageModule {}
