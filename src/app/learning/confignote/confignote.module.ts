import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ConfignotePageRoutingModule } from './confignote-routing.module';

import { ConfignotePage } from './confignote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    ConfignotePageRoutingModule
  ],
  declarations: [ConfignotePage]
})
export class ConfignotePageModule {}
