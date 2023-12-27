import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypeoperationPageRoutingModule } from './typeoperation-routing.module';

import { TypeoperationPage } from './typeoperation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypeoperationPageRoutingModule
  ],
  declarations: [TypeoperationPage]
})
export class TypeoperationPageModule {}
