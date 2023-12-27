import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { MembreselectionPageRoutingModule } from './membreselection-routing.module';

import { MembreselectionPage } from './membreselection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    MembreselectionPageRoutingModule
  ],
  declarations: [MembreselectionPage]
})
export class MembreselectionPageModule {}
