import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { PartnerbillPageRoutingModule } from './partnerbill-routing.module';

import { PartnerbillPage } from './partnerbill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    PartnerbillPageRoutingModule
  ],
  declarations: [PartnerbillPage]
})
export class PartnerbillPageModule {}
