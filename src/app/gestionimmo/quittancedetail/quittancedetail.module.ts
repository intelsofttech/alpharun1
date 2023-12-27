import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { QuittancedetailPageRoutingModule } from './quittancedetail-routing.module';

import { QuittancedetailPage } from './quittancedetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    QuittancedetailPageRoutingModule
  ],
  declarations: [QuittancedetailPage]
})
export class QuittancedetailPageModule {}
