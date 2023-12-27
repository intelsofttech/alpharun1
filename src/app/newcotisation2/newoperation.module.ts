import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { NewoperationPageRoutingModule } from './newoperation-routing.module';

import { NewoperationPage } from './newoperation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    NewoperationPageRoutingModule
  ],
  declarations: [NewoperationPage]
})
export class NewoperationPageModule {}
