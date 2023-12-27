import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { PrintquittancePageRoutingModule } from './printquittance-routing.module';

import { PrintquittancePage } from './printquittance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    PrintquittancePageRoutingModule
  ],
  declarations: [PrintquittancePage]
})
export class PrintquittancePageModule {}
