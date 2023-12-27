import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, NavParams, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
import { PartnermodalPage } from '../../partnermodal/partnermodal.page';
import { PartnercontratPage } from '../../partnercontrat/partnercontrat.page';
import { v4 as uuidv4 } from 'uuid';
import { NewoperationPage } from '../../newoperation/newoperation.page';



@Component({
  selector: 'app-quittance',
  templateUrl: './quittance.page.html',
  styleUrls: ['./quittance.page.scss'],
})
export class QuittancePage implements OnInit {

  
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
  pageForm: FormGroup;
  categForm: FormGroup;
  typeForm: FormGroup;
  
  mois="";
  annee="";
  isSend=false;
  addForm=true;
  constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient,
			  private params: NavParams) {
			  this.categForm = this.formBuilder.group({
				 mois: [''],
				 annee: ['']
			  })
			  this.pageForm = this.formBuilder.group({
				 word: ['']
			  })
			}

  		 
  backcolor1 :any = "#194eda";
  backcolor2 :any = "#194eda";
  textcolor :any = "#ffffff";
  
  showmode :any = "grid";
  param1 :any = "";
  param2 :any = "";
  agency :any = "";
  message :any = "";
  success :any = "";
  
  results :any  = [];
  amountBill=0;
  payamountTotal = 0;
  stayamountTotal = 0;
					
  label="";
	monthlib="";
	month :any="";
	month1 :any="";
	month2 :any="";
	year="";
	date="";
	code="";
	ref="";
	type="";
	typelib ="";
	category="";
	addDate="";
	eventDate="";
	price="";
	fee="";
	charge="";
	comamount="";
	amount="";
	mode="";
	pay="";
	unpay="";
	base="";
	tenantid="";
	tenant="";
	apartementid="";
	apartement="";
	propertyid="";
	property="";
	propertyparentid="";
	propertyparent="";
	ownerid="";
	owner="";
	userid="";
	username="";
	status="";
	description="";
	agencyid="";
  
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
		
		
		this.param1=  this.params.get('param1');
		this.param2=  this.params.get('param2');
	
		this.onGetLocal(this.param1);
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
		this.httpClient.get(this.REST_API_SERVER+"/bills/type/categ/1/LOYER", {headers: header})
				.subscribe(data => {
					console.log(data);
					this.results = data;
					this.amountBill=0;
					this.payamountTotal = 0;
					this.stayamountTotal = 0;
					this.results.forEach((line, index) => {
							this.amountBill = Number(this.amountBill) + Number(line.amount);
									this.payamountTotal = Number(this.payamountTotal) + Number(line.payamount);
									this.stayamountTotal = Number(this.stayamountTotal) + Number(line.stayamount);
						   if(!line.title) {
							  this.results.splice(index, 1);
						   }
						});
				}, error => {
					console.log(error);
			});
 } 	
 


 onVerify(){
	const mois = this.categForm.get('mois')?.value;
    const annee = this.categForm.get('annee')?.value;
	console.log(mois);
	console.log(annee);
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
		this.httpClient.get(this.REST_API_SERVER+"/bills/propriete/"+this.param1+"/"+mois+"/"+annee, {headers: header})
			.subscribe(data => {
				console.log(data);
				if(data['length']==0){
					console.log("add");
					this.message="";
					this.success="";
					this.onAdd();
				}else{
					console.log("cancel");
					this.message="Cette quittance existe déjà.";
					this.success="";
				}
			}, error => {
				console.log(error);
		});
 }
 onAdd(){
	const mois = this.categForm.get('mois')?.value;
    const annee = this.categForm.get('annee')?.value;
	console.log(mois);
	this.success="";
	console.log(annee);
	const Uuid =uuidv4();
	var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
	   if(mois=="01"){
			this.monthlib="Janvier";
	   }
	   if(mois=="02"){
			this.monthlib="Fevrier";
	   }
	   if(mois=="03"){
			this.monthlib="Mars";
	   }
	   if(mois=="04"){
			this.monthlib="Avril";
	   }
	   if(mois=="05"){
			this.monthlib="Mai";
	   }
	   if(mois=="06"){
			this.monthlib="Juin";
	   }
	   if(mois=="07"){
			this.monthlib="Juillet";
	   }
	   if(mois=="08"){
			this.monthlib="Août";
	   }
	   if(mois=="09"){
			this.monthlib="Septembre";
	   }
	   if(mois=="10"){
			this.monthlib="Octobre";
	   }
	   if(mois=="11"){
			this.monthlib="Novembre";
	   }
	   if(mois=="12"){
			this.monthlib="Décembre";
	   }
	   if(mois=="01"){
			this.month1 = "12";
			this.month2 = "01";
	   }else{
			const mth = Number(mois)-1;
			if(mth<10){
				this.month1 = "0"+mth;
		    }else{
				this.month1 = ""+mth;
			}
			this.month2 = mois;
	   }
	   this.addDate = annee+"-"+this.month1+"-25";
	   this.eventDate = annee+"-"+this.month2+"-05";
	  
		console.log(this.addDate);
		console.log(this.eventDate);
	   let postData = {
				month: mois,
				monthlib: this.monthlib,
				year: annee,
				title: this.typelib,
				total: this.price,
				amounttaxe: this.charge,
				amountouttaxe: this.price,
				discount: '0',
			    comamount: this.comamount,
			    amount: this.amount,
			    stayamount: this.amount,
			    addDate: this.addDate,
			    eventDate: this.eventDate,
			    reference: this.ref,
			    partner: this.tenant,
			    partnercode: this.tenantid,
				phone1: "",
				email: "",
				address: "",
				city: "",
			    description: this.description,
			    uui: Uuid,
			    type: '1',
			    category: "LOYER",
			    propertyid: this.apartementid,
			    property: this.apartement,
				propertyparentid: this.propertyid,
				propertyparent: this.property,
			    counted: "COUNTED",
				statut: 'Validé'
		}
		console.log(postData);
		this.httpClient.post(this.REST_API_SERVER+"/bill", postData, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.success="Quittance ajoutée avec succès.";
			}, error => {
				console.log(error);
				this.success="";
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
				this.apartementid = data['id'];
				this.apartement = data['typelib']+" "+data['ref'];
				this.ref = data['ref'];
				this.type = data['type'];
				this.typelib = data['typelib'];
				this.price = data['price'];
				this.fee = data['fee'];
				this.charge = data['charge'];
				this.amount = data['amount'];
				this.comamount = data['commission'];
				this.base = data['base'];
				this.tenantid = data['tenantid'];
				this.tenant = data['tenant'];
				this.status = data['status'];
				this.userid = data['userid'];
				this.username = data['username'];
				this.propertyid = data['propertyid'];
				this.property = data['property'];
				//this.propertyparentid = data['propertyparentid'];
				//this.propertyparent = data['propertyparent'];
				this.ownerid = data['ownerid'];
				this.owner = data['owner'];
				this.description = data['description'];
				
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
