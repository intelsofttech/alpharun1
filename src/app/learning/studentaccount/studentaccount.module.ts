import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { StudentaccountPageRoutingModule } from './studentaccount-routing.module';

import { StudentaccountPage } from './studentaccount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    StudentaccountPageRoutingModule
  ],
  declarations: [StudentaccountPage]
})
export class StudentaccountPageModule {}
