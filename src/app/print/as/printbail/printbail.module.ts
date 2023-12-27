import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrintbailPageRoutingModule } from './printbail-routing.module';

import { PrintbailPage } from './printbail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrintbailPageRoutingModule
  ],
  declarations: [PrintbailPage]
})
export class PrintbailPageModule {}
