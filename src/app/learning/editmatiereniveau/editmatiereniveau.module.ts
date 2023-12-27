import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { EditmatiereniveauPageRoutingModule } from './editmatiereniveau-routing.module';

import { EditmatiereniveauPage } from './editmatiereniveau.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    EditmatiereniveauPageRoutingModule
  ],
  declarations: [EditmatiereniveauPage]
})
export class EditmatiereniveauPageModule {}
