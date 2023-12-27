import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { SaisieabsenceselevesPageRoutingModule } from './saisieabsenceseleves-routing.module';

import { SaisieabsenceselevesPage } from './saisieabsenceseleves.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    SaisieabsenceselevesPageRoutingModule
  ],
  declarations: [SaisieabsenceselevesPage]
})
export class SaisieabsenceselevesPageModule {}
