import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { PeriodePageRoutingModule } from './periode-routing.module';

import { PeriodePage } from './periode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    PeriodePageRoutingModule
  ],
  declarations: [PeriodePage]
})
export class PeriodePageModule {}
