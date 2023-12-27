import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { EcheancierPageRoutingModule } from './echeancier-routing.module';

import { EcheancierPage } from './echeancier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    EcheancierPageRoutingModule
  ],
  declarations: [EcheancierPage]
})
export class EcheancierPageModule {}
