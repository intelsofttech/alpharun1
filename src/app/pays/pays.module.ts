import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { PaysPageRoutingModule } from './pays-routing.module';

import { PaysPage } from './pays.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    PaysPageRoutingModule
  ],
  declarations: [PaysPage]
})
export class PaysPageModule {}
