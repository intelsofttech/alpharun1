import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-printquittance',
  templateUrl: './printquittance.page.html',
  styleUrls: ['./printquittance.page.scss'],
})
export class PrintquittancePage implements OnInit {

  


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
  idadmin = "";
  
  param1 = "";
  param2 = "";
  param3 = "";
  
  title :any= "RECETTE/VENTE";
  imgbaseUrl :any;
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
	

	image = "";
	services = "";
	localisation2 = "";
	rccm = "";
	comptecontribuable = "";
	contacts = "";
	numcompte = "";
	siege = "";
	representant = "";
	
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
	
	
	var idadmin_html: any =document.getElementById("idadmin")  as HTMLElement;
	this.idadmin= idadmin_html.value;
	
	this.param1 = this.activatedRoute.snapshot.paramMap.get('param1');
	this.param2 = this.activatedRoute.snapshot.paramMap.get('param2');
	this.param3 = this.activatedRoute.snapshot.paramMap.get('param3');	
    this.onGet(this.param1)
    this.onGetInfo()
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
		this.httpClient.get(this.REST_API_SERVER+"/bill/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				if(data['addDate']!="" && data['addDate']!=null){
					let date01 = data['addDate'];
					let date1 = date01.substr(0, 10);
					this.date = date1;
				}
				
				if(data['eventDate']!="" && data['eventDate']!=null){
					let date02 = data['eventDate'];
					let date2 = date02.substr(0, 10);
					this.echeance = date2;
				}
				
				this.month = data['month'];
				this.monthlib = data['monthlib'];
				this.year = data['year'];
				this.title = data['title'];
				this.amountTotal = data['amount'];
				this.account = data['account'];
				this.reference = data['reference'];
				this.partner = data['partner'];
				this.partnercode = data['partnercode'];
				this.phone1 = data['phone1'];
				this.email = data['email'];
				this.address = data['address'];
				this.city = data['city'];
				this.description = data['description'];
				this.event = data['event'];
				
				this.onGetLocal(data['propertyid'])
				this.onList(data['code']);
			}, error => {
				console.log(error);
		});
 }
 
 
 
 onGetLocal(id:string){
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
				this.apartmentid = data['id'];
				this.apartment = data['ref'];
				this.ref = data['ref'];
				this.type = data['type'];
				this.typelib = data['typelib'];
				this.price = data['price'];
				this.fee = data['fee'];
				this.charge = data['charge'];
				this.amount = data['amount'];
				this.base = data['base'];
				this.tenantid = data['tenantid'];
				this.tenant = data['tenant'];
				this.status = data['status'];
				this.userid = data['userid'];
				this.username = data['username'];
				this.propertyid = data['propertyid'];
				this.property = data['property'];
				this.ownerid = data['ownerid'];
				this.owner = data['owner'];
				this.description = data['description'];
				
			}, error => {
				console.log(error);
		});
 }
 
 
  
 onGetInfo(){
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
		this.httpClient.get(this.REST_API_SERVER+"/my-account", {headers: header})
			.subscribe(data => {
				console.log(data);
				this.services= data['services'];
				this.localisation2= data['localisation2'];
				this.rccm= data['rccm'];
				this.comptecontribuable= data['comptecontribuable'];
				this.contacts= data['contacts'];
				this.numcompte= data['numcompte'];
				this.siege= data['siege'];
				this.representant= data['representant'];
				if(data['image']==""){
					this.image = "../assets/images/default-img.jpg";
				}else{
					this.onGetImageone(data['image']);
				}
			}, error => {
				console.log(error);
		});
 }
   
 
 onGetImageone(name:string){
		
		this.httpClient.get(this.REST_API_SERVER+"/file/name/"+name)
			.subscribe(data => {
				console.log(data);
				this.imgbaseUrl =data['content'];
			}, error => {
				console.log(error);
		});
 }
 
 
  onList(code:any){
  
      var header = {
		'Content-Type': 'application/json',
		'enctype': 'application/json',
		'Accept': '*',
		'Authorization': 'Bearer '+this.walletId,
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
		'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
	   };
	       this.httpClient.get(this.REST_API_SERVER+"/payment/bill/"+code, {headers: header})
			.subscribe(data => {
					console.log(data);
					this.list=data;
					let total = 0;
					this.amountTotal = 0;
					this.list.forEach((line, index) => {
					  
					   this.amountTotal = Number(this.amountTotal) + Number(line.amount);
					   
					   if(!line.label) {
						  this.list.splice(index, 1);
					   }
					});
					
				}, error => {	
					console.log(error);
			});
  }
  

}
