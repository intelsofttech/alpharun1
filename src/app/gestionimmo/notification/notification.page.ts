import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
import { PartnermodalPage } from '../../partnermodal/partnermodal.page';
 
@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  
  
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
  searchValue :any= "0";
  id :any= "0";
  type = "";
  libcontact = "";
  title = "";
  partnerid = "";
  partner = "";
  contact = "";
  message = "";
  senddate = "";
  hour = "";
  status = "";
  categorie = "";
  parameter = "";
  agency = "0";
  
  word = "";
			
  liboperation :any= "AJOUT";
  public results :any = [];
  public alllist :any = [];
  public filtered :any = [];
  searchNotMatched = true;
 constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient) {
			  this.pageForm = this.formBuilder.group({
				 word: ['']
			  })
			  this.categForm = this.formBuilder.group({
				  type: [''],
				  title: [''],
				  partnerid: [''],
				  partner: [''],
				  contact: [''],
				  message: [''],
				  senddate: [''],
				  hour: [''],
				  status: [''],
				  categorie: [''],
				  parameter: ['']
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
		
		
		var now = new Date();
		const dateFormatter = Intl.DateTimeFormat('sv-SE');
		this.senddate = dateFormatter.format(now);
		this.libcontact="Téléphone";
		if(this.param1=="Mail"){
			this.libcontact="Les adresses email";
		}
		this.onList();	
		
  }
  handleInput(event:any) {
    const query = event.target.value.toLowerCase();
    //this.results = this.results.filter((d) => d.toLowerCase().indexOf(query) > -1);
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
	   this.type = "";
		this.title = "";
		this.partnerid = "";
		this.partner = "";
		this.contact = "";
		this.message = "";
		this.senddate = "";
		this.hour = "";
		this.status = "";
		this.categorie = "";
		this.parameter = "";
		
		var now = new Date();
		const dateFormatter = Intl.DateTimeFormat('sv-SE');
		this.senddate = dateFormatter.format(now);
		
	   this.liboperation = "AJOUT";
  } 
  onCancelNew(){
	   this.addForm = false;
  }
   applyFilter() {
	  let filterValue = this.pageForm.get('word')?.value;
         if(filterValue === '' ) {
             this.results=this.alllist;
         }else{
			
           this.results = this.alllist.filter(results => results.firstName.toLowerCase().includes(filterValue.toLowerCase()));
	}
   }
     
  async onSelectPartner(){
  
		const modal = await this.modalCtrl.create({
			  component: PartnermodalPage,
			  componentProps: {
				'param1': 'proprietaire',
				'param2': 'Propriétaires'
			  }
			});

			
			modal.onDidDismiss().then(data=>{
				console.log(data)
				this.partnerid= data['data'];
				this.partner= data['role'];
			})
			return await modal.present();
	}   
  onAdd(): any{
      this.isSend = false;
	  if (!this.categForm.valid) {
		
	  }else {
	    const type = this.categForm.get('type')?.value;
		const title = this.categForm.get('title')?.value;
		const partnerid = this.categForm.get('partnerid')?.value;
		const partner = this.categForm.get('partner')?.value;
		const contact = this.categForm.get('contact')?.value;
		const message = this.categForm.get('message')?.value;
		const senddate = this.categForm.get('senddate')?.value;
		const hour = this.categForm.get('hour')?.value;
		const status = this.categForm.get('status')?.value;
		const apikey = this.categForm.get('apikey')?.value;
		const categorie = this.categForm.get('categorie')?.value;
		const parameter = this.categForm.get('parameter')?.value;
				   
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
				type : this.param1,
				title : title,
				partnerid : partnerid,
				partner : partner,
				contact : contact,
				message : message,
				senddate : senddate,
				hour : hour,
				status : status,
				apikey : apikey,
				categorie : categorie,
				parameter : parameter
		    }
			console.log(postData);
			this.httpClient.post(this.REST_API_SERVER+"/notify", postData, {headers: header})
			.subscribe(data => {
					console.log(data);
					this.onList();
					if(type=="SMS"){
						this.onSendSms(contact, message);
					}
					
					this.addForm = false;
					this.isSend = false;
				}, error => {
					this.isSend = false;	
					console.log(error);
			});
	   }else{
			let postData = {
				type : type,
				title : title,
				partnerid : partnerid,
				partner : partner,
				contact : contact,
				message : message,
				senddate : senddate,
				hour : hour,
				status : "En attente",
				apikey : apikey,
				categorie : categorie,
				parameter : parameter
		    }
		   this.httpClient.put(this.REST_API_SERVER+"/notify/"+this.id, postData, {headers: header})
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
  
   onSendSms(phone:string, msg:string){
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
			msisdn: phone,
			msg: msg
	   }
	   console.log(postData);
		this.httpClient.post(this.REST_API_SERVER+"/sendsms", postData, {headers: header})
			.subscribe(data => {
				console.log(data);
			}, error => {
				console.log(error);
		});
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
      return result.showcases.filter(line => line.label === this.searchValue)
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
		this.httpClient.get(this.REST_API_SERVER+"/notify/type/"+this.param1, {headers: header})
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
		this.httpClient.delete(this.REST_API_SERVER+"/notify/"+id, {headers: header})
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
		this.httpClient.get(this.REST_API_SERVER+"/notify/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.addForm = true;
				this.liboperation = "MODIFICATION";
				this.id = data['id'];
				this.type = data['type'];
				this.title = data['title'];
				this.partnerid = data['partnerid'];
				this.partner = data['partner'];
				this.contact = data['contact'];
				this.message = data['message'];
				this.senddate = data['senddate'];
				this.hour = data['hour'];
				this.status = data['status'];
				this.categorie = data['categorie'];
				this.parameter = data['parameter'];
				
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
