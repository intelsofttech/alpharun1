import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { MembregroupePageRoutingModule } from './membregroupe-routing.module';

import { MembregroupePage } from './membregroupe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    MembregroupePageRoutingModule
  ],
  declarations: [MembregroupePage]
})
export class MembregroupePageModule {}
