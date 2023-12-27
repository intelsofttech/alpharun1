import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { SaisieabsencePageRoutingModule } from './saisieabsence-routing.module';

import { SaisieabsencePage } from './saisieabsence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    SaisieabsencePageRoutingModule
  ],
  declarations: [SaisieabsencePage]
})
export class SaisieabsencePageModule {}
