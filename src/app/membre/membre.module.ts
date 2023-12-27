import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { MembrePageRoutingModule } from './membre-routing.module';

import { MembrePage } from './membre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    MembrePageRoutingModule
  ],
  declarations: [MembrePage]
})
export class MembrePageModule {}
