import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { EditfilierePageRoutingModule } from './editfiliere-routing.module';

import { EditfilierePage } from './editfiliere.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    EditfilierePageRoutingModule
  ],
  declarations: [EditfilierePage]
})
export class EditfilierePageModule {}
