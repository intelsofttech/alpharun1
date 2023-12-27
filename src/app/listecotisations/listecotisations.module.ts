import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ListecotisationsPageRoutingModule } from './listecotisations-routing.module';

import { ListecotisationsPage } from './listecotisations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    ListecotisationsPageRoutingModule
  ],
  declarations: [ListecotisationsPage]
})
export class ListecotisationsPageModule {}
