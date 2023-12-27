import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { EditemploienseignonePageRoutingModule } from './editemploienseignone-routing.module';

import { EditemploienseignonePage } from './editemploienseignone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    EditemploienseignonePageRoutingModule
  ],
  declarations: [EditemploienseignonePage]
})
export class EditemploienseignonePageModule {}
