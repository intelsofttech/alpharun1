import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { SaisienotesPageRoutingModule } from './saisienotes-routing.module';

import { SaisienotesPage } from './saisienotes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    SaisienotesPageRoutingModule
  ],
  declarations: [SaisienotesPage]
})
export class SaisienotesPageModule {}
