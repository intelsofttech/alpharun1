import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { PopoverController, ToastController ,ActionSheetController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-echeancier',
  templateUrl: './echeancier.page.html',
  styleUrls: ['./echeancier.page.scss'],
})
export class EcheancierPage implements OnInit {

  
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
  word = "";
 
  operform = false ;
  isSend = false ;
  addForm = false ;
  selectmode = false ;
  listmode = false;
  gridmode = true;
  specialech = false;
	
  //totalpaye = "0";
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
  amountFrais  :number= 0;
  amountnet  :number= 0;
  amountPaye  :number= 0;
  amountReste  :number= 0;
  totalrestantpaye  :number= 0;
  
  nb  :any= "0";
  totalapayer  :any= "0";
  apport  :any= "0";
  totalrestpaye  :any= "0";
  reste  :any= "0";
  resteapayer  :any= "0";
  totalpaye  :any= "0";
  
  date  :any= "";
  montant  :any= "";
				
  list :any = [];
  total = 0;
  public cartprod :any = [];
  categForm: FormGroup;
  pageForm: FormGroup;
  constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient) {
				this.pageForm = this.formBuilder.group({
					 word: [''],
					 totalapayer: [''],
					 resteapayer: [''],
					 totalpaye: ['']
				})
				this.categForm = this.formBuilder.group({
				   date: ['', [Validators.required]],
				   montant: ['']
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
		this.sel = this.activatedRoute.snapshot.paramMap.get('param2');
		if(this.sel!="Ordinaire"){
			this.specialech = true;
		}
	    
		this.onGet(this.id);
	    this.onList(this.id, this.sel);
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
  onNew(){
	 this.addForm=true;
	 this.date = "";
	 this.montant = "";
  } 
  onAdd(){
	 this.isSend = false;
	  
	   const date = this.categForm.get('date')?.value;
	   const montant = this.categForm.get('montant')?.value;
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
				mois: "mois",
				annee: "annee",
				date: date,
				montant: montant,
				netapayer: montant,
				reste: montant,
				idsous: this.id,
				type: this.sel,
		    }
		if(date!="" && montant!=""){
			this.isSend = true;
			console.log(postData)
			this.httpClient.post(this.REST_API_SERVER+"/echeancier", postData, {headers: header})
			.subscribe(data => {
					console.log(data);
					this.addForm = false;	
					this.isSend = false;
					this.onGet(this.id);	
					this.onList(this.id, this.sel);
			}, error => {
					this.isSend = false;	
					console.log(error);
			});
		}	
  } 
  
  onCancelNew(){
	 this.addForm = false;
  } 
  
  
  onList(id:any, sel:any){
  
      var header = {
		'Content-Type': 'application/json',
		'enctype': 'application/json',
		'Accept': '*',
		'Authorization': 'Bearer '+this.walletId,
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
		'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
	   };
	    
		   this.httpClient.get(this.REST_API_SERVER+"/echeancier/idsous/type/"+id+"/"+sel, {headers: header})
			.subscribe(data => {
					console.log(data);
					this.list=data;
					let total = 0;
					this.amountTotal = 0;
					this.amountFrais = 0;
					this.amountnet = 0;
					this.amountPaye = 0;
					this.amountReste = 0;
					this.totalrestantpaye = this.totalrestpaye;
					this.nb=0;
					this.list.forEach((line, index) => {
					    this.amountTotal = Number(this.amountTotal) + Number(line.montant);
						this.amountFrais = Number(this.amountFrais) + Number(line.frais);
						this.amountnet = Number(this.amountnet) + Number(line.netapayer);
						console.log(line.netapayer+"--"+this.totalrestantpaye);
						if(Number(line.netapayer)>Number(this.totalrestantpaye)){
							this.list[this.nb].paye=this.totalrestantpaye;
							this.list[this.nb].reste=Number(line.netapayer)-Number(this.totalrestantpaye);
							this.totalrestantpaye=0;
							this.amountPaye = Number(this.amountPaye) + Number(this.totalrestantpaye);
							this.amountReste = Number(this.amountReste) + (Number(line.netapayer)-Number(this.totalrestantpaye));
						
						}else{
							this.list[this.nb].paye=line.netapayer;
							this.list[this.nb].reste=0;
							this.totalrestantpaye=this.totalrestantpaye-Number(line.netapayer);
							this.amountPaye = Number(this.amountPaye) + Number(line.netapayer);
							this.amountReste = Number(this.amountReste);
						}
						
					    this.nb ++;
					   if(!line.netapayer) {
						  this.list.splice(index, 1);
					   }
					});
					
				}, error => {	
					console.log(error);
			});
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
		this.httpClient.get(this.REST_API_SERVER+"/souscription/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.totalapayer = data['totalapayer'];
				this.apport = data['apportinitial'];
				this.reste  = Number(this.totalapayer)-Number(this.apport);
				this.totalpaye = data['totalpaye'];
				if(Number(this.totalpaye)>Number(this.apport)){
					this.totalrestpaye = Number(this.totalpaye)-Number(this.apport);
				}
				
				this.resteapayer = Number(this.totalapayer)-Number(this.totalpaye);
				
			}, error => {
				console.log(error);
		});
 }
 
}
