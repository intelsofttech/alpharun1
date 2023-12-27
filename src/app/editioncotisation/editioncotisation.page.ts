import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
import { UploadFileService } from '../services/upload-file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { NewcotisationPage } from '../newcotisation/newcotisation.page';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-editioncotisation',
  templateUrl: './editioncotisation.page.html',
  styleUrls: ['./editioncotisation.page.scss'],
})
export class EditioncotisationPage implements OnInit {

  
  
  header = {
	//'Content-Type': 'application/json',
	'enctype': 'application/json',
	'Accept': '*',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
	'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
  };

  photo:any="../assets/images/default-img.jpg";
  
  imageurl:any = "../assets/images/default-img.jpg";
  imgbaseUrldefault:any = "../assets/images/default-img.jpg";

  
  REST_API_SERVER="";
  walletId = "";
  pageForm: FormGroup;
  categForm: FormGroup;
  
  group :any= "0";
  usergroup :any= "";
  imgbaseUrl :any= "";
  
  amount :any= "";
  
  
  amountTotal :number= 0;
  payamountTotal :number= 0;
  stayamountTotal :number= 0;
  
  word :any= "";
  param1 :any= "0";
  param2 :any= "0";
  param3 :any= "0";
  param4 :any= "0";
  
  public results :any = [];
  public alllist :any = [];
  public filtered :any = [];
  public department :any = [];
  public imagedata :any = "assets/images/default-img.jpg";
  searchNotMatched = true;
 constructor(public uploadService: UploadFileService,
			  public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  public activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient) {
			  this.pageForm = this.formBuilder.group({
				 word: ['']
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
	
	var imgbaseUrl_html: any =document.getElementById("baseUrl")  as HTMLElement;
	this.imgbaseUrl= imgbaseUrl_html.value;
	
	this.param1 = this.activatedRoute.snapshot.paramMap.get('param1');
	this.param2 = this.activatedRoute.snapshot.paramMap.get('param2');
	this.param3 = this.activatedRoute.snapshot.paramMap.get('param3');
	this.param4 = this.activatedRoute.snapshot.paramMap.get('param4');
	this.amount = this.activatedRoute.snapshot.paramMap.get('param5');
	
	
	this.usergroup=this.param1;
	this.group=this.param2;
	this.onList();	
	
  }
     applyFilter() {
	     let filterValue = this.pageForm.get('word')?.value;
		 
         let filterValueLower = filterValue.toLowerCase();
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
		
		this.httpClient.get(this.REST_API_SERVER+"/users/usergroup/collect/"+this.usergroup+"/"+this.param4, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.results = data;
				this.alllist = data;
				this.amountTotal=0;
				this.payamountTotal = 0;
				this.stayamountTotal = 0;
  
				this.results.forEach((line, index) => {
					this.amountTotal = Number(this.amountTotal) + Number(this.amount);
					this.payamountTotal = Number(this.payamountTotal) + Number(line.accountAmount);
					this.stayamountTotal = Number(this.stayamountTotal) + (Number(this.amount)-Number(line.accountAmount));
					if(!line.firstName) {
						this.results.splice(index, 1);
					}
				});
							
			}, error => {
				console.log(error);
		});
 }
 
  async operationModal(id:number, code:string) {
	
	const modal = await this.modalCtrl.create({
			  component: NewcotisationPage,
			  componentProps: {
				'param1': id, 
				'param2': "1",
				'param3': code
			  }
			});

			
			modal.onDidDismiss().then(data=>{
				console.log(data)
				this.onList();	
			})
			return await modal.present();
  }
  
  
  
  
}
