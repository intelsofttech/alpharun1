import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ConducteurPageRoutingModule } from './conducteur-routing.module';

import { ConducteurPage } from './conducteur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    ConducteurPageRoutingModule
  ],
  declarations: [ConducteurPage]
})
export class ConducteurPageModule {}
