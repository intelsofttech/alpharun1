import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { QuittanceimprimePageRoutingModule } from './quittanceimprime-routing.module';

import { QuittanceimprimePage } from './quittanceimprime.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    QuittanceimprimePageRoutingModule
  ],
  declarations: [QuittanceimprimePage]
})
export class QuittanceimprimePageModule {}
