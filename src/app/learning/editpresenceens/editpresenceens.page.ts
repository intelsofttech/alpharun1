import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
import { ValidatepresencePage } from '../validatepresence/validatepresence.page';

@Component({
  selector: 'app-editpresenceens',
  templateUrl: './editpresenceens.page.html',
  styleUrls: ['./editpresenceens.page.scss'],
})
export class EditpresenceensPage implements OnInit {

  
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
  date1 :any = "";
  date2 :any = "";
  daynumber :any = "";
  
  day1:any = false;
  day2:any = false;
  day3:any = false;
  day4:any = false;
  day5:any = false;
  day6:any = false;
  day0:any = false;
  scheduleid="0";
  Total:any=0;
  
  
  gridmode :any = true;
  listmode :any = false;
  
  public horaires :any = [];
  public results :any = [];
  public alllist :any = [];
  public parents :any = [];
  public filtered :any = [];
  public niveaux :any = [];
 constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient) {
			  this.pageForm = this.formBuilder.group({
				 date1: [''],
				 date2: [''],
				 text: ['']
			  })
			}

  	 
  backcolor1 :any = "#194eda";
  backcolor2 :any = "#194eda";
  textcolor :any = "#ffffff";
  
  
  typeemlpoi :any = "0";
  year :any = "0";
  param1 :any = "0";
  param2 :any = "0";
  param3 :any = "0";
  
  text :any = "";
  
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
		var now = new Date();
		const dateFormatter = Intl.DateTimeFormat('sv-SE');
		this.date1 = dateFormatter.format(now);
		this.date2 = dateFormatter.format(now);
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
	    const date1 = this.pageForm.get('date1')?.value;
	    const date2 = this.pageForm.get('date2')?.value;
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
	   if(this.param1=='0'){
			this.httpClient.get(this.REST_API_SERVER+"/presents/category/enseignent/"+date1+"/"+date2, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.results = data;
				this.Total = 0;
				this.results.forEach((line, index) => {
					this.Total = Number(this.Total) + Number(line.value);
				});
			}, error => {
				console.log(error);
			});
	   }else{
			this.httpClient.get(this.REST_API_SERVER+"/presents/partner/"+this.param1+"/"+date1+"/"+date2, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.results = data;
				this.Total = 0;
				this.results.forEach((line, index) => {
					this.Total = Number(this.Total) + Number(line.value);
				});
			}, error => {
				console.log(error);
			});
	   }
	   
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
  onSearch(){
  
  }
  
  
}
