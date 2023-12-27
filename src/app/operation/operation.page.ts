import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { PopoverController, ToastController ,ActionSheetController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.page.html',
  styleUrls: ['./operation.page.scss'],
})
export class OperationPage implements OnInit {

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
  cashdesk = "";
  param1 = "";
  param2 = "";
  receppartner = "";
  method = "Sélectionnez";
  label = "";
  _date1 = "";
  _date2 = "";
  selectmode = true;
  showsearchForm = false;
	 
  amountTotal :number= 0;
  public list :any = [];
  pageForm: FormGroup;
  constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient) {

				  this.pageForm = this.formBuilder.group({
					 method: [''],
					 _date1: [''],
					 _date2: ['']
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
	
	this.param1 = this.activatedRoute.snapshot.paramMap.get('param1');
	this.param2 = this.activatedRoute.snapshot.paramMap.get('param2');
	
	if(this.param1=="1"){
		this.receppartner="Rémi par";
	}else{
		this.receppartner="Rémi à";
	}
	this.onList();
  }
  searchForm(){
	   this.showsearchForm = true;
  }
 onSlectMode(mode:string, label:string){
     this.method=mode;
     this.label=label;
	 this.list = [];
	 this.selectmode = false;
	 if(mode=="TOUS"){
		this.onList();
	 }else{
		this.onListMode();
	 }
	 
 }

  onInitiliz(){
		this.method="Sélectionnez";
		this.selectmode = true;
  }
  onList(){
  
      var header = {
		'Content-Type': 'application/json',
		'enctype': 'application/json',
		'Accept': '*',
		'Authorization': 'Bearer '+this.walletId,
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
		'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
	   };
	       this.httpClient.get(this.REST_API_SERVER+"/payment/type/"+this.param1, {headers: header})
			.subscribe(data => {
					console.log(data);
					this.list=data;
					let total = 0;
					this.amountTotal = 0;
					this.list.forEach((line, index) => {
					  
					   if(line.billid == this.param1){
						this.amountTotal = Number(this.amountTotal) + Number(line.amount);
					   }
					   
					   if(!line.label) {
						  this.list.splice(index, 1);
					   }
					});
					
				}, error => {	
					console.log(error);
			});
  }
  onFoundList(){
  
      var header = {
		'Content-Type': 'application/json',
		'enctype': 'application/json',
		'Accept': '*',
		'Authorization': 'Bearer '+this.walletId,
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
		'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
	   };
	    if(this.method=="TOUS"){
		   if(this._date1=="" || this._date2==""){
				alert("Sélectionnez les dates")
		   }else{
				this.httpClient.get(this.REST_API_SERVER+"/payment/type/date/"+this.param1+"/"+this._date1+"/"+this._date2, {headers: header})
				.subscribe(data => {
						console.log(data);
						this.list=data;
						let total = 0;
						this.amountTotal = 0;
						this.list.forEach((line, index) => {
						  
						   if(line.billid == this.param1){
							this.amountTotal = Number(this.amountTotal) + Number(line.amount);
						   }
						   
						   if(!line.label) {
							  this.list.splice(index, 1);
						   }
						});
						
					}, error => {	
						console.log(error);
				});
		   
		   }
	       
		}else{
			this.httpClient.get(this.REST_API_SERVER+"/payment/type/method/date/"+this.param1+"/"+this.method+"/"+this._date1+"/"+this._date2, {headers: header})
			.subscribe(data => {
					console.log(data);
					this.list=data;
					let total = 0;
					this.amountTotal = 0;
					this.list.forEach((line, index) => {
					  
					   if(line.billid == this.param1){
						this.amountTotal = Number(this.amountTotal) + Number(line.amount);
					   }
					   
					   if(!line.label) {
						  this.list.splice(index, 1);
					   }
					});
					
				}, error => {	
					console.log(error);
			});
		}
  }
  onListMode(){
  
      var header = {
		'Content-Type': 'application/json',
		'enctype': 'application/json',
		'Accept': '*',
		'Authorization': 'Bearer '+this.walletId,
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
		'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
	   };
	       this.httpClient.get(this.REST_API_SERVER+"/payment/method/"+this.method, {headers: header})
			.subscribe(data => {
					console.log(data);
					this.list=data;
					let total = 0;
					this.amountTotal = 0;
					this.list.forEach((line, index) => {
					  
					   if(line.billid == this.param1){
						this.amountTotal = Number(this.amountTotal) + Number(line.amount);
					   }
					   if(!line.label) {
						  this.list.splice(index, 1);
					   }
					});
					
				}, error => {	
					console.log(error);
			});
  }
  

}
