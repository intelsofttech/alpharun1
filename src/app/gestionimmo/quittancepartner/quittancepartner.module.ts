import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { QuittancepartnerPageRoutingModule } from './quittancepartner-routing.module';

import { QuittancepartnerPage } from './quittancepartner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    QuittancepartnerPageRoutingModule
  ],
  declarations: [QuittancepartnerPage]
})
export class QuittancepartnerPageModule {}
