import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ProgramcontentPageRoutingModule } from './programcontent-routing.module';

import { ProgramcontentPage } from './programcontent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    ProgramcontentPageRoutingModule
  ],
  declarations: [ProgramcontentPage]
})
export class ProgramcontentPageModule {}
