import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { CotisationPageRoutingModule } from './cotisation-routing.module';

import { CotisationPage } from './cotisation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    CotisationPageRoutingModule
  ],
  declarations: [CotisationPage]
})
export class CotisationPageModule {}
