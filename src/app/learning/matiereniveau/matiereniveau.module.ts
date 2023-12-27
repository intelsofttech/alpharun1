import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { MatiereniveauPageRoutingModule } from './matiereniveau-routing.module';

import { MatiereniveauPage } from './matiereniveau.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    MatiereniveauPageRoutingModule
  ],
  declarations: [MatiereniveauPage]
})
export class MatiereniveauPageModule {}
