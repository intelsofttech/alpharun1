import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';



@Component({
  selector: 'app-partner',
  templateUrl: './partner.page.html',
  styleUrls: ['./partner.page.scss'],
})
export class PartnerPage implements OnInit {

  
  
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
  param1 :any= "0";
  param2 :any= "0";
  searchValue :any= "0";
  id :any= "0";
  firstName :any= "";
  lastName :any= "";
  phone :any= "";
  email :any= "";
  address :any= "";
  city :any= "";
  locateurl :any= "";
  description :any= "";
  Uuid :any ="";
  partnercId :any ="";
  usergroup :any= "client";
  liboperation :any= "ENREGISTREMENT";
  
  word = "";
  billparam1 = "";
  billparam2 = "";
  billparam3 = "";
  billparam4 = "";
	
  public results :any = [];
  public alllist :any = [];
  public filtered :any = [];
  searchNotMatched = true;
  
 constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  public navController: NavController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient) {
			  this.pageForm = this.formBuilder.group({
				 word: ['']
			  })
			  this.categForm = this.formBuilder.group({
				   firstName: ['', [Validators.required, Validators.minLength(2)]],
				   lastName: [''],
				   phone: [''],
				   email: [''],
				   address: [''],
				   city: [''],
				   locateurl: [''],
				   description: ['']
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
	
	this.param1 = this.activatedRoute.snapshot.paramMap.get('param1');
	this.param2 = this.activatedRoute.snapshot.paramMap.get('param2');
	this.usergroup=this.param1;
	this.onList();	
  }
  close() {
    this.navController.back();
  }
  handleInput(event:any) {
    const query = event.target.value.toLowerCase();
    //this.results = this.results.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }
  listmode = false;
  gridmode = true;
  onChangemode(sel:any){
	   if(sel=="list"){
		  this.listmode = true;
	      this.gridmode = false;
	   }else{
	      this.listmode = false;
	      this.gridmode = true;
	   }
  } 


  result: any =[];
  public actionSheetButtons = [
    {
      text: 'Recettes et ventes',
      data: {
        action: 'recette',
      },
    },
    {
      text: 'Dévis',
      data: {
        action: 'devis',
      },
    },
    {
      text: 'Proformas',
      data: {
        action: 'proforma',
      },
    },
    {
      text: 'Charges et commandes',
      data: {
        action: 'charge',
      },
    },
    {
      text: 'Bons de commande',
      data: {
        action: 'bon',
      },
    },
    {
      text: 'Annuler',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];
  
  
   async setResult(ev) {
    console.log(ev.detail)
    this.result = ev.detail;
	
	
	if(this.result['data']['action']=="recette"){
	  this.billparam1 = "1";
	  this.billparam2 = "COUNTED";
	  this.billparam3 = "0";
	  this.billparam4 = "Recettes et Ventes";
	  this.navController.navigateRoot('/partnerbill/'+this.billparam1+'/'+this.billparam2+'/'+this.billparam3+'/'+this.billparam4+'/'+this.partnercId);
	}
	if(this.result['data']['action']=="devis"){
	  this.billparam1 = "1";
	  this.billparam2 = "DEVIS";
	  this.billparam3 = "3";
	  this.billparam4 = "Dévis";
	  this.navController.navigateRoot('/partnerbill/'+this.billparam1+'/'+this.billparam2+'/'+this.billparam3+'/'+this.billparam4+'/'+this.partnercId);
		
	}
	if(this.result['data']['action']=="proforma"){
	  this.billparam1 = "1";
	  this.billparam2 = "PROFORMA";
	  this.billparam3 = "4";
	  this.billparam4 = "Proformas";
	  this.navController.navigateRoot('/partnerbill/'+this.billparam1+'/'+this.billparam2+'/'+this.billparam3+'/'+this.billparam4+'/'+this.partnercId);
		
	}
	if(this.result['data']['action']=="charge"){
	  this.billparam1 = "2";
	  this.billparam2 = "COUNTED";
	  this.billparam3 = "2";
	  this.billparam4 = "Charges et commandes";
	  this.navController.navigateRoot('/partnerbill/'+this.billparam1+'/'+this.billparam2+'/'+this.billparam3+'/'+this.billparam4+'/'+this.partnercId);
		
	}
	if(this.result['data']['action']=="bon"){
	  this.billparam1 = "2";
	  this.billparam2 = "BON-COMMANDE";
	  this.billparam3 = "3";
	  this.billparam4 = "Bons de commandes";
	  this.navController.navigateRoot('/partnerbill/'+this.billparam1+'/'+this.billparam2+'/'+this.billparam3+'/'+this.billparam4+'/'+this.partnercId);
		
	}
  }



  
  onPartnerselected(sel:any){
      var partnerclick_html: any =document.getElementById("open-action-sheet")  as HTMLElement;
	  partnerclick_html.click(); 
	  this.partnercId= sel; 
  }

  
  onNew(){
       this.Uuid =uuidv4();
	   this.addForm = true;
	   this.id = "0";
	   this.liboperation = "AJOUT";
  } 
  onCancelNew(){
	   this.addForm = false;
  }
  onAdd(): any{
      this.isSend = false;
	  if (!this.categForm.valid) {
		
	  }else {
	   let firstName = this.categForm.get('firstName')?.value;
	   let lastName = this.categForm.get('lastName')?.value;
	   let phone = this.categForm.get('phone')?.value;
	   let email = this.categForm.get('email')?.value;
	   let address = this.categForm.get('address')?.value;
	   let city = this.categForm.get('city')?.value;
	   let locateurl = this.categForm.get('locateurl')?.value;
	   let description = this.categForm.get('description')?.value;
	   if(lastName==null || lastName==''){
		  lastName="";
	   }
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
				firstName: firstName,
				lastName: lastName,
				mobile: phone,
			    emailaddress: email,
				address: address,
				city: city,
				locateurl: locateurl,
				description: description,
				userName: this.Uuid,
				password: "0101",
				usergroup: this.usergroup
		    }
			
			this.httpClient.post(this.REST_API_SERVER+"/newuser", postData, {headers: header})
			.subscribe(data => {
					console.log(data);
					this.onList();
					this.addForm = false;
					this.isSend = false;
				    this.firstName = "";
				    this.lastName = "";
				    this.phone = "";
				    this.email = "";
				    this.address = "";
				    this.city = "";
				    this.locateurl = "";
				    this.description = "";
  
				}, error => {
					this.isSend = false;	
					console.log(error);
			});
	   }else{
			let postData = {
				firstName: firstName,
				lastName: lastName,
				mobile: phone,
			    emailaddress: email,
				address: address,
				city: city,
				locateurl: locateurl
		    }
		   this.httpClient.put(this.REST_API_SERVER+"/updateuser/"+this.id, postData, {headers: header})
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
  
  public searchArea(text: string) {
  
    this.searchValue = text;
    if (this.searchValue === '') {
      this.filtered = this.results;
      return;
    }

    this.setFilteredList();

    if (this.filtered.length === 0) {
      this.searchNotMatched = true;
      return;
    }
    this.searchNotMatched = false;

  }

  private setFilteredList(): void {
    this.filtered = this.results.map(result => {
      return result.showcases.filter(line => line.firstName === this.searchValue)
    });
  }
  
    applyFilter() {
	  let filterValue = this.pageForm.get('word')?.value;
         if(filterValue === '' ) {
             this.results=this.alllist;
         }else{
			
           this.results = this.alllist.filter(results => results.firstName.toLowerCase().includes(filterValue.toLowerCase()));
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
		this.httpClient.get(this.REST_API_SERVER+"/users/usergroup/"+this.usergroup, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.results = data;
				this.alllist = data;
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
		this.httpClient.delete(this.REST_API_SERVER+"/users/"+id, {headers: header})
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
		this.httpClient.get(this.REST_API_SERVER+"/users/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.addForm = true;
				this.liboperation = "MODIFICATION";
				this.id = data['id'];
				this.firstName = data['firstName'];
				this.lastName = data['lastName'];
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
 

  onselect(code:string,libelle:string)
  {
    this.modalCtrl.dismiss(code,libelle);

  }
 closemodal(code:string,libelle:string)
 {
    this.modalCtrl.dismiss(code,libelle);

 }

}
