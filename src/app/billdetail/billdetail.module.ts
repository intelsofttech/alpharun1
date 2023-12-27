import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { BilldetailPageRoutingModule } from './billdetail-routing.module';

import { BilldetailPage } from './billdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    BilldetailPageRoutingModule
  ],
  declarations: [BilldetailPage]
})
export class BilldetailPageModule {}
