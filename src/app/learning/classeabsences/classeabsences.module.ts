import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ClasseabsencesPageRoutingModule } from './classeabsences-routing.module';
import { ClasseabsencesPage } from './classeabsences.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    ClasseabsencesPageRoutingModule
  ],
  declarations: [ClasseabsencesPage]
})
export class ClasseabsencesPageModule {}
