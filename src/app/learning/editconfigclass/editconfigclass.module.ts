import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditconfigclassPageRoutingModule } from './editconfigclass-routing.module';

import { EditconfigclassPage } from './editconfigclass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditconfigclassPageRoutingModule
  ],
  declarations: [EditconfigclassPage]
})
export class EditconfigclassPageModule {}
