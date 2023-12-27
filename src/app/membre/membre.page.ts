import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
import { UploadFileService } from '../services/upload-file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-membre',
  templateUrl: './membre.page.html',
  styleUrls: ['./membre.page.scss'],
})
export class MembrePage implements OnInit {

  
  
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
  
  addForm = false;
  isSend = false;
  forSelect = false;
  param1 :any= "0";
  param3 :any= "0";
  param2 :any= "0";
  searchValue :any= "0";
  
  
  progress :any= "0";
  imgselected :any= "";
  imgbaseUrl :any= "";
  id :any= "0";
  code :any= "";
  firstName :any= "";
  lastName :any= "";
  gender :any= "";
  matrimonial :any= "";
  birthDate :any= "";
  birthLocate :any= "";
  nationality :any= "";
  profession :any= "";
  master :any= "";
  mastercontact :any= "";
  manager :any= "";
  managercontact :any= "";
  
  phone :any= "";
  email :any= "";
  address :any= "";
  city :any= "";
  image :any= "";
  group1 :any= "";
  group2 :any= "";
  group3 :any= "";
  group4 :any= "";
  group5 :any= "";
  group6 :any= "";
  addDate :any= "";
  locateadd :any= "";
  eventDate :any= "";
  locateevent :any= "";
  other :any= "Non";
  about :any= "";
  
  word :any= "";
  
  
  confirmation :any= "";
  locate :any= "";
  compagnyName :any= "";
  locateurl :any= "";
  description :any= "";
  Uuid :any ="";
  usergroup :any= "client";
  liboperation :any= "AJOUT";
  listmode = false;
  gridmode = true;
  file :any ;
  imagebase64 :any ;
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
			  this.categForm = this.formBuilder.group({
			       code: [''],
				   firstName: ['', [Validators.required, Validators.minLength(2)]],
				   lastName: [''],
				   gender: [''],
				   matrimonial: [''],
				   birthDate: [''],
				   birthLocate: [''],
				   nationality: [''],
				   profession: [''],
				   master: [''],
				   mastercontact: [''],
				   manager: [''],
				   managercontact: [''],
				   phone: [''],
				   email: [''],
				   address: [''],
				   city: [''],
				   confirmation: [''],
				   locate: [''],
				   compagnyName: [''],
				   locateurl: [''],
				   group1: [''],
				   group2: [''],
				   group3: [''],
				   group4: [''],
				   group5: [''],
				   group6: [''],
				   addDate: [''],
				   locateadd: [''],
				   eventDate: [''],
				   locateevent: [''],
				   other: [''],
				   about: [''],
				   image: [''],
				   description: ['']
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
	
	
	this.usergroup=this.param1;
	this.onList();	
	this.onListGroupe();
	//this.onGetFilebyUrl("f61610458a74ddbf5335e6405a718739.png");	
  }
  handleInput(event:any) {
    const query = event.target.value.toLowerCase();
    //this.results = this.results.filter((d) => d.toLowerCase().indexOf(query) > -1);
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
			 console.log(reponse["filename"]);
			 console.log(reponse[0].filename);
			 
			 if(this.imgselected=="image"){
				this.imageurl=this.imgbaseUrl+"/uploads/"+reponse[0].filename;
				this.image=reponse[0].filename;
			 }
		   }, error => {
			console.log(error);
			alert(JSON.stringify(error));
		  });
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
  getimagebase64(data) {
     console.log(data);
	 this.imagebase64=data;
  }
  
  
  getBase64(file) {
   var reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = () => {
	 reader.result;
	 this.imagebase64=reader.result;
	 //console.log(this.imagebase64)
	 //this.onStartSending(this.imagebase64);
	 //this.onStartupload(this.imagebase64);
	 this.onAddFilestore(this.imagebase64);
	 //this.onStartuploadservice(this.imagebase64);
   };
   reader.onerror = function (error) {
     return 'Error';
   };
 } 
 


 onChange(event) {
    this.file = event.target.files[0];
	console.log(this.file)
	this.getBase64(this.file);
	
 }
 
 
  onStartuploadservice(datafile) {
	this.progress = 0;
	
	  this.uploadService.downfile(datafile, this.REST_API_SERVER+"/savefiledata", this.walletId).subscribe(
		event => {
		  if (event.type === HttpEventType.UploadProgress) {
		  console.log(event)
			this.progress = Math.round(100 * event.loaded / event.total);
				
		  } else if (event instanceof HttpResponse) {
			
			console.log(event.body)
			var data = event.body;
			this.onGetfile(data['file1']);
			this.image = data['file1'];
		  }
		},
		err => {
		  this.progress = 0;
		});
	}
 
