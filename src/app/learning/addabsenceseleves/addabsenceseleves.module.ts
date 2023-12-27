import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddabsenceselevesPageRoutingModule } from './addabsenceseleves-routing.module';

import { AddabsenceselevesPage } from './addabsenceseleves.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddabsenceselevesPageRoutingModule
  ],
  declarations: [AddabsenceselevesPage]
})
export class AddabsenceselevesPageModule {}
