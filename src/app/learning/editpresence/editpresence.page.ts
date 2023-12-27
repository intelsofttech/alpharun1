import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
import { ValidatepresencePage } from '../validatepresence/validatepresence.page';

@Component({
  selector: 'app-editpresence',
  templateUrl: './editpresence.page.html',
  styleUrls: ['./editpresence.page.scss'],
})
export class EditpresencePage implements OnInit {

  
  
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
  date :any = "";
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
  
  public horaires :any = [];
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
				 date: [''],
				 date2: ['']
			  })
			}

  	 
  backcolor1 :any = "#194eda";
  backcolor2 :any = "#194eda";
  textcolor :any = "#ffffff";
  
  
  date01 :any = "";
  date02 :any = "";
  date03 :any = "";
  date04 :any = "";
  date05 :any = "";
  date06 :any = "";
  date07 :any = "";
  typeemlpoi :any = "0";
  year :any = "0";
  param1 :any = "0";
  param2 :any = "0";
  param3 :any = "0";
  nb:number = 0;
  showmode :any = "grid";
  daydate :any = "";
  
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
	this.onNewpage();	
	
	this.param1 = this.activatedRoute.snapshot.paramMap.get('param1');
	this.param2 = this.activatedRoute.snapshot.paramMap.get('param2');	
	this.param3 = this.activatedRoute.snapshot.paramMap.get('param3');	
	var now = new Date();
	var nowday = new Date();
	const dateFormatter = Intl.DateTimeFormat('sv-SE');
	var daynumber = now.getDay();
	console.log(daynumber)
	this.nb = Number(daynumber) - 1;
	//this.nb = daynumber;
	now.setDate(now.getDate() - this.nb);
	this.date = dateFormatter.format(now);
	this.daydate = dateFormatter.format(nowday);
	  
	//this.onHoraireinit();
	this.onRefresh('none');
  }
   onDateset(date:any, id:any){
	const dateFormatter = Intl.DateTimeFormat('sv-SE');
	var now = new Date(date);
    if(id==0){
		now.setDate(now.getDate() + 0);
		this.date01 = dateFormatter.format(now);
	}
    if(id==1){
		now.setDate(now.getDate() + 1);
		this.date02 = dateFormatter.format(now);
	}
    if(id==2){
		now.setDate(now.getDate() + 2);
		this.date03 = dateFormatter.format(now);
	}
    if(id==3){
		now.setDate(now.getDate() + 3);
		this.date04 = dateFormatter.format(now);
	}
    if(id==4){
		now.setDate(now.getDate() + 4);
		this.date05 = dateFormatter.format(now);
	}
    if(id==5){
		now.setDate(now.getDate() + 5);
		this.date06 = dateFormatter.format(now);
	}
    if(id==6){
		now.setDate(now.getDate() + 6);
		this.date07 = dateFormatter.format(now);
	}
	
      
   }
   onHoraireinit(){
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
	   
	    this.httpClient.get(this.REST_API_SERVER+"/configs/compte/ensid/date/"+this.typeemlpoi+"/"+this.param1+"/horaire/"+this.param2+"/"+this.date, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.horaires = data['horaires'];
			}, error => {
				console.log(error);
			});
		
 } 
   onHoraire(date:any){
   
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
	   //const date = this.pageForm.get('date')?.value;
	    //configs/compte/classcode/"+this.typeemlpoi+"/"+this.param2+"/horaire/"+this.param2
		this.httpClient.get(this.REST_API_SERVER+"/configs/edit/ensid/date/"+this.typeemlpoi+"/"+this.param1+"/horaire/"+this.param2+"/"+date, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.horaires = data['horaires'];
			}, error => {
				console.log(error);
			});
		
 } 
 
   onNewpage(){
      var now = new Date();
	  const dateFormatter = Intl.DateTimeFormat('sv-SE');
	  this.date = dateFormatter.format(now);
	  var daynumber = now.getDay();
	  console.log(daynumber);
	  if(daynumber==0){
		this.day0=true;
	  }
	  if(daynumber==1){
		this.day1=true;
	  }
	  if(daynumber==2){
		this.day2=true;
	  }
	  if(daynumber==3){
		this.day3=true;
	  }
	  if(daynumber==4){
		this.day4=true;
	  }
	  if(daynumber==5){
		this.day5=true;
	  }
	  if(daynumber==6){
		this.day6=true;
	  }
	  this.daynumber=daynumber;
   } 
   
   onRefresh(mov:any){
      const dateFormatter = Intl.DateTimeFormat('sv-SE');
      const date01 = this.pageForm.get('date')?.value;
	  console.log(date01);
      
	  if(mov!='none'){
		  if(mov=='next'){
			var now = new Date(date01);
			var daynumber = now.getDay();
			now.setDate(now.getDate() + 7);
			this.date = dateFormatter.format(now);
		  }else{
			var now = new Date(date01);
			var daynumber = now.getDay();
			now.setDate(now.getDate() - 7);
			this.date = dateFormatter.format(now);
		  }
		}
		  
	  var now2 = new Date(this.date);
	  now2.setDate(now2.getDate() + 6);
	  this.date2 = dateFormatter.format(now2);
	  console.log(this.date2);
	  this.onHoraire(this.date);
	  
	  console.log(this.date);
	  this.onDateset(this.date, 0);  
	  this.onDateset(this.date, 1);  
	  this.onDateset(this.date, 2);  
	  this.onDateset(this.date, 3);  
	  this.onDateset(this.date, 4);  
	  this.onDateset(this.date, 5);  
	  this.onDateset(this.date, 6); 
	  
	  
	  
   }
   
   onRefresh2(){
      const date2 = this.pageForm.get('date2')?.value;
	  
      var now = new Date(date2);
	  
	  this.onDateset(now, 0);  
	  this.onDateset(now, 1);  
	  this.onDateset(now, 2);  
	  this.onDateset(now, 3);  
	  this.onDateset(now, 4);  
	  this.onDateset(now, 5);  
	  this.onDateset(now, 6); 
	
	  now.setDate(now.getDate() - 6);
	  const dateFormatter = Intl.DateTimeFormat('sv-SE');
	  this.date = dateFormatter.format(now);
	
   }
   
   onAddpresence(id:any){
		this.scheduleid = id;
		 this.httpClient.get(this.REST_API_SERVER+"/schedule/"+id)
			.subscribe(data => {
				console.log(data);
				const addDate = this.date;
				const day = this.daynumber;
				const period = data['period'];
				const materialid = data['materialid'];
				const material = data['materialname'];
				const classlist = data['classname'];
				const classlistcode = data['classid'];
				const value = "";
				const planingcode = id;
				const partner = data['teacherid'];
				const partnername = data['teachername'];
				const level = "";
				const usercode = "";
				const username = "";
				
				var header = {
					'Content-Type': 'application/json',
					'enctype': 'application/json',
					'Accept': '*',
					'Authorization': 'Bearer '+this.walletId,
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
					'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
				};
				  
				let postData = {
					title: "Title",
					addDate: addDate,
					day: day,
					period: period,
					materialid: materialid,
					material: material,
					classlist: classlist,
					classlistcode: classlistcode,
					value: value,
					planingcode: planingcode,
					partner: partner,
					partnername: partnername,
					level: level,
					usercode: usercode,
					username: username,
					category: 'enseignent'
				}
				this.httpClient.post(this.REST_API_SERVER+"/present", postData, {headers: header})
				.subscribe(data => {
						console.log(data);
					}, error => {	
						console.log(error);
				});
				}, error => {
					console.log(error);
				});
			
	  
		
 }
   onDeletepresence(id:any){

	   this.httpClient.delete(this.REST_API_SERVER+"/present/"+id)
			.subscribe(data => {
				this.onHoraire(this.date);
			}, error => {
				console.log(error);
			});
		
 } 
 async presentModal(id:any) {
  
	
			const modal = await this.modalCtrl.create({
			  component: ValidatepresencePage,
			  componentProps: {
				'date': this.date,
				'day': this.daynumber,
				'id': id
			  }
			});
			modal.onDidDismiss().then(data=>{
				console.log(data)
				this.onHoraire(this.date);
			})
			return await modal.present();
    
  }


}
