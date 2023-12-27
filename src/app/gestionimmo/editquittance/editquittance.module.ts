import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { EditquittancePageRoutingModule } from './editquittance-routing.module';

import { EditquittancePage } from './editquittance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    EditquittancePageRoutingModule
  ],
  declarations: [EditquittancePage]
})
export class EditquittancePageModule {}
