import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ProprietairePageRoutingModule } from './proprietaire-routing.module';

import { ProprietairePage } from './proprietaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    ProprietairePageRoutingModule
  ],
  declarations: [ProprietairePage]
})
export class ProprietairePageModule {}
