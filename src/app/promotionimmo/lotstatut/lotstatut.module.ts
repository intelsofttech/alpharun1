import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { LotstatutPageRoutingModule } from './lotstatut-routing.module';

import { LotstatutPage } from './lotstatut.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    LotstatutPageRoutingModule
  ],
  declarations: [LotstatutPage]
})
export class LotstatutPageModule {}
