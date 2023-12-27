import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ClassematierePageRoutingModule } from './classematiere-routing.module';

import { ClassematierePage } from './classematiere.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    ClassematierePageRoutingModule
  ],
  declarations: [ClassematierePage]
})
export class ClassematierePageModule {}
