import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { SocietePageRoutingModule } from './societe-routing.module';

import { SocietePage } from './societe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    SocietePageRoutingModule
  ],
  declarations: [SocietePage]
})
export class SocietePageModule {}
