import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { TypeChambrePageRoutingModule } from './type-chambre-routing.module';

import { TypeChambrePage } from './type-chambre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    TypeChambrePageRoutingModule
  ],
  declarations: [TypeChambrePage]
})
export class TypeChambrePageModule {}
