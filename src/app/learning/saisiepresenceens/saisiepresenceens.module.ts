import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { SaisiepresenceensPageRoutingModule } from './saisiepresenceens-routing.module';

import { SaisiepresenceensPage } from './saisiepresenceens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    SaisiepresenceensPageRoutingModule
  ],
  declarations: [SaisiepresenceensPage]
})
export class SaisiepresenceensPageModule {}
