import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditnotesresumePageRoutingModule } from './editnotesresume-routing.module';

import { EditnotesresumePage } from './editnotesresume.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditnotesresumePageRoutingModule
  ],
  declarations: [EditnotesresumePage]
})
export class EditnotesresumePageModule {}
