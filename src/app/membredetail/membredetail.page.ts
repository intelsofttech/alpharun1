import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-membredetail',
  templateUrl: './membredetail.page.html',
  styleUrls: ['./membredetail.page.scss'],
})
export class MembredetailPage implements OnInit {
  
  
  header = {
	//'Content-Type': 'application/json',
	'enctype': 'application/json',
	'Accept': '*',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
	'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
  };
		
  REST_API_SERVER="";
  imgbaseUrl = "";
  walletId = "";
  pageForm: FormGroup;
  categForm: FormGroup;
  
  id :any= "";
  code :any= "";
  firstName :any= "";
  lastName :any= "";
  gender :any= "";
  matrimonial :any= "";
  image :any= "";
  birthDate :any= "";
  birthLocate :any= "";
  nationality :any= "";
  profession :any= "";
  master :any= "";
  mastercontact :any= "";
  manager :any= "";
  managercontact :any= "";
  
  phone :any= "";
  email :any= "";
  address :any= "";
  city :any= "";
  group1 :any= "";
  group2 :any= "";
  group3 :any= "";
  group4 :any= "";
  group5 :any= "";
  group6 :any= "";
  addDate :any= "";
  locateadd :any= "";
  eventDate :any= "";
  locateevent :any= "";
  other :any= "";
  about :any= "";
  locateurl :any= "";
  confirmation :any= "";
  locate :any= "";
  compagnyName :any= "";
  description :any= "";
  
  param1 :any= "";
  param2 :any= "";
  constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient) { }

  		 
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
	
	
	var imgbaseUrl_html: any =document.getElementById("baseUrl")  as HTMLElement;
	this.imgbaseUrl= imgbaseUrl_html.value;
	
	this.param1 = this.activatedRoute.snapshot.paramMap.get('param1');
	this.param2 = this.activatedRoute.snapshot.paramMap.get('param2');
	this.onGet(this.param1);	
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
		this.httpClient.get(this.REST_API_SERVER+"/users/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.id = data['id'];
				this.code = data['userName'];
				this.firstName = data['firstName'];
			   this.lastName = data['lastName'];
			   this.gender = data['gender'];
			   this.matrimonial = data['matrimonial'];
			   this.birthDate = data['birthDate'];
			   this.birthLocate = data['birthLocate'];
			   this.nationality = data['nationality'];
			   this.profession = data['profession'];
			   this.master = data['master'];
			   this.mastercontact = data['mastercontact'];
			   this.manager = data['manager'];
			   this.managercontact = data['managercontact'];
			   this.image = data['image'];
			   this.phone = data['mobile'];
			   this.email = data['emailaddress'];
			   this.address = data['address'];
			   this.city = data['city'];
			   this.locateurl = data['locateurl'];
			   this.group1 = data['group1'];
			   this.group2 = data['group2'];
			   this.group3 = data['group3'];
			   this.group4 = data['group4'];
			   this.group5 = data['group5'];
			   this.group6 = data['group6'];
			   this.confirmation = data['confirmation'];
			   this.locate = data['locate'];
			   this.compagnyName = data['compagnyName'];
			   this.onGetLib(data['group1'], 1);
			   this.onGetLib(data['group2'], 2);
			   this.onGetLib(data['group3'], 3);
			   this.onGetLib(data['group4'], 4);
			   this.onGetLib(data['group5'], 5);
			   this.onGetLib(data['group6'], 6);
			   
			   this.addDate = data['addDate'];
			   this.locateadd = data['locateadd'];
			   this.eventDate = data['eventDate'];
			   this.locateevent = data['locateevent'];
			   this.other = data['other'];
			   this.about = data['about'];
			   this.description = data['description'];
				if(data['birthDate']!="" && data['birthDate']!=null){
					let date00 = data['birthDate'];
					let date0 = date00.substr(0, 10);
					this.birthDate = date0;
				}
				if(data['addDate']!="" && data['addDate']!=null){
					let date01 = data['addDate'];
					let date1 = date01.substr(0, 10);
					this.addDate = date1;
				}
				
				if(data['eventDate']!="" && data['eventDate']!=null){
					let date02 = data['eventDate'];
					let date2 = date02.substr(0, 10);
					this.eventDate = date2;
				}
				
				//this.onList();
			}, error => {
				console.log(error);
		});
 }
 
 
 
 onGetLib(id:string, sel:number){
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
		if(id!=""){
			this.httpClient.get(this.REST_API_SERVER+"/config/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				if(sel==1){
					this.group1=data['label']
				}
				if(sel==2){
					this.group2=data['label']
				}
				if(sel==3){
					this.group3=data['label']
				}
				if(sel==4){
					this.group4=data['label']
				}
				if(sel==5){
					this.group5=data['label']
				}
				console.log(data['label']);
			}, error => {
				console.log(error);
			});
		}
 }
 
}
