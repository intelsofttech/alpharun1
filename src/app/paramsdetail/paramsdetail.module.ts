import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { ParamsdetailPageRoutingModule } from './paramsdetail-routing.module';

import { ParamsdetailPage } from './paramsdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    ParamsdetailPageRoutingModule
  ],
  declarations: [ParamsdetailPage]
})
export class ParamsdetailPageModule {}
