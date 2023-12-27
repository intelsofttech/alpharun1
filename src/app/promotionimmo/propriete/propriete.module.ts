import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ProprietePageRoutingModule } from './propriete-routing.module';

import { ProprietePage } from './propriete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    ProprietePageRoutingModule
  ],
  declarations: [ProprietePage]
})
export class ProprietePageModule {}
