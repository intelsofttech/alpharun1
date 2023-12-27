import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-saisieabsenceseleves',
  templateUrl: './saisieabsenceseleves.page.html',
  styleUrls: ['./saisieabsenceseleves.page.scss'],
})
export class SaisieabsenceselevesPage implements OnInit {

  
  
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
  date = "";
  pageForm: FormGroup;
  categForm: FormGroup;
  
  public list :any = [];
  public results :any = [];
  public alllist :any = [];
  
 constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient) {
			 this.pageForm = this.formBuilder.group({
				 date: ['']
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
  param4 :any = "0";
  param5 :any = "0";
  param6 :any = "0";
  param7 :any = "0";
  param8 :any = "0";
  param9 :any = "0";
  addDate :any = "";
  day :any = "";
  id :any = "0";
  heure :any = "";
  periodlabel :any = "";
  period :any = "";
  materialid :any = "";
  material :any = "";
  classlist :any = "";
  classlistcode :any = "";
  value :any = "";
  planingcode :any = "";
  partner :any = "";
  partnername :any = "";
  level = "";
  usercode = "";
  username = "";
  studentid = "";
  student = "";
  nbr :any = 0;
  
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
	this.param4 = this.activatedRoute.snapshot.paramMap.get('param4');
	this.param5 = this.activatedRoute.snapshot.paramMap.get('param5');	
	this.param6 = this.activatedRoute.snapshot.paramMap.get('param6');	
	this.param7 = this.activatedRoute.snapshot.paramMap.get('param7');	
	this.param8 = this.activatedRoute.snapshot.paramMap.get('param8');	
	this.param9 = this.activatedRoute.snapshot.paramMap.get('param9');	
	
	
	var now = new Date();
	const dateFormatter = Intl.DateTimeFormat('sv-SE');
	this.date = this.param8;
	this.onFoundschedule(this.param9);
	this.onList();
	
  }


  
 Change(id:string, name:string){
	console.log(name);
	this.onVerify(id, name);
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
		
		//this.httpClient.get(this.REST_API_SERVER+"/users/group3/student/"+this.param6, {headers: header})
		console.log(this.REST_API_SERVER+"/users/group3/absence/student/"+this.param6+"/"+this.param1+"/"+this.date);
		this.httpClient.get(this.REST_API_SERVER+"/users/group3/absence/student/"+this.param6+"/"+this.param1+"/"+this.date, {headers: header})
		.subscribe(data => {
			console.log(data);
			this.results = data;
			this.alllist = data;
		}, error => {
				console.log(error);
		});
			
 }
 
  onFoundschedule(id:any){
		
		 this.httpClient.get(this.REST_API_SERVER+"/schedule/"+id)
			.subscribe(data => {
				  console.log(data);
				  this.period = data['period'];
				  this.periodlabel = data['periodlabel'];
				  this.heure = data['periodlabel'];
				  this.materialid = data['materialid'];
				  this.material = data['materialname'];
				  this.classlist = data['classname'];
				  this.classlistcode = data['classid'];
				  this.value = "";
				  this.planingcode = id;
				  //this.partner = data['teacherid'];
				  //this.partnername = data['teachername'];
				  this.level = "";
		
				}, error => {
					console.log(error);
				});
	}


 onVerify(id:string, name:string){
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
		
		this.partner = id;
		this.partnername = name;
		console.log(this.REST_API_SERVER+"/presents/period/partner/date/"+this.param1+"/"+id+"/"+this.date);		  
		this.httpClient.get(this.REST_API_SERVER+"/presents/period/partner/date/"+this.param1+"/"+id+"/"+this.date, {headers: header})
		.subscribe(data => {
			console.log(data);
			this.list = data ;
			this.nbr = 0 ;
			this.list.forEach((line, index) => {
				this.nbr = 1 ;
				this.id = line.id ;
				console.log(this.id);
				this.onDelete(this.id) ;
			});	
			if(this.nbr==0) {
				this.onAddpresence() ;
			}else{
				
			}
			console.log(this.nbr);
		}, error => {
				console.log(error);
		});
			

			   
		
 }
 
 	
  onDelete(id:string){
				 
				this.httpClient.delete(this.REST_API_SERVER+"/present/"+id)
				.subscribe(data => {
						console.log(data);
					}, error => {	
						console.log(error);
				});
	
	}
 	
  onAddpresence(){
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
					addDate: this.date,
					day: this.day,
					period: this.period,
					periodlabel: this.periodlabel,
					materialid: this.materialid,
					material: this.material,
					classlist: this.classlist,
					classlistcode: this.classlistcode,
					value: this.value,
					parameter: this.heure,
					planingcode: this.planingcode,
					partner: this.partner,
					partnername: this.partnername,
					level: this.level,
					usercode: this.usercode,
					username: this.username,
					category: 'student'
				}
				this.httpClient.post(this.REST_API_SERVER+"/present", postData, {headers: header})
				.subscribe(data => {
						console.log(data);
					}, error => {	
						console.log(error);
				});
	
	}


 
}
