import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { PopoverController, ToastController ,ActionSheetController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-planningpayment',
  templateUrl: './planningpayment.page.html',
  styleUrls: ['./planningpayment.page.scss'],
})
export class PlanningpaymentPage implements OnInit {

  
  
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
				
  _image :any = ""
  label :any = ""
  method :any = ""
  amount :any = ""
  phone :any = ""
  reference :any = ""
  addDate :any = ""
  establishment :any = ""
  name :any = ""
  identitycard :any = ""
  typebill :any = ""
  status :any = ""
  cashdesk :any = ""
  
  				
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
		this.id = this.activatedRoute.snapshot.paramMap.get('param1');
		this.idbill = this.activatedRoute.snapshot.paramMap.get('param2');
		this.code = this.activatedRoute.snapshot.paramMap.get('param3');
		this.sel = this.activatedRoute.snapshot.paramMap.get('param4');
	
	    this.onList(this.code);
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

}
