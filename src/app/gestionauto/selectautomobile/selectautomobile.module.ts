import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { SelectautomobilePageRoutingModule } from './selectautomobile-routing.module';

import { SelectautomobilePage } from './selectautomobile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    SelectautomobilePageRoutingModule
  ],
  declarations: [SelectautomobilePage]
})
export class SelectautomobilePageModule {}
