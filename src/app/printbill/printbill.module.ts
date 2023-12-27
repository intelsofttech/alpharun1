import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrintbillPageRoutingModule } from './printbill-routing.module';

import { PrintbillPage } from './printbill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrintbillPageRoutingModule
  ],
  declarations: [PrintbillPage]
})
export class PrintbillPageModule {}
