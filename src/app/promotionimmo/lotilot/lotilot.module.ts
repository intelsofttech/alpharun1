import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LotilotPageRoutingModule } from './lotilot-routing.module';

import { LotilotPage } from './lotilot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LotilotPageRoutingModule
  ],
  declarations: [LotilotPage]
})
export class LotilotPageModule {}
