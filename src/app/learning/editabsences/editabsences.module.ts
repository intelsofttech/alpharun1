import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { EditabsencesPageRoutingModule } from './editabsences-routing.module';

import { EditabsencesPage } from './editabsences.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    EditabsencesPageRoutingModule
  ],
  declarations: [EditabsencesPage]
})
export class EditabsencesPageModule {}
