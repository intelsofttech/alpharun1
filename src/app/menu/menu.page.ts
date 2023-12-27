import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  
  config = false;
  recette = true;
  charge = false;
  caisse = false;
  admin = false;
  event = false;
  eglise = false;
  hebergement = false;
  configschool = false;
  public color: any = "#060761";
  public textcolor: any = "#505152";
  param1 :any= "";
  param2 :any= "";
  constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient) { }

  		 
  backcolor1 :any = "#194eda";
  backcolor2 :any = "#194eda";
  textcolor2 :any = "#ffffff";
  
  
  showmode :any = "grid";
  
  ngOnInit() {
		
		var showmode_html: any =document.getElementById("showmode")  as HTMLElement;
		this.showmode= showmode_html.value;
		
		var backcolor1_html: any =document.getElementById("backcolor1")  as HTMLElement;
		this.backcolor1= backcolor1_html.value;
		
		var backcolor2_html: any =document.getElementById("backcolor2")  as HTMLElement;
		this.backcolor2= backcolor2_html.value;
		
		var textcolor_html: any =document.getElementById("textcolor")  as HTMLElement;
		this.textcolor2= textcolor_html.value;
	
	
	this.param1 = this.activatedRoute.snapshot.paramMap.get('param1');
	this.param2 = this.activatedRoute.snapshot.paramMap.get('param2');
	this.goSelect(this.param1);
  }
  goSelect(sel:any){
	  this.config = false;
	  this.recette = false;
	  this.charge = false;
	  this.caisse = false;
	  this.admin = false;
	  this.event = false;
	  this.eglise = false;
	  this.hebergement = false;
	  
	  if(sel=="recette"){
			this.recette = true;
	  }
	  if(sel=="charge"){
			this.charge = true;
	  }
	  if(sel=="caisse"){
			this.caisse = true;
	  }
	  if(sel=="admin"){
			this.admin = true;
	  }
	  if(sel=="event"){
			this.event = true;
	  }
	  if(sel=="config"){
			this.config = true;
	  }
	  if(sel=="eglise"){
			this.eglise = true;
	  }
	  if(sel=="hebergement"){
			this.hebergement = true;
	  }
  }
  
}
