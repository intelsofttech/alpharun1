import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-selectlot',
  templateUrl: './selectlot.page.html',
  styleUrls: ['./selectlot.page.scss'],
})
export class SelectlotPage implements OnInit {

  
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
  onenum = true;
  showlot = false;
  typeterrain = false;
  showprice = false;
  readonly :any= "true";
  param1 :any= "0";
  param2 :any= "0";
  param3 :any= "0";
  param4 :any= "0";
  searchValue :any= "0";
  
  num1 = "N°";
  num2 = "";
  label = "";
  word = "";
  program = "";
  liboperation :any= "AJOUT";
  public programs :any = [];
  public results :any = [];
  public alllist :any = [];
  public results2 :any = [];
  public alllist2 :any = [];
  public filtered :any = [];
  public typesexploitation :any = [];
  public typeslogement :any = [];
  searchNotMatched = true;
 constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient) {
			  this.pageForm = this.formBuilder.group({
				 word: [''],
				 program: ['']
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
		
		this.onPrograms();
		this.onList();
 
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
 
 onSelectProgram(){
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
	    const program = this.pageForm.get('program')?.value;
		this.httpClient.get(this.REST_API_SERVER+"/subdivision/property/category/"+program+"/ilot", {headers: header})
		.subscribe(data => {
					console.log(data);
					this.results = data;
					this.alllist = data;
			}, error => {
					console.log(error);
		});
		
 }
 
 onListlots(id:any, label:any){
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
		this.label = label;
		this.showlot = true;
		
		this.httpClient.get(this.REST_API_SERVER+"/subdivision/parent/"+id, {headers: header})
		.subscribe(data => {
					console.log(data);
					this.results2 = data;
					this.alllist2 = data;
			}, error => {
					console.log(error);
		});
		
 }
 
 onChange(){
	this.showlot = false;
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
		
		this.httpClient.get(this.REST_API_SERVER+"/subdivision/parent/status/"+this.param2+"/Libre", {headers: header})
		.subscribe(data => {
					console.log(data);
					this.results = data;
					this.alllist = data;
			}, error => {
					console.log(error);
		});
		
 }
 

onPrograms(){
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
		this.httpClient.get(this.REST_API_SERVER+"/property/category/promotion", {headers: header})
			.subscribe(data => {
				console.log(data);
				this.programs = data;
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
