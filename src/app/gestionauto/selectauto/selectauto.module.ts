import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { SelectautoPageRoutingModule } from './selectauto-routing.module';
import { SelectautoPage } from './selectauto.page';

@NgModule({
  imports: [[
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    SelectautoPageRoutingModule
  ],
  declarations: [SelectautoPage]
})
export class SelectautoPageModule {}
