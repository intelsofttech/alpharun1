import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editabsenceseleve',
  templateUrl: './editabsenceseleve.page.html',
  styleUrls: ['./editabsenceseleve.page.scss'],
})
export class EditabsenceselevePage implements OnInit {


  
  
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
  niveau = "0";
  classe = "0";
  year = "0";
  
  listmode = false;
  gridmode = true;
  
  public results :any = [];
  public alllist :any = [];
  
  pageForm: FormGroup;
  categForm: FormGroup;
  
  classes : any = [];
  constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient) {
			 this.pageForm = this.formBuilder.group({
				 niveau: [''],
				 classe: ['']
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
		
		this.onClasse();
		this.onList();
	
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
	   const classe = this.pageForm.get('classe')?.value;
	  
	   let postData = {
			
	   }
	     
		   if(classe=="0" || classe==""){
				this.httpClient.get(this.REST_API_SERVER+"/users/usergroup/student", {headers: header})
				.subscribe(data => {
					this.results = data;
					this.alllist = data;
					console.log(data);
				}, error => {
					console.log(error);
				});
			}else{
				this.httpClient.get(this.REST_API_SERVER+"/users/group3/student/"+classe, {headers: header})
				.subscribe(data => {
					this.results = data;
					this.alllist = data;
					console.log(data);
				}, error => {
					console.log(error);
				});

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
  
  
 onRefresh(){
 
 }
 
 
}
