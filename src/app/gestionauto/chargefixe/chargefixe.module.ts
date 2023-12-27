import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ChargefixePageRoutingModule } from './chargefixe-routing.module';

import { ChargefixePage } from './chargefixe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    ChargefixePageRoutingModule
  ],
  declarations: [ChargefixePage]
})
export class ChargefixePageModule {}
