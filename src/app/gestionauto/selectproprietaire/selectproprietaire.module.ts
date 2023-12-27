import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { SelectproprietairePageRoutingModule } from './selectproprietaire-routing.module';

import { SelectproprietairePage } from './selectproprietaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    SelectproprietairePageRoutingModule
  ],
  declarations: [SelectproprietairePage]
})
export class SelectproprietairePageModule {}
