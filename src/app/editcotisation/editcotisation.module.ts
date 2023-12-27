import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditcotisationPageRoutingModule } from './editcotisation-routing.module';

import { EditcotisationPage } from './editcotisation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditcotisationPageRoutingModule
  ],
  declarations: [EditcotisationPage]
})
export class EditcotisationPageModule {}
