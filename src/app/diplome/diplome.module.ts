import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { DiplomePageRoutingModule } from './diplome-routing.module';

import { DiplomePage } from './diplome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    DiplomePageRoutingModule
  ],
  declarations: [DiplomePage]
})
export class DiplomePageModule {}
