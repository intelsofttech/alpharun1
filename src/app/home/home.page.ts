import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { PopoverController, ToastController ,ActionSheetController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
import { BackButtonEvent } from '@ionic/core';
import { App } from '@capacitor/app';
import { StatusBar, Style } from '@capacitor/status-bar';
import { v4 as uuidv4 } from 'uuid';
import { UploadFileService } from '../services/upload-file.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  
  
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
  word = "";
  pageForm: FormGroup;
  categForm: FormGroup;
  
  routerEl = document.querySelector('ion-router');
  
  
 constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient) {
			  this.pageForm = this.formBuilder.group({
				 word: ['']
			  })
			}

  		 
  backcolor1 :any = "#194eda";
  backcolor2 :any = "#194eda";
  textcolor :any = "#ffffff";
  
  
  simpleform :any = false;
  accountbtn :any = false;
  
  
  imgbaseUrl = "";
  
  public results :any = [];
  public alllist :any = [];
  
  
  cashdesk :any = "grid";
  
  showmode :any = "grid";
  
  ngOnInit() {
	
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
	
	
	var imgbaseUrl_html: any =document.getElementById("baseUrl")  as HTMLElement;
	this.imgbaseUrl= imgbaseUrl_html.value;
	
	StatusBar.setOverlaysWebView({ overlay: true });
	
	document.addEventListener('ionBackButton', (ev: BackButtonEvent) => {
		//alert("01")
		  ev.detail.register(-1, () => {
			//alert(window.location.pathname)
			const path = window.location.pathname;
			if(path=="/home"){
				//alert("03")
				App.exitApp();
			}
			if (path === this.routerEl.root) {
				//alert("04")
				App.exitApp();
			}
		  });
		});
		
	console.log("User");
	console.log(this.walletId);
	if(this.walletId != ""){
		this.accountbtn=true;
	}
	this.onList();
  }

   
close(){
	App.exitApp();
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
		this.httpClient.get(this.REST_API_SERVER+"/events/all/event", {headers: header})
			.subscribe(data => {
				console.log(data);
				this.results = data;
				this.alllist = data;
			}, error => {
				console.log(error);
		});
 }
  
   
   applyFilter() {
	 
   }
   
   
}