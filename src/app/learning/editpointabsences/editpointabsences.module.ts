import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditpointabsencesPageRoutingModule } from './editpointabsences-routing.module';

import { EditpointabsencesPage } from './editpointabsences.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditpointabsencesPageRoutingModule
  ],
  declarations: [EditpointabsencesPage]
})
export class EditpointabsencesPageModule {}
