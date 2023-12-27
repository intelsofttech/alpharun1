import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { EditpresenceensPageRoutingModule } from './editpresenceens-routing.module';

import { EditpresenceensPage } from './editpresenceens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    EditpresenceensPageRoutingModule
  ],
  declarations: [EditpresenceensPage]
})
export class EditpresenceensPageModule {}
