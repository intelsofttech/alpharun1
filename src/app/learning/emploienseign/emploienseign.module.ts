import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { EmploienseignPageRoutingModule } from './emploienseign-routing.module';

import { EmploienseignPage } from './emploienseign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    EmploienseignPageRoutingModule
  ],
  declarations: [EmploienseignPage]
})
export class EmploienseignPageModule {}
