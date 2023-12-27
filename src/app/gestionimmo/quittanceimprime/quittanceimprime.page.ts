import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quittanceimprime',
  templateUrl: './quittanceimprime.page.html',
  styleUrls: ['./quittanceimprime.page.scss'],
})
export class QuittanceimprimePage implements OnInit {

 

  header = {
	//'Content-Type': 'application/json',
	'enctype': 'application/json',
	'Accept': '*',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
	'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
  };
		
  REST_API_SERVER="";
  walletId = "";
  agency = "";
  
  param1 = "";
  param2 = "";
  param3 = "";
  
  title :any= "RECETTE/VENTE";
  total :any= "";
  discount :any= "";
  rate :any= "";
  discountrate :any= "";
  amounttaxe :any= "";
  amountouttaxe :any= "";
  amount :any= "";
  addDate :any= "";
  reference :any= "";
  date :any= "";
  echeance :any= "";
  partner :any= "";
  partnercode :any= "";
  phone1 :any= "";
  email :any= "";
  address :any= "";
  city :any= "";
  event :any= "";
  counted :any= "";
  task :any= "";
  account :any= "";
  amountTotal :any= "";
  locateurl :any= "";
  description :any= "";
  pageForm: FormGroup;
  categForm: FormGroup;
  typeForm: FormGroup;
  
  name = "";
  ref = "";
  type = "";
  typelib = "";
  area = "";
  etage = "";
  nbroom = "";
  price = "";
  fee = "";
  charge = "";
  base = "";
  furniture = "";
  tenantid = "";
  tenant = "";
  apartment = "";
  apartmentid = "";
  owner = "";
  ownerid = "";
  propertyid = "";
  property = "";
  status = "";
  userid = "";
  username = "";
  agencyid = "";
  etatcontrat :any= "";
  numcontrat :any= "";
  datesignature :any= "";
  file :any= ""; 
  month = "";
  monthlib = "";
  year = "";
				
  list:any=[];
  
   constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient) {
			  
			}

  		 
  backcolor1 :any = "#194eda";
  backcolor2 :any = "#194eda";
  textcolor :any = "#ffffff";
  
  showmode :any = "grid";
  
  ngOnInit() {
		
		var showmode_html: any =document.getElementById("showmode")  as HTMLElement;
		this.showmode= showmode_html.value;
		
		var backcolor1_html: any =document.getElementById("backcolor1")  as HTMLElement;
		this.backcolor1= backcolor1_html.value;
		
		var backcolor2_html: any =document.getElementById("backcolor2")  as HTMLElement;
		this.backcolor2= backcolor2_html.value;
		
		var textcolor_html: any =document.getElementById("textcolor")  as HTMLElement;
		this.textcolor= textcolor_html.value;
	
	var api_html: any =document.getElementById("API_SERVER")  as HTMLElement;
	this.REST_API_SERVER= api_html.value;
	
	var walletId_html: any =document.getElementById("walletId")  as HTMLElement;
	this.walletId= walletId_html.value;
	
	var agency_html: any =document.getElementById("agency")  as HTMLElement;
	this.agency= agency_html.value;
	
	this.param1 = this.activatedRoute.snapshot.paramMap.get('param1');
	this.param2 = this.activatedRoute.snapshot.paramMap.get('param2');
	
  }
  


}
