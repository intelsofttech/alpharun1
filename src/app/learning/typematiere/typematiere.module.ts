import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypematierePageRoutingModule } from './typematiere-routing.module';

import { TypematierePage } from './typematiere.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypematierePageRoutingModule
  ],
  declarations: [TypematierePage]
})
export class TypematierePageModule {}
