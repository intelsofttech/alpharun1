import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { TypeprogramPageRoutingModule } from './typeprogram-routing.module';

import { TypeprogramPage } from './typeprogram.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    TypeprogramPageRoutingModule
  ],
  declarations: [TypeprogramPage]
})
export class TypeprogramPageModule {}
