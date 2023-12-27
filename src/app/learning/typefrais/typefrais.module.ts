import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { TypefraisPageRoutingModule } from './typefrais-routing.module';

import { TypefraisPage } from './typefrais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    TypefraisPageRoutingModule
  ],
  declarations: [TypefraisPage]
})
export class TypefraisPageModule {}
