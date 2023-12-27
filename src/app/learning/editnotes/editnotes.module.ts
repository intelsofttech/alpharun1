import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { EditnotesPageRoutingModule } from './editnotes-routing.module';

import { EditnotesPage } from './editnotes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    EditnotesPageRoutingModule
  ],
  declarations: [EditnotesPage]
})
export class EditnotesPageModule {}
