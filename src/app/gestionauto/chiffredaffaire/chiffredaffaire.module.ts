import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ChiffredaffairePageRoutingModule } from './chiffredaffaire-routing.module';

import { ChiffredaffairePage } from './chiffredaffaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    ChiffredaffairePageRoutingModule
  ],
  declarations: [ChiffredaffairePage]
})
export class ChiffredaffairePageModule {}
