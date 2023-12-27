import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { ClassePageRoutingModule } from './classe-routing.module';

import { ClassePage } from './classe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    ClassePageRoutingModule
  ],
  declarations: [ClassePage]
})
export class ClassePageModule {}
