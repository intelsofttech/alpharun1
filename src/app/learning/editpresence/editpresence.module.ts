import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { EditpresencePageRoutingModule } from './editpresence-routing.module';

import { EditpresencePage } from './editpresence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    EditpresencePageRoutingModule
  ],
  declarations: [EditpresencePage]
})
export class EditpresencePageModule {}
