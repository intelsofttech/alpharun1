import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { MouvementproduitPageRoutingModule } from './mouvementproduit-routing.module';

import { MouvementproduitPage } from './mouvementproduit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule,
    ReactiveFormsModule,
    MouvementproduitPageRoutingModule
  ],
  declarations: [MouvementproduitPage]
})
export class MouvementproduitPageModule {}
