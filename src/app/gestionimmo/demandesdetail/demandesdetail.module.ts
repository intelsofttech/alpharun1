import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { DemandesdetailPageRoutingModule } from './demandesdetail-routing.module';

import { DemandesdetailPage } from './demandesdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    DemandesdetailPageRoutingModule
  ],
  declarations: [DemandesdetailPage]
})
export class DemandesdetailPageModule {}
