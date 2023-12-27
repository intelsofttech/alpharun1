import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { HorairePageRoutingModule } from './horaire-routing.module';

import { HorairePage } from './horaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    HorairePageRoutingModule
  ],
  declarations: [HorairePage]
})
export class HorairePageModule {}
