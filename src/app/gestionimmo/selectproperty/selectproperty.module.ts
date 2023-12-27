import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { SelectpropertyPageRoutingModule } from './selectproperty-routing.module';

import { SelectpropertyPage } from './selectproperty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    SelectpropertyPageRoutingModule
  ],
  declarations: [SelectpropertyPage]
})
export class SelectpropertyPageModule {}
