import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { PropertyPageRoutingModule } from './property-routing.module';
import { PropertyPage } from './property.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    PropertyPageRoutingModule
  ],
  declarations: [PropertyPage]
})
export class PropertyPageModule {}
