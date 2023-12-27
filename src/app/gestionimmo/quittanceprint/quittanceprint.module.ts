import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { QuittanceprintPageRoutingModule } from './quittanceprint-routing.module';

import { QuittanceprintPage } from './quittanceprint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    QuittanceprintPageRoutingModule
  ],
  declarations: [QuittanceprintPage]
})
export class QuittanceprintPageModule {}
