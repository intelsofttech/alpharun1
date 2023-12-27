import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { QuittancePageRoutingModule } from './quittance-routing.module';

import { QuittancePage } from './quittance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    QuittancePageRoutingModule
  ],
  declarations: [QuittancePage]
})
export class QuittancePageModule {}
