import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ChambrePageRoutingModule } from './chambre-routing.module';

import { ChambrePage } from './chambre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    ChambrePageRoutingModule
  ],
  declarations: [ChambrePage]
})
export class ChambrePageModule {}
