import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { PopoverController, ToastController ,ActionSheetController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  
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
  Uuid = "";
  code = "";
  idbill = "";
  id = "0";
  sel = "0";
 
  operform = false ;
  isSend = false ;
  selectmode = false ;
  listmode = false;
  gridmode = true;
	
  totalpaye = "0";
  totalrestant = "0";
				
  _image :any = "";
  label :any = "";
  method :any = "";
  amount :any = "";
  phone :any = "";
  reference :any = "";
  addDate :any = "";
  establishment :any = "";
  name :any = ""
  identitycard :any = "";
  typebill :any = "";
  status :any = "";
  cashdesk :any = "";
  idadmin :any = "";
  showmessage :any = false;
  message :any = "";
  
  				
  amountTotal :number= 0;
  list :any = [];
  total = 0;
  public cartprod :any = [];
  categForm: FormGroup;
  constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient) {
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
		
		
		
		var idadmin_html: any =document.getElementById("idadmin")  as HTMLElement;
		this.idadmin= idadmin_html.value;
		
		
		this.id = this.activatedRoute.snapshot.paramMap.get('param1');
		this.idbill = this.activatedRoute.snapshot.paramMap.get('param2');
		this.code = this.activatedRoute.snapshot.paramMap.get('param3');
		this.sel = this.activatedRoute.snapshot.paramMap.get('param4');
	
	    this.onList(this.code);
	    //this.onListall();
	    this.onGetsouscription(this.id);
	    this.onGetDescash(this.idadmin);
		
		var now = new Date();
		const dateFormatter = Intl.DateTimeFormat('sv-SE');
		this.reference = Date.now();
		this.addDate = dateFormatter.format(now);
	
		if(this.sel=="1"){
			this.onAdd();
		}
  }

  onChangemode(sel:any){
	   if(sel=="list"){
		  this.listmode = true;
	      this.gridmode = false;
	   }else{
	      this.listmode = false;
	      this.gridmode = true;
	   }
  } 
  
  
  onCancelNew(){
	   this.operform = false;
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
	   this.operform = true ;
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
				label: "Paiement",
				method: this.method,
				amount: this.amount,
				phone: this.phone,
				reference: this.reference,
				addDate: this.addDate,
				establishment: this.establishment,
				name: this.name,
				identitycard: this.identitycard,
				billid: this.idbill,
				billcode: this.code,
				statut: "COLLECTION",
				cashdesk: this.cashdesk
		    }
			
			console.log(postData)
			this.httpClient.post(this.REST_API_SERVER+"/payment", postData, {headers: header})
			.subscribe(data => {
					console.log(data);
					this.onUpdate(this.amount);
					this.selectmode = true;
					this.operform = false;
					this.onList(this.code);
			}, error => {
					this.isSend = false;	
					console.log(error);
			});
 }
  
 
    onUpdate(amount:any){
	   var header = {
		'Content-Type': 'application/json',
		'enctype': 'application/json',
		'Accept': '*',
		'Authorization': 'Bearer '+this.walletId,
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
		'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
	   };
	   
	   const newtotalpaye = Number(this.totalpaye)+Number(amount);
	   const newtotalrestant = Number(this.totalrestant)-Number(amount);
	    let postData = {
		 		totalpaye : newtotalpaye,
				totalrestant : newtotalrestant
		}
		this.httpClient.put(this.REST_API_SERVER+"/souscription/"+this.id, postData, {headers: header})
		.subscribe(data => {
			console.log(data);
		}, error => {	
			console.log(error);
		});
 }
 
 
 onGetsouscription(id:string){
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
		this.httpClient.get(this.REST_API_SERVER+"/souscription/"+id, {headers: header})
			.subscribe(data => {
				this.totalpaye = data['totalpaye'];
				this.totalrestant = data['totalrestant'];
				console.log(this.totalrestant);
			}, error => {
				console.log(error);
		});
 }
 
   onGetDescash(id:string){
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
		 
		this.httpClient.get(this.REST_API_SERVER+"/cashdesk/found/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.cashdesk=data['code'];
				
				if(this.cashdesk!=""){
					this.showmessage = true;
					this.message = "Aucune caisse associée à ce compte";
				}else{
					this.showmessage = false;
					this.message = "";
				}
				
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
    
  
  onListall(){
  
      var header = {
		'Content-Type': 'application/json',
		'enctype': 'application/json',
		'Accept': '*',
		'Authorization': 'Bearer '+this.walletId,
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
		'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
	   };
	       this.httpClient.get(this.REST_API_SERVER+"/payment/bills", {headers: header})
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
