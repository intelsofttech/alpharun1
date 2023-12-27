import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { MembredetailPageRoutingModule } from './membredetail-routing.module';

import { MembredetailPage } from './membredetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    MembredetailPageRoutingModule
  ],
  declarations: [MembredetailPage]
})
export class MembredetailPageModule {}
