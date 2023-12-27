import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { AjoutcotisationPageRoutingModule } from './ajoutcotisation-routing.module';

import { AjoutcotisationPage } from './ajoutcotisation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    AjoutcotisationPageRoutingModule
  ],
  declarations: [AjoutcotisationPage]
})
export class AjoutcotisationPageModule {}
