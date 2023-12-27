import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { FiliereenseignPageRoutingModule } from './filiereenseign-routing.module';

import { FiliereenseignPage } from './filiereenseign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    FiliereenseignPageRoutingModule
  ],
  declarations: [FiliereenseignPage]
})
export class FiliereenseignPageModule {}
