import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditemploiPageRoutingModule } from './editemploi-routing.module';

import { EditemploiPage } from './editemploi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditemploiPageRoutingModule
  ],
  declarations: [EditemploiPage]
})
export class EditemploiPageModule {}
