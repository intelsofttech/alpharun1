import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewlocationPageRoutingModule } from './newlocation-routing.module';

import { NewlocationPage } from './newlocation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewlocationPageRoutingModule
  ],
  declarations: [NewlocationPage]
})
export class NewlocationPageModule {}
