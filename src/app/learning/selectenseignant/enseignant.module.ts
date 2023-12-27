import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { EnseignantPageRoutingModule } from './enseignant-routing.module';

import { EnseignantPage } from './enseignant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    EnseignantPageRoutingModule
  ],
  declarations: [EnseignantPage]
})
export class EnseignantPageModule {}
