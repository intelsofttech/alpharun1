import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { CommissionPageRoutingModule } from './commission-routing.module';

import { CommissionPage } from './commission.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    CommissionPageRoutingModule
  ],
  declarations: [CommissionPage]
})
export class CommissionPageModule {}
