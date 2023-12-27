import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { EditioncotisationPageRoutingModule } from './editioncotisation-routing.module';

import { EditioncotisationPage } from './editioncotisation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    EditioncotisationPageRoutingModule
  ],
  declarations: [EditioncotisationPage]
})
export class EditioncotisationPageModule {}
