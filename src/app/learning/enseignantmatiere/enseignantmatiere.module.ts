import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { EnseignantmatierePageRoutingModule } from './enseignantmatiere-routing.module';

import { EnseignantmatierePage } from './enseignantmatiere.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    EnseignantmatierePageRoutingModule
  ],
  declarations: [EnseignantmatierePage]
})
export class EnseignantmatierePageModule {}
