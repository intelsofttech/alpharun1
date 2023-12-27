import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { PopoverController, ToastController ,ActionSheetController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-billdetail',
  templateUrl: './billdetail.page.html',
  styleUrls: ['./billdetail.page.scss'],
})
export class BilldetailPage implements OnInit {



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
  id = "0";
  title = "";
  amount = "";
  addDate = "";
  eventDate = "";
  createdAt = "";
  reference = "";
  partner = "";
  phone1 :any= "";
  email :any= "";
  address :any= "";
  city :any= "";
  detail = "";
  projet = "";
  
  categ = "";
  montencaisse = "";
  categpart = "";
						
						
  amountTotal :number= 0;
  list :any = [];
  total = 0;
  public cartprod :any = [];
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
	this.Uuid = this.activatedRoute.snapshot.paramMap.get('param1');
	this.code = this.activatedRoute.snapshot.paramMap.get('param2');
	this.id = this.activatedRoute.snapshot.paramMap.get('param3');
	this.onGet(this.id);
	this.onCart();
	this.onList(this.code);
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
				 if(data['type']=="1"){
					this.categ = "recette";
					this.montencaisse = "Encaissé";
					if(data['category']=="COUNTED"){
						this.categpart="Remetteur";
					}
					if(data['category']=="RECETTE"){
						this.categpart="Remetteur";
					}
					if(data['category']=="RECETTE-PRODUIT"){
						this.categpart="Remetteur";
					}
					if(data['category']=="FACTURE"){
						this.categpart="Client";
					}
					if(data['category']=="DEVIS"){
						this.categpart="Client";
					}
				}else{
					if(data['type']=="2"){
						this.categ = "charge";
						this.montencaisse = "Décaissé";
						if(data['category']=="COUNTED"){
							this.categpart="Bénéficiaire";
						}
						if(data['category']=="CHARGE"){
							this.categpart="Bénéficiaire";
						}
						if(data['category']=="CHARGE-PRODUIT"){
							this.categpart="Bénéficiaire";
						}
						if(data['category']=="COMMANDE"){
							this.categpart="Fournisseur";
						}
						if(data['category']=="BON-COMMANDE"){
							this.categpart="Fournisseur";
						}
					}
				}
	
				this.title = data['title'];
				this.amount = data['amount'];
				this.addDate = data['addDate'];
				this.eventDate = data['eventDate'];
				this.createdAt = data['createdAt'];
				this.reference = data['reference'];
				this.partner = data['partner'];
				this.phone1 = data['phone1'];
				this.email = data['email'];
				this.address = data['address'];
				this.city = data['city'];
				this.detail = data['description'];
				this.onGetProject(data['event']);
				//this.onList();
			}, error => {
				console.log(error);
		});
 }
  

  onCart(){
  
      var header = {
		'Content-Type': 'application/json',
		'enctype': 'application/json',
		'Accept': '*',
		'Authorization': 'Bearer '+this.walletId,
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
		'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
	   };
	       this.httpClient.get(this.REST_API_SERVER+"/cart/"+this.Uuid, {headers: header})
			.subscribe(data => {
					//console.log(data);
					this.cartprod=data;
					
					
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
  
  
   onGetProject(id:string){
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
	   
		this.httpClient.get(this.REST_API_SERVER+"/event/"+id, {headers: header})
			.subscribe(data => {
				
				this.projet = data['title'];
				
			}, error => {
				console.log(error);
		});
 }
 

}
