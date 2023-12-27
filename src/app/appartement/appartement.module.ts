import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { AppartementPageRoutingModule } from './appartement-routing.module';

import { AppartementPage } from './appartement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    AppartementPageRoutingModule
  ],
  declarations: [AppartementPage]
})
export class AppartementPageModule {}
