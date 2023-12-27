import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { SelectionchambrePageRoutingModule } from './selectionchambre-routing.module';

import { SelectionchambrePage } from './selectionchambre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    SelectionchambrePageRoutingModule
  ],
  declarations: [SelectionchambrePage]
})
export class SelectionchambrePageModule {}
