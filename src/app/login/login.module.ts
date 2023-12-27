import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule,
    ReactiveFormsModule,
    LoginPageRoutingModule
  ],
  schemas: [
	  CUSTOM_ELEMENTS_SCHEMA
	],
  declarations: [LoginPage]
})
export class LoginPageModule {}
