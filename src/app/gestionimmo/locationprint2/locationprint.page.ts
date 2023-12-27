import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-locationprint',
  templateUrl: './locationprint.page.html',
  styleUrls: ['./locationprint.page.scss'],
})
export class LocationprintPage implements OnInit {

	
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
  
  pageForm: FormGroup;
  categForm: FormGroup;
  typeForm: FormGroup;
  
  addForm = false;
  isSend = false;
  listmode = false;
  gridmode = true;
  param1 :any= "0";
  param2 :any= "0";
  param3 :any= "0";
  
  id = "";
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
  amount = "";
  base = "";
  furniture = "";
  tenantid = "";
  tenant = "";
  propertyid = "";
  property = "";
  ownerid = "";
  date = "";
  status = "";
  userid = "";
  username = "";
  agencyid = "";
  etatcontrat :any= "";
  numcontrat :any= "";
  datesignature :any= "";
  file :any= ""; 
  description = "";
  
  owner = "";
  neiberhood = "";
  commune = "";
  ville = "";
  foncier = "";
  ilot = "";
  lot = "";
  permis = "";
				
  
  firstName :any= "";
  lastName :any= "";
  master :any= "";
  birthDate :any= "";
  birthLocate :any= "";
  nationality :any= "";
  typeidcard :any= "";
  numidcard :any= "";
  dateidcard :any= "";
  endidcard :any= "";
  locateidcard :any= "";
  countryidcard :any= "";
  image1idcard :any= "";
  image2idcard :any= "";
  signbyidcard :any= "";
  phone :any= "";
  email :any= "";
  address :any= "";
  city :any= "";
  locateurl :any= "";
  
  
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
		this.httpClient.get(this.REST_API_SERVER+"/apartment/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.id = data['id'];
				this.ref = data['ref'];
				this.type = data['type'];
				this.typelib = data['typelib'];
				this.etage = data['etage'];
				this.area = data['area'];
				this.nbroom = data['nbroom'];
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
				if(data['datesignature']!="" && data['datesignature']!=null){
					let date01 = data['datesignature'];
					let date1 = date01.substr(0, 10);
					this.datesignature = date1;
				}
				this.etatcontrat = data['etatcontrat'];
				this.status = data['status'];
				this.userid = data['userid'];
				this.username = data['username'];
				this.propertyid = data['propertyid'];
				this.property = data['property'];
				this.ownerid = data['ownerid'];
				this.owner = data['owner'];
				this.description = data['description'];
				this.onGetproperty(this.propertyid);
				this.onGetpartner(this.tenantid);
			}, error => {
				console.log(error);
		});
 }
 
 
 onGetproperty(id:string){
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
		this.httpClient.get(this.REST_API_SERVER+"/property/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.ownerid = data['ownerid'];
				this.owner = data['owner'];
				this.neiberhood = data['neiberhood'];
				this.commune = data['commune'];
				this.ville = data['ville'];
				this.foncier = data['foncier'];
				this.ilot = data['ilot'];
				this.lot = data['lot'];
				this.permis = data['permis'];
				
			}, error => {
				console.log(error);
		});
 }
 

 
 onGetpartner(id:string){
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
				this.firstName = data['firstName'];
				this.lastName = data['lastName'];
				this.master = data['master'];
				
				if(data['birthDate']!="" && data['birthDate']!=null){
					let date01 = data['birthDate'];
					let date1 = date01.substr(0, 10);
					this.birthDate = date1;
				}
				this.birthLocate = data['birthLocate'];
				
				this.nationality = data['nationality'];
				this.typeidcard = data['typeidcard'];
				this.numidcard = data['numidcard'];
				
				if(data['dateidcard']!="" && data['dateidcard']!=null){
					let date02 = data['dateidcard'];
					let date2 = date02.substr(0, 10);
					this.dateidcard = date2;
				}
				
				if(data['endidcard']!="" && data['endidcard']!=null){
					let date02 = data['endidcard'];
					let date2 = date02.substr(0, 10);
					this.endidcard = date2;
				}
				
				this.locateidcard = data['locateidcard'];
				this.countryidcard = data['countryidcard'];
				this.image1idcard = data['image1idcard'];
				this.image2idcard = data['image2idcard'];
				this.signbyidcard = data['signbyidcard'];
				this.phone = data['mobile'];
				this.email = data['emailaddress'];
				this.address = data['address'];
				this.city = data['city'];
				this.locateurl = data['locateurl'];
				this.description = data['description'];
				//this.onList();
			}, error => {
				console.log(error);
		});
 }
 

}
