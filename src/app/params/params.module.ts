import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ParamsPageRoutingModule } from './params-routing.module';

import { ParamsPage } from './params.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    ParamsPageRoutingModule
  ],
  declarations: [ParamsPage]
})
export class ParamsPageModule {}
