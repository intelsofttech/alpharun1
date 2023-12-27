import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { FilierenotePageRoutingModule } from './filierenote-routing.module';

import { FilierenotePage } from './filierenote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    FilierenotePageRoutingModule
  ],
  declarations: [FilierenotePage]
})
export class FilierenotePageModule {}
