import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillextPageRoutingModule } from './billext-routing.module';

import { BillextPage } from './billext.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillextPageRoutingModule
  ],
  declarations: [BillextPage]
})
export class BillextPageModule {}
