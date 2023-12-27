import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { ConfigemploiPageRoutingModule } from './configemploi-routing.module';

import { ConfigemploiPage } from './configemploi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    ConfigemploiPageRoutingModule
  ],
  declarations: [ConfigemploiPage]
})
export class ConfigemploiPageModule {}
