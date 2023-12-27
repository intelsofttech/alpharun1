import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { BillprintPageRoutingModule } from './billprint-routing.module';

import { BillprintPage } from './billprint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    BillprintPageRoutingModule
  ],
  declarations: [BillprintPage]
})
export class BillprintPageModule {}
