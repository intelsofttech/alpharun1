import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { SecteurPageRoutingModule } from './secteur-routing.module';

import { SecteurPage } from './secteur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    SecteurPageRoutingModule
  ],
  declarations: [SecteurPage]
})
export class SecteurPageModule {}
