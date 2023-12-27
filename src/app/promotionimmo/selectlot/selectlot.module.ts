import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { SelectlotPageRoutingModule } from './selectlot-routing.module';

import { SelectlotPage } from './selectlot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    SelectlotPageRoutingModule
  ],
  declarations: [SelectlotPage]
})
export class SelectlotPageModule {}
