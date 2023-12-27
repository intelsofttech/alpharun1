import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filierenote',
  templateUrl: './filierenote.page.html',
  styleUrls: ['./filierenote.page.scss'],
})
export class FilierenotePage implements OnInit {

  
  
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
  
  addForm = false;
  isSend = false;
  listmode = false;
  gridmode = true;
  param1 :any= "0";
  param2 :any= "0";
  param3 :any= "0";
  searchValue :any= "0";
  id :any= "0";
  libparent :any= "";
  compte :any= "0";
  label :any= "Note";
  onvalue :any= "20";
  require :any= "10";
  coef :any= "1";
  type :any= "1";
  filiere :any= "";
  level :any= "0";
  year :any= "";
  
  liboperation :any= "AJOUT";
  public results :any = [];
  public parents :any = [];
  public alllist :any = [];
  public filtered :any = [];
  public niveaux :any = [];
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
				   label: [''],
				   onvalue: [''],
				   require: [''],
				   coef: [''],
				   type: ['']
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
		
		var filiere_html: any =document.getElementById("filiere")  as HTMLElement;
		this.filiere= filiere_html.value;
	
		this.onListfliere();	
  }
  handleInput(event:any) {
    const query = event.target.value.toLowerCase();
    //this.results = this.results.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }
   
 
   
 onList(filiere:string){
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
	   this.httpClient.get(this.REST_API_SERVER+"/gradeconfig/filiere/"+filiere, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.results = data;
				this.onListLevel();
			}, error => {
				console.log(error);
			});
		
 } 
 onListbylevel(){
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
	   if(this.level=="0"){
		   this.httpClient.get(this.REST_API_SERVER+"/gradeconfig/filiere/"+this.filiere, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.results = data;
				//this.onListLevel();
			}, error => {
				console.log(error);
			});
	   }else{
			
		   this.httpClient.get(this.REST_API_SERVER+"/gradeconfig/level/"+this.level, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.results = data;
				//this.onListLevel();
			}, error => {
				console.log(error);
			});
	   }
	   
		
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
	   this.label = "Note";
	   this.onvalue = "20";
	   this.require = "10";
	   this.coef = "1";
	   this.type = "1";
  } 
  onCancelNew(){
	   this.addForm = false;
  }
  onAdd(): any{
      this.isSend = false;
	  if (!this.categForm.valid) {
		
	  }else {
	  
	   const label = this.categForm.get('label')?.value;
	   const onvalue = this.categForm.get('onvalue')?.value;
	   const require = this.categForm.get('require')?.value;
	   const coef = this.categForm.get('coef')?.value;
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
	   if(this.level!="0"){
			this.filiere="0";
	   }
	   if(this.id=="0"){
	   
			let postData = {
				label: label,
				onvalue: onvalue,
				require: require,
				coef: coef,
				type: type,
				level: this.level,
				filiere: this.filiere
		    }
			console.log(postData);
			this.httpClient.post(this.REST_API_SERVER+"/gradeconfig", postData, {headers: header})
			.subscribe(data => {
					console.log(data);
					this.onListbylevel();
					this.addForm = false;
					this.isSend = false;
				}, error => {
					this.isSend = false;	
					console.log(error);
			});
	   }else{
			let postData = {
				label: label,
				onvalue: onvalue,
				require: require,
				coef: coef,
				type: type
		    }
		   this.httpClient.put(this.REST_API_SERVER+"/gradeconfig/"+this.id, postData, {headers: header})
				.subscribe(data => {
					console.log(data);
					this.onListbylevel();
					this.addForm = false;
					this.isSend = false;
				}, error => {
					this.isSend = false;	
					console.log(error);
			});
	   }
		
	  }
 }
  
 
   
 onChangefiliere(){
	const filiere = this.pageForm.get('filiere')?.value;
	this.onList(filiere);
	
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
				this.onList(this.filiere);
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
		this.httpClient.delete(this.REST_API_SERVER+"/gradeconfig/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.onList(this.filiere);
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
		this.httpClient.get(this.REST_API_SERVER+"/gradeconfig/"+id, {headers: header})
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
 

  onselect(code:string,libelle:string)
  {
    this.modalCtrl.dismiss(code,libelle);

  }
 closemodal(code:string,libelle:string)
 {
    this.modalCtrl.dismiss(code,libelle);

 }
}