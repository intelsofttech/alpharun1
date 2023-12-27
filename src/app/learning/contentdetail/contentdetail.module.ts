import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ContentdetailPageRoutingModule } from './contentdetail-routing.module';

import { ContentdetailPage } from './contentdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    ContentdetailPageRoutingModule
  ],
  declarations: [ContentdetailPage]
})
export class ContentdetailPageModule {}
