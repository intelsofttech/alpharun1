import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-frais',
  templateUrl: './frais.page.html',
  styleUrls: ['./frais.page.scss'],
})
export class FraisPage implements OnInit {

  
  
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
  yearSco = "";
  pageForm: FormGroup;
  categForm: FormGroup;
  
  addForm = false;
  isSend = false;
  listmode = false;
  gridmode = true;
  addbutton = false;
  param1 :any= "0";
  param2 :any= "0";
  param3 :any= "0";
  searchValue :any= "0";
  id :any= "0";
  libparent :any= "";
  compte :any= "0";
  label :any= "Note";
  amount :any= "";
  datepay1 :any= "";
  reduction :any= "Non";
  obligatory :any= "1";
  type :any= "1";
  value :any= "";
  filiere :any= "";
  level :any= "0";
  year :any= "";
  idfee :any= "";
  
  liboperation :any= "AJOUT";
  public results :any = [];
  public parents :any = [];
  public alllist :any = [];
  public filtered :any = [];
  public niveaux :any = [];
  public typesfrais :any = [];
 constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient) {
			 
			  this.pageForm = this.formBuilder.group({
				 filiere: [''],
				 level: ['']
			  })

			  this.categForm = this.formBuilder.group({
				   idfee: [''],
				   label: [''],
				   amount: [''],
				   datepay1: [''],
				   reduction: [''],
				   obligatory: ['']
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
		
		var yearSco_html: any =document.getElementById("yearSco")  as HTMLElement;
		this.yearSco= yearSco_html.value;
	
		var filiere_html: any =document.getElementById("filiere")  as HTMLElement;
		this.filiere= filiere_html.value;
		
		this.onListfliere();	
  }
  handleInput(event:any) {
    const query = event.target.value.toLowerCase();
    //this.results = this.results.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }
   
 
   
 
 onList(){
	this.addbutton=true;
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
	    this.httpClient.get(this.REST_API_SERVER+"/fee/level/"+this.level+"/"+this.yearSco, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.results = data;
			}, error => {
				console.log(error);
			});
	   
		
 } 
   
 onListLevel(){
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
	   this.httpClient.get(this.REST_API_SERVER+"/configs/compte/niveau/"+this.filiere, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.niveaux = data;
				this.onListfrais();
			}, error => {
				console.log(error);
			});
		
 } 


 onListfrais(){
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
	  
		this.httpClient.get(this.REST_API_SERVER+"/configs/compte/typefrais/"+this.filiere, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.typesfrais = data;
			}, error => {
				console.log(error);
			});
		
 } 
 
 
 
  onChange(){
	  console.log(this.compte)
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
	   this.addForm = true;
	   this.id = "0";
	   this.label = "";
	   this.liboperation = "AJOUT";
	   this.idfee = "";
	   this.label = "";
	   this.amount = "";
	   this.datepay1 = "";
	   this.reduction = "Non";
	   this.obligatory = "Non";
  } 
  onCancelNew(){
	   this.addForm = false;
  }
  onAdd(): any{
      this.isSend = false;
	  if (!this.categForm.valid) {
		
	  }else {
	  
	   const idfee = this.categForm.get('idfee')?.value;
	   const label = this.categForm.get('label')?.value;
	   const amount = this.categForm.get('amount')?.value;
	   const datepay1 = this.categForm.get('datepay1')?.value;
	   const reduction = this.categForm.get('reduction')?.value;
	   const obligatory = this.categForm.get('obligatory')?.value;
	   const type = this.categForm.get('type')?.value;
	   this.isSend = true;
	   
	   var header = {
		'Content-Type': 'application/json',
		'enctype': 'application/json',
		'Accept': '*',
		'Authorization': 'Bearer '+this.walletId,
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
		'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
	   };
	  
	   if(this.id=="0"){
	   
			let postData = {
				codefee: idfee,
				label: label,
				amount: amount,
				datepay1: datepay1,
				reduction: reduction,
				obligatory: obligatory,
				year: this.yearSco,
				level: this.level
		    }
			console.log(postData);
			this.httpClient.post(this.REST_API_SERVER+"/fee", postData, {headers: header})
			.subscribe(data => {
					console.log(data);
					this.onList();
					this.addForm = false;
					this.isSend = false;
				}, error => {
					this.isSend = false;	
					console.log(error);
			});
	   }else{
			let postData = {
				codefee: idfee,
				label: label,
				amount: amount,
				datepay1: datepay1,
				reduction: reduction,
				obligatory: obligatory
		    }
		   this.httpClient.put(this.REST_API_SERVER+"/fee/"+this.id, postData, {headers: header})
				.subscribe(data => {
					console.log(data);
					this.onList();
					this.addForm = false;
					this.isSend = false;
				}, error => {
					this.isSend = false;	
					console.log(error);
			});
	   }
		
	  }
 }
  
 
   
 onListfliere(){
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
	    
		this.httpClient.get(this.REST_API_SERVER+"/configs/filiere", {headers: header})
			.subscribe(data => {
				console.log(data);
				this.parents = data;
				var filiere_html: any =document.getElementById("filiere")  as HTMLElement;
				this.filiere= filiere_html.value;
				this.onListLevel();
			}, error => {
				console.log(error);
			});
		
 } 
 onParents(){
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
		this.httpClient.get(this.REST_API_SERVER+"/configs/compte/niveau/"+this.param2, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.parents = data;
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
		this.httpClient.delete(this.REST_API_SERVER+"/fee/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.onList();
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
		this.httpClient.get(this.REST_API_SERVER+"/fee/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.addForm = true;
				this.liboperation = "MODIFICATION";
				this.id = data['id'];
				this.label = data['label'];
				//this.onList();
			}, error => {
				console.log(error);
		});
 }
 
 onGetfee(){
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
	   this.idfee = this.categForm.get('idfee')?.value;
		
		this.httpClient.get(this.REST_API_SERVER+"/config/"+this.idfee, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.label = data['label'];
				this.amount = data['value'];
			
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
