import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-apartmentprint',
  templateUrl: './apartmentprint.page.html',
  styleUrls: ['./apartmentprint.page.scss'],
})
export class ApartmentprintPage implements OnInit {

  
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
  id :any= "0";
  name = "";
  ref = "";
  type = "";
  typelib = "";
  typelabel = "";
  etage = "";
  nbroom = "";
  area = "";
  price = "";
  fee = "";
  charge = "";
  amount = "";
  base = "";
  furniture = "";
  tenantid = "";
  tenant = "";
  propertyid = "";
  property = "";
  ownerid = "";
  owner = "";
  date = "";
  status = "";
  userid = "";
  username = "";
  agencyid = "";
  description = "";
  
	caution = "";
	avance = "";
	agence = "";
	tva = "";
	cautionmois = "";
	avancemois = "";
	agencemois = "";
	tvataux = "";
	dossier = "";
	total1 = "";
	bail = "";
	cie = "";
	dijoncteur = "";
	sodeci = "";
	total2 = "";
	netapayer = "";
	
	
  pageForm: FormGroup;
  categForm: FormGroup;
  typeForm: FormGroup;
  
				
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
	this.param3 = this.activatedRoute.snapshot.paramMap.get('param3');	
    this.onGet(this.param1)
  }
  

 onGet(id:string){
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
	   let postData = {
			
		}
		this.httpClient.get(this.REST_API_SERVER+"/apartment/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.id = data['id'];
				this.ref = data['ref'];
				this.type = data['type'];
				this.typelib = data['typelib'];
				this.etage = data['etage'];
				this.nbroom = data['nbroom'];
				this.area = data['area'];
				this.price = data['price'];
				this.fee = data['fee'];
				this.charge = data['charge'];
				this.amount = data['amount'];
				this.base = data['base'];
				this.furniture = data['furniture'];
				this.tenantid = data['tenantid'];
				this.tenant = data['tenant'];
				if(data['date']!="" && data['date']!=null){
					let date01 = data['date'];
					let date1 = date01.substr(0, 10);
					this.date = date1;
				}
				this.status = data['status'];
				this.userid = data['userid'];
				this.username = data['username'];
				this.propertyid = data['propertyid'];
				this.property = data['property'];
				this.ownerid = data['ownerid'];
				this.owner = data['owner'];
				this.description = data['description'];
				
				this.caution = data['caution'];
				this.avance = data['avance'];
				this.agence = data['agence'];
				this.tva = data['tva'];
				this.cautionmois = data['cautionmois'];
				this.avancemois = data['avancemois'];
				this.agencemois = data['agencemois'];
				this.tvataux = data['tvataux'];
				this.dossier = data['dossier'];
				this.total1 = data['total1'];
				this.bail = data['bail'];
				this.cie = data['cie'];
				this.dijoncteur = data['dijoncteur'];
				this.sodeci = data['sodeci'];
				this.total2 = data['total2'];
				this.netapayer = data['netapayer'];
				
			}, error => {
				console.log(error);
		});
 }
 
 
}
