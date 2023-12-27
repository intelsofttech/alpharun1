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
import { PaysPage } from '../pays/pays.page';
import { VillePage } from '../ville/ville.page';
import { SecteurPage } from '../secteur/secteur.page';

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
  image:any = "../assets/images/default-img.jpg";
  type = "";
  typelabel = "";
  categ = "";
  categlabel = "";
  phone = "";
  city = "";
  citylabel = "";
  country = "";
  other = "";
  countrylabel = "";
  address = "";
  email = "";
  locateurl = "";
  baseurl = "";
  baseurl2 = "";
  locate = "";
  description = "";
  representant= "";
  logolarge= "";
	services= "";
	localisation2= "";
	rccm= "";
	comptecontribuable= "";
	contacts= "";
	numcompte= "";
	siege= "";
  _libtype = "";
 
  currentFile:any = "";
  selectedFiles:any = "";
  
  isEditEmail = false;
  showetabtype = false;
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
				   phone: [''],
				   city: [''],
				   citylabel: [''],
				   country: [''],
				   countrylabel: [''],
				   address: [''],
				   email: [''],
				   locate: [''],
				   locateurl: [''],
				   other: [''],
				   description: [''],
				   type: [''],
				   typelabel: [''],
				   categ: [''],
				   categlabel: [''],
				   representant: [''],
				   logolarge: [''],
				   services: [''],
				   localisation2: [''],
				   rccm: [''],
				   comptecontribuable: [''],
				   contacts: [''],
				   numcompte: [''],
				   siege: [''],
				   baseurl2: [''],
				   baseurl: ['']
			    })
			 }

   backcolor1 :any = "#194eda";
  backcolor2 :any = "#194eda";
  textcolor :any = "#ffffff";
  
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
	this.onGetInfo()
	
  }

 onCancelNew(){
	this.isEdit = false;
 }
 onModifyForm(){
	this.isEdit = true;
 }
 onSelectType(){
	this.categ = this.infoForm.get('categ')?.value;
	if(this.categ=="eglise"){
		this._libtype="Dénomination/Communauté";
	}	
	if(this.categ=="entreprise"){
		this._libtype="Secteur d'activité";
	}	
	if(this.categ=="metier"){
		this._libtype="Secteur d'intervention";
	}	
	if(this.categ=="emploi"){
		this._libtype="Filière de formation";
	}	
	if(this.categ=="stage"){
		this._libtype="Filière de formation";
	}	
	if(this.categ=="scolaire"){
		this._libtype="Niveau d'étude";
	}	
	if(this.categ=="academique"){
		this._libtype="Filière";
	}
  }
 onUpdate(){
 
	this.isSend=true;
	   const type = this.infoForm.get('type')?.value;
	   const categ = this.infoForm.get('categ')?.value;
	   const firstName = this.infoForm.get('firstName')?.value;
	   const address = this.infoForm.get('address')?.value;
	   const country = this.infoForm.get('country')?.value;
	   const city = this.infoForm.get('city')?.value;
	   const email = this.infoForm.get('email')?.value;
	   const phone = this.infoForm.get('phone')?.value;
	   const locate = this.infoForm.get('locate')?.value;
	   const other = this.infoForm.get('other')?.value;
	   const image = this.infoForm.get('image')?.value;
	   const locateurl = this.infoForm.get('locateurl')?.value;
	   const description = this.infoForm.get('description')?.value;
	   const representant = this.infoForm.get('representant')?.value;
	   const logolarge = this.infoForm.get('logolarge')?.value;
	   const services = this.infoForm.get('services')?.value;
	   const localisation2 = this.infoForm.get('localisation2')?.value;
	   const rccm = this.infoForm.get('rccm')?.value;
	   const comptecontribuable = this.infoForm.get('comptecontribuable')?.value;
	   const contacts = this.infoForm.get('contacts')?.value;
	   const numcompte = this.infoForm.get('numcompte')?.value;
	   const siege = this.infoForm.get('siege')?.value;
	   const baseurl = this.infoForm.get('baseurl')?.value;
	   const baseurl2 = this.infoForm.get('baseurl2')?.value;
	   
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
			type: type,
			categ: categ,
			firstName: firstName,
			image: image,
			phone: phone,
			email: email,
			address: address,
			ShortCode: country,
			city: city,
			other: other,
			locate: locate,
			locateurl: locateurl,
			description: description,
			representant : representant,
			baseurl : baseurl,
			baseurl2 : baseurl2,
			logolarge : logolarge,
		    services : services,
		    localisation2 : localisation2,
			rccm : rccm,
			comptecontribuable : comptecontribuable,
			contacts : contacts,
			numcompte : numcompte,
			siege : siege
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
   async presentModalCountry() {
	//const word = this.FormSign.get('Secteur').value;				  
	  
    const modal = await this.modalCtrl.create({
      component: PaysPage,
	  componentProps: {
		//'word': word,
	  }
    });
	modal.onDidDismiss().then(data=>{
		console.log(data)
		if(data.data!="0"){
			
			this.country= data.data;
			this.countrylabel = data.role;
			
		}else{
			//this.country = "";
			//this.countrylabel = "";
		}
	})
    return await modal.present();
  }
 

   
   async presentModalCity() {
	  
    const modal = await this.modalCtrl.create({
      component: VillePage,
	  componentProps: {
		'id': this.country,
	  }
    });
	modal.onDidDismiss().then(data=>{
		console.log(data)
		if(data.data!="0"){
			
			this.city = data.data;
			this.citylabel = data.role;
	
	
		}else{
			//this.country = "";
			//this.countrylabel = "";
		}
	})
    return await modal.present();
  }
   
   async presentModalSector() {
	  
    const modal = await this.modalCtrl.create({
      component: SecteurPage,
	  componentProps: {
		'type': this.categ,
		'libelle': this._libtype,
	  }
    });
	modal.onDidDismiss().then(data=>{
		console.log(data)
		if(data.data!="0"){
			
			this.type = data.data;
			this.typelabel= data.role;
	
	
		}else{
			//this.country = "";
			//this.countrylabel = "";
		}
	})
    return await modal.present();
  }
  
 onSelectImage(){
	var img_html: any =document.getElementById("open-action-sheet")  as HTMLElement;
	img_html.click();
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
		this.getImageFromCamera();
		//this.addPhotoToCamera();
	}
	if(this.result['data']['action']=="librairie"){
		this.getImageFromGalery();
		//this.addPhotoToGallery();
	}
  }

 
	async getImageFromCamera() {
		const image = await Camera.getPhoto({
			quality: 90,
			allowEditing: false,
			resultType: CameraResultType.Base64,
			source: CameraSource.Camera // Camera, Photos or Prompt!
		});

		if (image) {
			console.log(image);
			this.onpostData("data:image/"+image.format+";base64,"+image.base64String);
			
		}
	}
	
	async getImageFromGalery() {
		const image = await Camera.getPhoto({
			quality: 90,
			allowEditing: false,
			resultType: CameraResultType.Base64,
			source: CameraSource.Photos // Camera, Photos or Prompt!
		});

		if (image) {
			console.log(image);
			this.onpostData("data:image/"+image.format+";base64,"+image.base64String);
			
		}
	}

	onpostData(file:any) {
				 
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
			content: file,
			type : 'Image',
		}
	    //alert("post")
	    //alert(file)
	    this.currentFile = file;
	    this.httpClient.post(this.REST_API_SERVER+"/file", postData, {headers: header})
		.subscribe(data => {
			console.log(data);
			this.image=data['name'];
			this.onUpdateimage(this.image);
			this.onGetImageone(this.image);
		}, error => {	
			console.log(error);
		});
	  this.selectedFiles = undefined;
	}

 onUpdateimage(img:any){
 
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
			image: img,
	   }
		this.httpClient.put(this.REST_API_SERVER+"/updateuser/"+this.id, postData, {headers: header})
			.subscribe(data => {
				console.log(data);
			}, error => {
				console.log(error);
		});
 }
 
 
 onGetImageone(name:string){
		
		this.httpClient.get(this.REST_API_SERVER+"/file/name/"+name)
			.subscribe(data => {
				console.log(data);
				this.imgbaseUrl =data['content'];
			}, error => {
				console.log(error);
		});
 }
 
 
  async addPhotoToGallery() {
    //var data = this.photoService.addNewToGallery();
	const capturedPhoto = await Camera.getPhoto({
		resultType: CameraResultType.Uri,
		source: CameraSource.Photos,
		quality: 100
	});  
	this.image1=capturedPhoto.webPath;
	var file = new File([capturedPhoto.webPath], "image."+capturedPhoto.format, {type:"image/"+capturedPhoto.format});
	console.log(capturedPhoto.webPath)
	const blob = await fetch(capturedPhoto.webPath).then(r => r.blob());
	this._sendImage(blob);
  }
  
   async  _sendImage(file:any) {
		var header = {
				'Content-Type': 'multipart/form-data;',
				//'enctype': 'multipart/form-data',
				'Accept': '*',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
				'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
		};
		var formData = new FormData();
		formData.append("image", file);
		console.log(file)
		this.httpClient.post(this.imgbaseUrl+"/fr/uploadimg", formData, {headers: {}})
        .subscribe(reponse => {
			 console.log(reponse);
			 this.image=reponse[0].img;
			 alert(JSON.stringify(reponse));
		   }, error => {
			console.log(error);
			alert(JSON.stringify(error));
		  });
	}
  onGettypeLabel(id:string){
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
		this.httpClient.get(this.REST_API_SERVER+"/config/"+id, {headers: header})
			.subscribe(data => {
				this.typelabel = data['label'];
			}, error => {
				console.log(error);
		});
 }
  onGetcountryLabel(id:string){
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
		this.httpClient.get(this.REST_API_SERVER+"/countries/"+id, {headers: header})
			.subscribe(data => {
				console.log('countrylabel');
				console.log(data);
				this.countrylabel = data['name'];
			}, error => {
				console.log(error);
		});
 } 
  onGetcityLabel(id:string){
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
		this.httpClient.get(this.REST_API_SERVER+"/cities/"+id, {headers: header})
			.subscribe(data => {
				console.log('citylabel');
				console.log(data);
				this.citylabel = data['name'];
			}, error => {
				console.log(error);
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
				this.type = data['type'];
				this.categ = data['categ'];
				this.firstName = data['firstName'];
				this.lastName = data['lastName'];
				this.phone = data['phone'];
				this.email = data['email'];
				this.address = data['address'];
				this.country = data['countryShortCode'];
				this.city = data['city'];
				this.other = data['other'];
				this.image = data['image'];
				this.representant= data['representant'];
				this.baseurl= data['baseurl'];
				this.baseurl2= data['baseurl2'];
				this.logolarge= data['logolarge'];
				this.services= data['services'];
				this.localisation2= data['localisation2'];
				this.rccm= data['rccm'];
				this.comptecontribuable= data['comptecontribuable'];
				this.contacts= data['contacts'];
				this.numcompte= data['numcompte'];
				this.siege= data['siege'];
				if(data['image']==""){
					this.image = "../assets/images/default-img.jpg";
				}else{
					this.onGetImageone(this.image);
				}
				if(this.categ=="ENTREPRISE"){
					this.showetabtype=true;
				}else{
					this.showetabtype=false;
				}
				this.description = data['description'];
				this.onGettypeLabel(this.type);
				this.onGetcountryLabel(this.country);
				this.onGetcityLabel(this.city);
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
