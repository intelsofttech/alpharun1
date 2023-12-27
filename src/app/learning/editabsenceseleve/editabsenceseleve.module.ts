import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { EditabsenceselevePageRoutingModule } from './editabsenceseleve-routing.module';

import { EditabsenceselevePage } from './editabsenceseleve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    EditabsenceselevePageRoutingModule
  ],
  declarations: [EditabsenceselevePage]
})
export class EditabsenceselevePageModule {}
