import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { DettePageRoutingModule } from './dette-routing.module';

import { DettePage } from './dette.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	ReactiveFormsModule,
	HttpClientModule,
    DettePageRoutingModule
  ],
  declarations: [DettePage]
})
export class DettePageModule {}
