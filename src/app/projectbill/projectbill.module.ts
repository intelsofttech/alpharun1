import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectbillPageRoutingModule } from './projectbill-routing.module';

import { ProjectbillPage } from './projectbill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectbillPageRoutingModule
  ],
  declarations: [ProjectbillPage]
})
export class ProjectbillPageModule {}
