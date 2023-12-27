import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditemploiclassallPageRoutingModule } from './editemploiclassall-routing.module';

import { EditemploiclassallPage } from './editemploiclassall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditemploiclassallPageRoutingModule
  ],
  declarations: [EditemploiclassallPage]
})
export class EditemploiclassallPageModule {}
