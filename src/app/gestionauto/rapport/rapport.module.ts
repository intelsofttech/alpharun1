import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { RapportPageRoutingModule } from './rapport-routing.module';

import { RapportPage } from './rapport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    RapportPageRoutingModule
  ],
  declarations: [RapportPage]
})
export class RapportPageModule {}
