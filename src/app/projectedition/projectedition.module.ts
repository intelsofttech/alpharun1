import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { ProjecteditionPageRoutingModule } from './projectedition-routing.module';

import { ProjecteditionPage } from './projectedition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    ProjecteditionPageRoutingModule
  ],
  declarations: [ProjecteditionPage]
})
export class ProjecteditionPageModule {}
