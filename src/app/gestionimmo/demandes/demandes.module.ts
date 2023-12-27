import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { DemandesPageRoutingModule } from './demandes-routing.module';

import { DemandesPage } from './demandes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    DemandesPageRoutingModule
  ],
  declarations: [DemandesPage]
})
export class DemandesPageModule {}
