import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { AddemploiPageRoutingModule } from './addemploi-routing.module';

import { AddemploiPage } from './addemploi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    AddemploiPageRoutingModule
  ],
  declarations: [AddemploiPage]
})
export class AddemploiPageModule {}
