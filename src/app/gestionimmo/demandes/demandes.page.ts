import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { PopoverController, ToastController ,ActionSheetController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.page.html',
  styleUrls: ['./demandes.page.scss'],
})
export class DemandesPage implements OnInit {

  
  
  header = {
	//'Content-Type': 'application/json',
	'enctype': 'application/json',
	'Accept': '*',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
	'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
  };

  photo:any="../assets/images/default-img.jpg";

  REST_API_SERVER="";
  walletId = "";
  pageForm: FormGroup;
  categForm: FormGroup;
  
  showsearchForm = false;
  notshowAddForm = false;
  search = false;
  addForm = false;
  step = false;
  stepsimple = false;
  stepdetail = false;
  stepsell = false;
  showdescashbtn = false;
  isSend = false;
  param1 :any= "0";
  param2 :any= "0";
  param3 :any= "0";
  param4 :any= "0";
  searchValue :any= "0";
  id :any= "0";
  _categ = "";
  _date1 = "";
  _date2 = "";
  mois = "01";
  annee = "2023";
  paiement = "";
  property = "";
   firstName :any= "";
  lastName :any= "";
  master :any= "";
  birthDate :any= "";
  birthLocate :any= "";
  nationality :any= "";
  type :any= "";
  typeidcard :any= "";
  numidcard :any= "";
  dateidcard :any= "";
  endidcard :any= "";
  locateidcard :any= "";
  countryidcard :any= "";
  image1idcard :any= "";
  image2idcard :any= "";
  signbyidcard :any= "";
  profession :any= "";
  phone :any= "";
  email :any= "";
  address :any= "";
  city :any= "";
  locateurl :any= "";
  description :any= "";
  
  agency = "";
  cashdesk = "";
  
  amountBill :number= 0;
  amountTotal :number= 0;
  payamountTotal :number= 0;
  stayamountTotal :number= 0;
				
  public results :any = [];
  public alllist :any = [];
  public list :any = [];
  public properties :any = [];
  public filtered :any = [];
  public cartprod :any = [];
  public projets :any = [];
  public listcategories :any = [];
  searchNotMatched = true;
  typeForm = false;
 constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient) {
			  this.pageForm = this.formBuilder.group({
				 _categ: [''],
				 _date1: [''],
				 _date2: [''],
				 word: ['']
			  })
			}

  		 
  backcolor1 :any = "#194eda";
  backcolor2 :any = "#194eda";
  textcolor :any = "#ffffff";
  simpleform :any = false;
  
  
  showmode :any = "grid";
  idadmin :any = "";
  
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
	
	var cashdesk_html: any =document.getElementById("cashdesk")  as HTMLElement;
	this.cashdesk= cashdesk_html.value;
	
	
	var agency_html: any =document.getElementById("agency")  as HTMLElement;
	this.agency= agency_html.value;
	
	var idadmin_html: any =document.getElementById("idadmin")  as HTMLElement;
	this.idadmin= idadmin_html.value;
	this.onList();	
	
  }

  onList(){
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
	   console.log(this.walletId);
	   this.httpClient.get(this.REST_API_SERVER+"/statements", {headers: header})
			.subscribe(data => {
					console.log(data);
					this.results = data;
					this.alllist = data;
  
				}, error => {
					console.log(error);
			});
		
 }
 
 
 onDelete(id:string){
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
		this.httpClient.delete(this.REST_API_SERVER+"/statement/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.onList();
			}, error => {
				console.log(error);
		});
 }
 
 
   onGetStatment(id:string){
		
	    console.log(id);
		this.httpClient.get(this.REST_API_SERVER+"/statement/"+id)
			.subscribe(data => {
				console.log(data);
				const Uuid =uuidv4();
				const firstName = data['nom'];
				const address = data['address'];
				const phone = data['phone'];
				const email = data['email'];
				const profession = data['profession'];
				const villeid = data['villeid'];
				const city = data['commune'];
				
				 var header = {
					'Content-Type': 'application/json',
					'enctype': 'application/json',
					'Accept': '*',
					'Authorization': 'Bearer '+this.walletId,
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
					'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
				   };
	   
					let postData = {
						firstName: firstName,
						profession: profession,
						mobile: phone,
						emailaddress: email,
						address: address,
						city: city,
						userName: Uuid,
						password: "0101",
						usergroup: "prospect"
					}
					
					this.httpClient.post(this.REST_API_SERVER+"/newuser", postData, {headers: header})
					.subscribe(data => {
							console.log(data);
							alert("Prospect ajouté avec succès")
							this.onList();
		  
						}, error => {
							this.isSend = false;	
							console.log(error);
					});
			}, error => {
				console.log(error);
		});
 }
 
 
 
}
