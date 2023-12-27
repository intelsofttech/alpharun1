import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { SelectconducteurPageRoutingModule } from './selectconducteur-routing.module';

import { SelectconducteurPage } from './selectconducteur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    SelectconducteurPageRoutingModule
  ],
  declarations: [SelectconducteurPage]
})
export class SelectconducteurPageModule {}
