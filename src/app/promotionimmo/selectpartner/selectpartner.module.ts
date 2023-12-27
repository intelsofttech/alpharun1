import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { SelectpartnerPageRoutingModule } from './selectpartner-routing.module';

import { SelectpartnerPage } from './selectpartner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    SelectpartnerPageRoutingModule
  ],
  declarations: [SelectpartnerPage]
})
export class SelectpartnerPageModule {}
