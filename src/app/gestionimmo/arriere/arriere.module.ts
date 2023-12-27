import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ArrierePageRoutingModule } from './arriere-routing.module';

import { ArrierePage } from './arriere.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	ReactiveFormsModule,
	HttpClientModule,
    ArrierePageRoutingModule
  ],
  declarations: [ArrierePage]
})
export class ArrierePageModule {}