  onStartupload(datafile) {
  
	this.progress = 0;
	
	  this.uploadService.downfile(datafile, this.REST_API_SERVER+"/savefiledata", this.walletId).subscribe(
		event => {
		  if (event.type === HttpEventType.UploadProgress) {
		  console.log(event)
			this.progress = Math.round(100 * event.loaded / event.total);
				
		  } else if (event instanceof HttpResponse) {
			
			console.log(event.body)
		  }
		},
		err => {
		  this.progress = 0;
		});
	}
 

  onGetFilebyUrl(file:any){
     
	   var header = {
		//'Content-Type': 'application/json',
		'enctype': 'application/json',
		'Accept': '*',
		'Authorization': 'Bearer '+this.walletId,
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
		'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
	   };
	   let postData = {
			datacontent: file
	   }
		
		this.httpClient.get(this.REST_API_SERVER+"/filecontent/"+file, {headers: header})
		.subscribe(data => {
			console.log(data);
		}, error => {
			console.log(error);
		});
			
 }
  onStartSending(file:any){
     
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
			datacontent: file
	   }
		
		this.httpClient.post(this.REST_API_SERVER+"/savefiledata", postData, {headers: header})
		.subscribe(data => {
			console.log(data);
			this.image = data['image'];
		}, error => {
			console.log(error);
		});
			
 }
  
  SelectFile(){
	var imgbutton: any =document.getElementById("imageid")  as HTMLElement;
	var exe = imgbutton.click;
  }

  onNew(){
       this.Uuid =uuidv4();
	   this.code = Date.now();
	   this.addForm = true;
	   this.id = "0";
	   this.liboperation = "AJOUT";
  } 
  onCancelNew(){
	   this.addForm = false;
  }
  onAdd(): any{
      this.isSend = false;
	  if (!this.categForm.valid) {
		
	  }else {
	   let code = this.categForm.get('code')?.value;
	   let firstName = this.categForm.get('firstName')?.value;
	   let lastName = this.categForm.get('lastName')?.value;
	   let gender = this.categForm.get('gender')?.value;
	   let matrimonial = this.categForm.get('matrimonial')?.value;
	   let birthDate = this.categForm.get('birthDate')?.value;
	   let birthLocate = this.categForm.get('birthLocate')?.value;
	   let nationality = this.categForm.get('nationality')?.value;
	   let profession = this.categForm.get('profession')?.value;
	   let master = this.categForm.get('master')?.value;
	   let mastercontact = this.categForm.get('mastercontact')?.value;
	   let manager = this.categForm.get('manager')?.value;
	   let managercontact = this.categForm.get('managercontact')?.value;
	   let phone = this.categForm.get('phone')?.value;
	   let email = this.categForm.get('email')?.value;
	   let address = this.categForm.get('address')?.value;
	   let image = this.categForm.get('image')?.value;
	   let city = this.categForm.get('city')?.value;
	   let locate = this.categForm.get('locate')?.value;
	   let confirmation = this.categForm.get('confirmation')?.value;
	   let compagnyName = this.categForm.get('compagnyName')?.value;
	   let locateurl = this.categForm.get('locateurl')?.value;
	   let group1 = this.categForm.get('group1')?.value;
	   let group2 = this.categForm.get('group2')?.value;
	   let group3 = this.categForm.get('group3')?.value;
	   let group4 = this.categForm.get('group4')?.value;
	   let group5 = this.categForm.get('group5')?.value;
	   let group6 = this.categForm.get('group6')?.value;
	   let addDate = this.categForm.get('addDate')?.value;
	   let locateadd = this.categForm.get('locateadd')?.value;
	   let eventDate = this.categForm.get('eventDate')?.value;
	   let locateevent = this.categForm.get('locateevent')?.value;
	   let other = this.categForm.get('other')?.value;
	   let about = this.categForm.get('about')?.value;
	   let description = this.categForm.get('description')?.value;
	
	   if(lastName==null || lastName==''){
		  lastName="-";
	   }
	   this.isSend = true;
	   
	   var header = {
		'Content-Type': 'application/json',
		'enctype': 'application/json',
		'Accept': '*',
		'Authorization': 'Bearer '+this.walletId,
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
		'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
	   };
	   if(this.id=="0"){
			let postData = {
			   firstName: firstName,
			   lastName: lastName,
			   gender: gender,
			   matrimonial: matrimonial,
			   birthDate: birthDate,
			   birthLocate: birthLocate,
			   nationality: nationality,
			   profession: profession,
			   master: master,
			   mastercontact: mastercontact,
			   manager: manager,
			   managercontact: managercontact,
			   mobile: phone,
			   emailaddress: email,
			   address: address,
			   city: city,
			   confirmation: confirmation,
			   locate: locate,
			   compagnyName: compagnyName,
			   locateurl: locateurl,
			   image: image,
			   group1: group1,
			   group2: group2,
			   group3: group3,
			   group4: group4,
			   group5: group5,
			   group6: group6,
			   addDate: addDate,
			   locateadd: locateadd,
			   eventDate: eventDate,
			   locateevent: locateevent,
			   other: other,
			   about: about,
			   userName: code,
			   description: description,
			   password: "0101",
			   usergroup: this.usergroup
		    }
			
			this.httpClient.post(this.REST_API_SERVER+"/newuser", postData, {headers: header})
			.subscribe(data => {
					console.log(data);
					this.onList();
					this.addForm = false;
					this.isSend = false;
				    this.code = "";
				    this.firstName = "";
				   this.lastName = "";
				   this.gender = "";
				   this.matrimonial = "";
				   this.birthDate = "";
				   this.birthLocate = "";
				   this.nationality = "";
				   this.profession = "";
				   this.master = "";
				   this.mastercontact = "";
				   this.manager = "";
				   this.managercontact = "";
				   this.phone = "";
				   this.email = "";
				   this.address = "";
				   this.image = "";
				   this.city = "";
				   this.confirmation = "";
				   this.locate = "";
				   this.compagnyName = "";
				   this.locateurl = "";
				   this.group1 = "";
				   this.group2 = "";
				   this.group3 = "";
				   this.group4 = "";
				   this.group5 = "";
				   this.group6 = "";
				   this.addDate = "";
				   this.locateadd = "";
				   this.eventDate = "";
				   this.locateevent = "";
				   this.other = "";
				   this.about = "";
				   this.description = "";
  
				}, error => {
					this.isSend = false;	
					console.log(error);
			});
	   }else{
			let postData = {
				firstName: firstName,
			   lastName: lastName,
			   gender: gender,
			   matrimonial: matrimonial,
			   birthDate: birthDate,
			   birthLocate: birthLocate,
			   nationality: nationality,
			   profession: profession,
			   master: master,
			   mastercontact: mastercontact,
			   manager: manager,
			   managercontact: managercontact,
			   mobile: phone,
			   emailaddress: email,
			   address: address,
			   image: image,
			   city: city,
			   confirmation: confirmation,
			   locate: locate,
			   compagnyName: compagnyName,
			   locateurl: locateurl,
			   group1: group1,
			   group2: group2,
			   group3: group3,
			   group4: group4,
			   group5: group5,
			   group6: group6,
			   addDate: addDate,
			   locateadd: locateadd,
			   eventDate: eventDate,
			   locateevent: locateevent,
			   other: other,
			   about: about,
			   userName: code,
			   description: description,
		    }
		   this.httpClient.put(this.REST_API_SERVER+"/updateuser/"+this.id, postData, {headers: header})
				.subscribe(data => {
					console.log(data);
					this.onList();
					this.addForm = false;
					this.isSend = false;
					this.code = "";
					this.firstName = "";
				   this.lastName = "";
				   this.gender = "";
				   this.matrimonial = "";
				   this.birthDate = "";
				   this.birthLocate = "";
				   this.nationality = "";
				   this.profession = "";
				   this.master = "";
				   this.mastercontact = "";
				   this.manager = "";
				   this.managercontact = "";
				   this.phone = "";
				   this.email = "";
				   this.address = "";
				   this.image = "";
				   this.city = "";
				   this.confirmation = "";
				   this.locate = "";
				   this.compagnyName = "";
				   this.locateurl = "";
				   this.group1 = "";
				   this.group2 = "";
				   this.group3 = "";
				   this.group4 = "";
				   this.group5 = "";
				   this.group6 = "";
				   this.addDate = "";
				   this.locateadd = "";
				   this.eventDate = "";
				   this.locateevent = "";
				   this.other = "";
				   this.about = "";
				   this.description = "";
				}, error => {
					this.isSend = false;	
					console.log(error);
			});
	   }
		
	  }
 }
  
  onAddFilestore(file:any){
      
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
			   name: 'gfgdfgdf',
			   data: 'fdsfsdf'
		    }
			
			this.httpClient.post(this.REST_API_SERVER+"/add", postData, {headers: header})
			.subscribe(data => {
					console.log(data);
  
				}, error => {
					this.isSend = false;	
					console.log(error);
			});
	  
 }
  
  public searchArea(text: string) {
  
    this.searchValue = text;
    if (this.searchValue === '') {
      this.filtered = this.results;
      return;
    }

    this.setFilteredList();

    if (this.filtered.length === 0) {
      this.searchNotMatched = true;
      return;
    }
    this.searchNotMatched = false;

  }

  private setFilteredList(): void {
    this.filtered = this.results.map(result => {
      return result.showcases.filter(line => line.firstName === this.searchValue)
    });
  }
  
    applyFilter() {
	     let filterValue = this.pageForm.get('word')?.value;
		 console.log(filterValue);
         //let filterValueLower = filterValue.toLowerCase();
		 
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
		this.httpClient.get(this.REST_API_SERVER+"/users/usergroup/"+this.usergroup, {headers: header})
			.subscribe(data => {
				
				this.results = data;
				this.alllist = data;
				console.log(data);
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
		this.httpClient.delete(this.REST_API_SERVER+"/users/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.onList();
			}, error => {
				console.log(error);
		});
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
		this.httpClient.get(this.REST_API_SERVER+"/users/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.addForm = true;
				this.liboperation = "MODIFICATION";
				this.id = data['id'];
				this.code = data['userName'];
				this.firstName = data['firstName'];
			   this.lastName = data['lastName'];
			   this.gender = data['gender'];
			   this.matrimonial = data['matrimonial'];
			   this.birthDate = data['birthDate'];
			   this.birthLocate = data['birthLocate'];
			   this.nationality = data['nationality'];
			   this.profession = data['profession'];
			   this.master = data['master'];
			   this.mastercontact = data['mastercontact'];
			   this.manager = data['manager'];
			   this.managercontact = data['managercontact'];
			   this.phone = data['mobile'];
			   this.email = data['emailaddress'];
			   this.address = data['address'];
			   this.city = data['city'];
			   this.image = data['image'];
			   this.confirmation = data['confirmation'];
			   this.locate = data['locate'];
			   this.compagnyName = data['compagnyName'];
			   this.locateurl = data['locateurl'];
			   this.group1 = data['group1'];
			   this.group2 = data['group2'];
			   this.group3 = data['group3'];
			   this.group4 = data['group4'];
			   this.group5 = data['group5'];
			   this.group6 = data['group6'];
			   this.addDate = data['addDate'];
			   this.locateadd = data['locateadd'];
			   this.eventDate = data['eventDate'];
			   this.locateevent = data['locateevent'];
			   this.other = data['other'];
			   this.about = data['about'];
			   this.description = data['description'];
				if(data['birthDate']!="" && data['birthDate']!=null){
					let date00 = data['birthDate'];
					let date0 = date00.substr(0, 10);
					this.birthDate = date0;
				}
				if(data['addDate']!="" && data['addDate']!=null){
					let date01 = data['addDate'];
					let date1 = date01.substr(0, 10);
					this.addDate = date1;
				}
				
				if(data['eventDate']!="" && data['eventDate']!=null){
					let date02 = data['eventDate'];
					let date2 = date02.substr(0, 10);
					this.eventDate = date2;
				}
				this.imageurl=this.imgbaseUrl+"/uploads/"+this.image;
				//this.onList();
			}, error => {
				console.log(error);
		});
 }
 
 onGetfile(file:string){
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
		this.httpClient.get(this.REST_API_SERVER+"/file/"+file, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.imagedata = data;
				//this.onList();
			}, error => {
				console.log(error);
		});
 }
 
 onListGroupe(){
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
		this.httpClient.get(this.REST_API_SERVER+"/configs/group", {headers: header})
			.subscribe(data => {
				console.log(data);
				this.department = data;
				this.alllist = data;
			}, error => {
				console.log(error);
		});
 }

  onselect(code:string,libelle:string)
  {
    this.modalCtrl.dismiss(code,libelle);

  }
 closemodal(code:string,libelle:string)
 {
    this.modalCtrl.dismiss(code,libelle);

 }


}
