import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { OperationPageRoutingModule } from './operation-routing.module';

import { OperationPage } from './operation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    OperationPageRoutingModule
  ],
  declarations: [OperationPage]
})
export class OperationPageModule {}
