import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { SaisiecotisationPageRoutingModule } from './saisiecotisation-routing.module';

import { SaisiecotisationPage } from './saisiecotisation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    SaisiecotisationPageRoutingModule
  ],
  declarations: [SaisiecotisationPage]
})
export class SaisiecotisationPageModule {}
