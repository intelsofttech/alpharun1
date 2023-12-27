import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { NewcotisationPageRoutingModule } from './newcotisation-routing.module';

import { NewcotisationPage } from './newcotisation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    NewcotisationPageRoutingModule
  ],
  declarations: [NewcotisationPage]
})
export class NewcotisationPageModule {}
