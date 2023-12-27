import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
import { AddemploiPage } from '../addemploi/addemploi.page';

@Component({
  selector: 'app-editabsences',
  templateUrl: './editabsences.page.html',
  styleUrls: ['./editabsences.page.scss'],
})
export class EditabsencesPage implements OnInit {

  
  
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
  url = "";
  pageForm: FormGroup;
  categForm: FormGroup;
  
  
  date :any = "";
  date1 :any = "";
  date2 :any = "";
  heure :any = "0";
  classe :any = "0";
  daynumber :any = "";
  
  Total :any = "0";
  
  day1:any = false;
  day2:any = false;
  day3:any = false;
  day4:any = false;
  day5:any = false;
  day6:any = false;
  day0:any = false;
  
  gridmode :any = true;
  listmode :any = false;
  
  
  scheduleid="0";
  year :any= "";
  
  public horaires :any = [];
  public results :any = [];
  public parents :any = [];
  public alllist :any = [];
  public filtered :any = [];
  public niveaux :any = [];
  public classes :any = [];
 constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient) {
			 this.pageForm = this.formBuilder.group({
				 date1: [''],
				 date2: [''],
				 heure: [''],
				 classe: [''],
			  })
			}

  	 
  backcolor1 :any = "#194eda";
  backcolor2 :any = "#194eda";
  textcolor :any = "#ffffff";
  
  
  typeemlpoi :any = "0";
 
  param1 :any = "0";
  param2 :any = "0";
  param3 :any = "0";
  
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
	var year_html: any =document.getElementById("yearSco")  as HTMLElement;
	this.year= year_html.value;
		
	
	this.param1 = this.activatedRoute.snapshot.paramMap.get('param1');
	this.param2 = this.activatedRoute.snapshot.paramMap.get('param2');	
	this.param3 = this.activatedRoute.snapshot.paramMap.get('param3');	
	
	var now = new Date();
	const dateFormatter = Intl.DateTimeFormat('sv-SE');
	this.date = dateFormatter.format(now);
	this.date1 = dateFormatter.format(now);
	this.date2 = dateFormatter.format(now);
	
	var year_html: any =document.getElementById("yearSco")  as HTMLElement;
	this.year= year_html.value;
		
	this.onPeriode();
	this.onClasse();
	this.onRefresh();
	
  }
  
   onChangemode(sel:string){
	   if(sel=="list"){
		  this.listmode = true;
	      this.gridmode = false;
	   }else{
		if(sel=="grid"){
			this.listmode = false;
	        this.gridmode = true;
		}
	      
	   }
   }
   
   
   onRefresh(){
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
	   
      const date1 = this.pageForm.get('date1')?.value;
      const date2 = this.pageForm.get('date2')?.value;
      const classe = this.pageForm.get('classe')?.value;
      const heure = this.pageForm.get('heure')?.value;
	  if(date1!="" && date2!=""){
			if(this.param1=="0"){
			  if(heure=="0"){
				  if(classe=="0"){
						this.url = "/presents/category/student/"+date1+"/"+date2;
				  }else{
						this.url = "/presents/category/classid/student/"+classe+"/"+date1+"/"+date2;
				  }
			  }else{
					if(classe=="0"){
						this.url = "/presents/category/period/student/"+heure+"/"+date1+"/"+date2;
				  }else{
						this.url = "/presents/category/period/classid/student/"+heure+"/"+classe+"/"+date1+"/"+date2;
				  }
			  }
		  }else{
			this.url = "/presents/partner/"+this.param1+"/"+date1+"/"+date2;
		  }
		  this.httpClient.get(this.REST_API_SERVER+this.url, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.results = data;
				this.alllist = data;
				  
			}, error => {
				console.log(error);
			});
	  }
   }
  



 onPeriode(){
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
		
		this.httpClient.get(this.REST_API_SERVER+"/configs/compte/horaire/"+this.param2, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.horaires = data;
			}, error => {
				console.log(error);
		});
 }
    
 onClasse(){
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
	   this.httpClient.get(this.REST_API_SERVER+"/classlist/year/"+this.year, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.classes = data;
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
		this.httpClient.delete(this.REST_API_SERVER+"/present/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.onRefresh();
			}, error => {
				console.log(error);
		});
 }
 
}
