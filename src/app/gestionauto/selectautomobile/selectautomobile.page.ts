import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, NavParams, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-selectautomobile',
  templateUrl: './selectautomobile.page.html',
  styleUrls: ['./selectautomobile.page.scss'],
})
export class SelectautomobilePage implements OnInit {

  
  
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
  
  addForm = false;
  isSend = false;
  listmode = false;
  gridmode = true;
  param1 :any= "0";
  param2 :any= "0";
  param3 :any= "0";
  searchValue :any= "0";
  
  
  id :any= "0";
  reference:any="";
	marque:any="";
	model:any="";
	serie:any="";
	cylindre:any="";
	couleur:any="";
	kilometrage:any="";
	type:any="";
	origine:any="";
	category:any="";
	immatriculation:any="";
	montant:any="";
	frais:any="";
	charge:any="";
	total:any="";
	base:any="";
	honoraire:any="";
	recette:any="";
	provider:any="";
	tenantid:any="";
	tenant:any="";
	tenantid2:any="";
	tenant2:any="";
	ownerid:any="";
	owner:any="";
	status:any="";
	dateachat:any="";
	datecirculation:any="";
	debutassurance:any="";
	finassurance:any="";
	debutvisite:any="";
	finvisite:any="";
	debutpatente:any="";
	finpatente:any="";
	datestation:any="";
	event:any="";
	motif:any="";
	description:any="";
	agency:any="";
	agencyid:any="";
	username:any="";
	userid:any="";
	numcontrat:any="";
	etatcontrat:any="";
	datesignature:any="";
	image:any="";
	file:any="";
    word = "";
			
  liboperation :any= "AJOUT";
  public results :any = [];
  public alllist :any = [];
  public types :any = [];
  public filtered :any = [];
  searchNotMatched = true;
 constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient,
			  private params: NavParams) {
			  this.typeForm = this.formBuilder.group({
				 type: [''],
				 status: ['']
			  })
			  this.pageForm = this.formBuilder.group({
				 word: ['']
			  })
			  this.categForm = this.formBuilder.group({
				    reference: [''],
					marque: [''],
					model: [''],
					serie: [''],
					cylindre: [''],
					couleur: [''],
					kilometrage: [''],
					type: [''],
					origine: [''],
					category: [''],
					immatriculation: [''],
					montant: [''],
					frais: [''],
					charge: [''],
					total: [''],
					base: [''],
					honoraire: [''],
					recette: [''],
					provider: [''],
					tenantid: [''],
					tenant: [''],
					tenantid2: [''],
					tenant2: [''],
					ownerid: [''],
					owner: [''],
					status: [''],
					dateachat: [''],
					datecirculation: [''],
					debutassurance: [''],
					finassurance: [''],
					debutvisite: [''],
					finvisite: [''],
					debutpatente: [''],
					finpatente: [''],
					datestation: [''],
					event: [''],
					motif: [''],
					description: [''],
					agency: [''],
					agencyid: [''],
					username: [''],
					userid: [''],
					numcontrat: [''],
					etatcontrat: [''],
					datesignature: [''],
					image: [''],
					file: ['']
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
		
		var agency_html: any =document.getElementById("agency")  as HTMLElement;
		this.agency= agency_html.value;
		
		this.param1 = this.activatedRoute.snapshot.paramMap.get('param1');
		this.param2 = this.activatedRoute.snapshot.paramMap.get('param2');	
		
	
		this.param1=  this.params.get('param1');
		this.param2=  this.params.get('param2');
			
		this.onList();
		
  }
  handleInput(event:any) {
    const query = event.target.value.toLowerCase();
    //this.results = this.results.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }
 applyFilter() {
	  let filterValue = this.pageForm.get('word')?.value;
         if(filterValue === '' ) {
             this.results=this.alllist;
         }else{
			
           this.results = this.alllist.filter(results => results.immatriculation.toLowerCase().includes(filterValue.toLowerCase()));
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
		this.httpClient.get(this.REST_API_SERVER+"/cars", {headers: header})
			.subscribe(data => {
				console.log(data);
				this.results = data;
				this.alllist = data;
			}, error => {
				console.log(error);
		});
 }
 
 
  
 
onSelect(code:string,libelle:string)
  {
    this.modalCtrl.dismiss(code,libelle);

  }
 closemodal(code:string,libelle:string)
 {
    this.modalCtrl.dismiss(code,libelle);

 }
 
 
}
