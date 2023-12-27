import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { CaissePageRoutingModule } from './caisse-routing.module';

import { CaissePage } from './caisse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    CaissePageRoutingModule
  ],
  declarations: [CaissePage]
})
export class CaissePageModule {}
