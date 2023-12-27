import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { PopoverController, ToastController ,ActionSheetController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from '../services/photo.service';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage implements OnInit {
header = {
	//'Content-Type': 'application/json',
	'enctype': 'application/json',
	'Accept': '*',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
	'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
  };
	
  photo:any="../assets/images/default-img.jpg";
  
  image1:any = "../assets/images/default-img.jpg";
  
  REST_API_SERVER="";
  walletId = "";
  imgbaseUrl = "";
  id = "";
  firstName = "";
  lastName = "";
  image:any = "";
  imageurl:any = "../assets/images/default-img.jpg";
  imgselected = "";
  phone = "";
  city = "";
  country = "";
  other = "";
  numb = "";
  code = "";
  countrylabel = "";
  address = "";
  email = "";
  locateurl = "";
  locate = "";
  description = "";
  isEdit = false;
  isSend = false;
  infoForm: FormGroup;
  constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient,
			  public photoService: PhotoService) {
				this.infoForm = this.formBuilder.group({
				   firstName: ['', [Validators.required]],
				   lastName: [''],
				   image: [''],
				   numb: [''],
				   code: [''],
				   phone: [''],
				   city: [''],
				   country: [''],
				   countrylabel: [''],
				   address: [''],
				   email: [''],
				   locate: [''],
				   locateurl: [''],
				   other: [''],
				   description: ['']
			    })
			 }

  backcolor1 :any = "#194eda";
  backcolor2 :any = "#194eda";
  textcolor :any = "#ffffff";
  simpleform :any = false;
  
  
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
	this.onGetInfo()
	
  }

 onSelectImage(sel:any){
	var img_html: any =document.getElementById("open-action-sheet")  as HTMLElement;
	img_html.click();
	console.log(sel)
	this.imgselected=sel;
 }
 result: any =[];
  public actionSheetButtons = [
    {
      text: 'La caméra',
      data: {
        action: 'camera',
      },
    },
    {
      text: 'La librairie',
      data: {
        action: 'librairie',
      },
    },
    {
      text: 'Annuler',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];
  
  
  setResult(ev) {
    console.log(ev.detail)
    this.result = ev.detail;
	if(this.result['data']['action']=="camera"){
		this.addPhotoToCamera();
	}
	if(this.result['data']['action']=="librairie"){
		this.addPhotoToGallery();
	}
  }


  
  async addPhotoToGallery() {
    //var data = this.photoService.addNewToGallery();
	const capturedPhoto = await Camera.getPhoto({
		resultType: CameraResultType.Uri,
		source: CameraSource.Photos,
		quality: 100
	});  
	this.photo=capturedPhoto.webPath;
	var file = new File([capturedPhoto.webPath], "image."+capturedPhoto.format, {type:"image/"+capturedPhoto.format});
	console.log(capturedPhoto.webPath)
	const blob = await fetch(capturedPhoto.webPath).then(r => r.blob());
	this._sendImage(blob);
  }
  
  
  async addPhotoToCamera() {
	//var data = this.photoService.addNewToCamera();
    const capturedPhoto = await Camera.getPhoto({
		resultType: CameraResultType.Uri,
		source: CameraSource.Camera,
		quality: 100
	});
	this.photo=capturedPhoto.webPath;
	var file = new File([capturedPhoto.webPath], "image."+capturedPhoto.format, {type:"image/"+capturedPhoto.format});
	console.log(file)
	const blob = await fetch(capturedPhoto.webPath).then(r => r.blob());
	this._sendImage(blob);
  }
  
   async  _sendImage(file:any) {
		var header = {
			
		};
		var formData = new FormData();
		formData.append("fileToUpload", file);
		console.log(file)
		this.httpClient.post(this.imgbaseUrl+"/upload.php", formData, {headers: header})
        .subscribe(reponse => {
			 console.log(reponse);
			 //console.log(reponse["filename"]);
			 console.log(reponse[0].filename);
			 
			 if(this.imgselected=="image"){
				this.imageurl=this.imgbaseUrl+"/uploads/"+reponse[0].filename;
				this.image=reponse[0].filename;
				this.onUpdateImage();
			 }
		   }, error => {
			console.log(error);
			alert(JSON.stringify(error));
		  });
	}
	
	
 onCancelNew(){
	this.isEdit = false;
 }
 onModifyForm(){
	this.isEdit = true;
 }
 
 onUpdateImage(){
	
	
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
			image: this.image
	   }
	   
		this.httpClient.put(this.REST_API_SERVER+"/updateuser/"+this.id, postData, {headers: header})
			.subscribe(data => {
			console.log(data);
			}, error => {
				console.log(error);
		});
 }
 
 onUpdate(){
	this.isSend=true;
	   const firstName = this.infoForm.get('firstName')?.value;
	   const address = this.infoForm.get('address')?.value;
	   const city = this.infoForm.get('city')?.value;
	   const email = this.infoForm.get('email')?.value;
	   const phone = this.infoForm.get('phone')?.value;
	   const locate = this.infoForm.get('locate')?.value;
	   const other = this.infoForm.get('other')?.value;
	   const image = this.infoForm.get('image')?.value;
	   const numb = this.infoForm.get('numb')?.value;
	   const code = this.infoForm.get('code')?.value;
	   const locateurl = this.infoForm.get('locateurl')?.value;
	   const description = this.infoForm.get('description')?.value;
	 
	 
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
			firstName: firstName,
			image: image,
			numb: numb,
			code: code,
			phone: phone,
			email: email,
			address: address,
			city: city,
			other: other,
			locate: locate,
			locateurl: locateurl,
			description: description
	   }
		this.httpClient.put(this.REST_API_SERVER+"/updateuser/"+this.id, postData, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.isSend=false;
				this.isEdit=false;
			}, error => {
				console.log(error);
				this.isSend=false;
		});
 }
 

 onGetInfo(){
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
		this.httpClient.get(this.REST_API_SERVER+"/my-account", {headers: header})
			.subscribe(data => {
				console.log(data);
				this.id = data['id'];
				this.firstName = data['firstName'];
				this.lastName = data['lastName'];
				this.phone = data['phone'];
				this.email = data['email'];
				this.numb = data['numb'];
				this.code = data['code'];
				this.address = data['address'];
				this.city = data['city'];
				this.other = data['other'];
				this.image = data['image'];
				this.imageurl=this.imgbaseUrl+"/uploads/"+this.image;
				if(data['image']==""){
					this.imageurl = "../assets/images/default-img.jpg";
				}
				this.description = data['description'];
				//this.onList();
			}, error => {
				console.log(error);
		});
 }
 selectImage() {
     var image1_html: any =document.getElementById("idimage1")  as HTMLElement;
	 image1_html.click();
   }
   changeListener(sel:any) {
     console.log(sel.target.files[0]);
	 let file = sel.target.files[0];
     let reader = new FileReader();
      reader.onload = (sel:any) => {
        this.image1 = sel.target.result;
      }
      reader.readAsDataURL(sel.target.files[0]);
	  //this.onPostfile(file,"img1") 
   }

}
