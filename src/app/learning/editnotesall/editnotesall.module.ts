import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditnotesallPageRoutingModule } from './editnotesall-routing.module';

import { EditnotesallPage } from './editnotesall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditnotesallPageRoutingModule
  ],
  declarations: [EditnotesallPage]
})
export class EditnotesallPageModule {}
