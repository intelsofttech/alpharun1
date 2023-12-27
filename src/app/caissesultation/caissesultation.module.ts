import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { CaissesultationPageRoutingModule } from './caissesultation-routing.module';

import { CaissesultationPage } from './caissesultation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    CaissesultationPageRoutingModule
  ],
  declarations: [CaissesultationPage]
})
export class CaissesultationPageModule {}
