import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
import { UploadFileService } from '../../services/upload-file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { v4 as uuidv4 } from 'uuid';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
function convertFileToBase64String(file: File) {
  // skip...
}

@Component({
  selector: 'app-contentdetail',
  templateUrl: './contentdetail.page.html',
  styleUrls: ['./contentdetail.page.scss'],
})
export class ContentdetailPage implements OnInit {

  safePdfBase64String: SafeResourceUrl;
  
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
  param3 :any= "0";
  param4 :any= "0";
  searchValue :any= "0";
  id :any= "0";
  parent :any= "";
  label :any= "";
  description :any= "";
  resume :any= "";
  image :any= "";
  iframe :any= "";
  url :any= "";
  type :any= "";
  status :any= "";
  filename :any= "";
  filedata :any= "";
  
 constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient,
			  private domSanit: DomSanitizer) {
			  this.safeUrl = this.getSafeUrl() ;
			}

  		 
  backcolor1 :any = "#194eda";
  backcolor2 :any = "#194eda";
  textcolor :any = "#ffffff";
  
  
  imgbaseUrl :any = "";
  fileurl:any="";
  
  filepath :any = "";
  safeUrl:any="";
  showmode :any = "grid";
  file:any;
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
	
	
	this.onGet(this.param1);	
    //this.safeUrl = this.getSafeUrl() ;
  }
  
  getSafeUrl(){
    return this.domSanit.bypassSecurityTrustResourceUrl(this.filepath) ;
  }

 
  ionViewWillEnter(){
    this.safeUrl = this.getSafeUrl() ;
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
		this.httpClient.get(this.REST_API_SERVER+"/content/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.id = data['id'];
				this.label = data['label'];
				this.parent = data['parent'];
				this.description = data['description'];
				this.resume = data['resume'];
			    this.image = data['image'];
			    this.iframe = data['iframe'];
			    this.url = data['url'];
			    this.type = data['type'];
			    this.status = data['status'];
			    this.filename = data['filename'];
				this.filepath = this.imgbaseUrl+"/uploads/"+this.filename;
				this.safeUrl = this.getSafeUrl() ;
				//this.file = new File([this.filepath], data['filename'], {type:"application/pdf"});
				//console.log(this.file);
				//this.file.arrayBuffer().then((arrayBuffer) => {
				//	const blob = new Blob([new Uint8Array(arrayBuffer)], {type: this.file.type });
				//	console.log(blob);
				//	this.filedata=blob;
				//});
				//this.filedata = fetch(this.filepath).then(r => r.blob());
				
			}, error => {
				console.log(error);
		});
 }
 
}
