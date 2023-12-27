import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { CategoriePageRoutingModule } from './categorie-routing.module';
import { CategoriePage } from './categorie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    CategoriePageRoutingModule
  ],
  declarations: [CategoriePage]
})
export class CategoriePageModule {}
