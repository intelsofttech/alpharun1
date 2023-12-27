import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { PlanningpaymentPageRoutingModule } from './planningpayment-routing.module';

import { PlanningpaymentPage } from './planningpayment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    PlanningpaymentPageRoutingModule
  ],
  declarations: [PlanningpaymentPage]
})
export class PlanningpaymentPageModule {}
