import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { PopoverController, NavParams, ToastController ,ActionSheetController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';



@Component({
  selector: 'app-newoperation',
  templateUrl: './newoperation.page.html',
  styleUrls: ['./newoperation.page.scss'],
})
export class NewoperationPage implements OnInit {

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
  cashdesk = "";
  receppartner = "";
  param1 = "";
  param2 = "";
  param3 = "";
  mode = "";
  selectmode = true;
  isSend = true;
  confirmation = false;
  operform = false;
  step = false;
  show1 = false;
  show2 = false;
  amountTotal :number= 0;
  _image :any = ""
  label :any = ""
  method :any = ""
  amount :any = ""
  phone :any = ""
  reference :any = ""
  addDate :any = ""
  establishment :any = ""
  name :any = ""
  identitycard :any = ""
  typebill :any = ""
  status :any = ""
				   
				   
  public cartprod :any = [];
  public partners :any = [];
  categForm: FormGroup;
  constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient,
			  private params: NavParams) {
				this.categForm = this.formBuilder.group({
				   label: ['', [Validators.required]],
				   method: ['', [Validators.required]],
				   amount: ['', [Validators.required]],
				   phone: [''],
				   reference: [''],
				   addDate: [''],
				   establishment: [''],
				   name: [''],
				   identitycard: [''],
			    })
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
	var cashdesk_html: any =document.getElementById("cashdesk")  as HTMLElement;
	this.cashdesk= cashdesk_html.value;
	this.param1=  this.params.get('param1');
	this.param2=  this.params.get('param2');
	this.param3=  this.params.get('param3');
	console.log("code caisse ");
	console.log(this.cashdesk);
	if(this.param2=="1"){
		this.receppartner="Rémi par";
		this.status="COLLECTION";
	}else{
		this.receppartner="Rémi à";
		this.status="DISBURSEMENT";
	}
	//this.onGet(this.param1);
	this.onList();
	//alert(this.cashdesk)
  }

  onSlectMode(mode:string, label:string){
     this.mode=mode;
     this.method=mode;
     this.label=label;
	 this.operform = true;
	 this.selectmode = false;
	 if(mode=="ESPECE"){
		this.show1=true;
		this.show2=false;
	 }
	 if(mode=="MOBILE MONEY"){
		this.show1=true;
		this.show2=true;
	 }
	 if(mode=="WAVE MOBILE"){
		this.show1=true;
		this.show2=true;
	 }
	 if(mode=="VERSEMENT"){
		this.show1=true;
		this.show2=false;
	 }
	 if(mode=="CHEQUE"){
		this.show1=true;
		this.show2=true;
	 }
	 if(mode=="CARTE"){
		this.show1=true;
		this.show2=false;
	 }
	 if(mode=="VIREMENT"){
		this.show1=true;
		this.show2=true;
	 }
	 if(mode=="TRANSFERT"){
		this.show1=true;
		this.show2=true;
	 }
	 
  }
  
  
  
  onAdd(){
	   this.label = this.categForm.get('label')?.value;
	   this.amount = this.categForm.get('amount')?.value;
	   this.phone = this.categForm.get('phone')?.value;
	   this.reference = this.categForm.get('reference')?.value;
	   this.addDate = this.categForm.get('addDate')?.value;
	   this.establishment = this.categForm.get('establishment')?.value;
	   this.name = this.categForm.get('name')?.value;
	   this.identitycard = this.categForm.get('identitycard')?.value;
	   
	   
     this.confirmation=true;
	 this.operform = false;
	 this.selectmode = false;
  }
  
   onAddPayment(){
      this.isSend = false;
	  
	   
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
				label: this.label,
				method: this.method,
				amount: this.amount,
				phone: this.phone,
				reference: this.reference,
				addDate: this.addDate,
				establishment: this.establishment,
				name: this.name,
				identitycard: this.identitycard,
				identitycard: this.param1,
				billid: this.param2,
				billcode: this.param3,
				statut: this.status,
				cashdesk: this.cashdesk
		    }
			
			console.log(postData)
			this.httpClient.post(this.REST_API_SERVER+"/payment", postData, {headers: header})
			.subscribe(data => {
					console.log(data);
					this.closemodal(this.param1,this.amount)
			}, error => {
					this.isSend = false;	
					console.log(error);
			});
 }
  
  
  onCancel(){
     this.confirmation=false;
	 this.operform = true;
	 this.selectmode = false;
  }
  onInitiliz(){
     this.confirmation=false;
	 this.operform = false;
	 this.selectmode = true;
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
				this.typebill=data['type'];
			}, error => {
				console.log(error);
		});
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
	   let postData = {
			
		}
		this.httpClient.get(this.REST_API_SERVER+"/users/usergroup/banque", {headers: header})
			.subscribe(data => {
				console.log(data);
				this.partners = data;
			}, error => {
				console.log(error);
		});
   }

  onselect(code:string,libelle:string)
  {
    this.modalCtrl.dismiss(code,libelle);

  }
 closemodal(code:string,libelle:string)
 {
    this.modalCtrl.dismiss(code,libelle);

 }
 
}