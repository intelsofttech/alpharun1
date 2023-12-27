import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { ValidatepresencePageRoutingModule } from './validatepresence-routing.module';

import { ValidatepresencePage } from './validatepresence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    ValidatepresencePageRoutingModule
  ],
  declarations: [ValidatepresencePage]
})
export class ValidatepresencePageModule {}
