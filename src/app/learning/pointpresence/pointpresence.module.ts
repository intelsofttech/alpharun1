import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { PointpresencePageRoutingModule } from './pointpresence-routing.module';

import { PointpresencePage } from './pointpresence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    PointpresencePageRoutingModule
  ],
  declarations: [PointpresencePage]
})
export class PointpresencePageModule {}
