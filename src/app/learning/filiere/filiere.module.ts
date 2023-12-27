import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { FilierePageRoutingModule } from './filiere-routing.module';

import { FilierePage } from './filiere.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    FilierePageRoutingModule
  ],
  declarations: [FilierePage]
})
export class FilierePageModule {}
