import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ProgramPageRoutingModule } from './program-routing.module';

import { ProgramPage } from './program.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    ProgramPageRoutingModule
  ],
  declarations: [ProgramPage]
})
export class ProgramPageModule {}
