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

@Component({
  selector: 'app-programcontent',
  templateUrl: './programcontent.page.html',
  styleUrls: ['./programcontent.page.scss'],
})
export class ProgramcontentPage implements OnInit {

  
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
  
  imgselected = "";
  
  
  photo:any="../assets/images/default-img.jpg";
  imageUrl:any = "../assets/images/default-img.jpg";
  imageurl:any = "../assets/images/default-img.jpg";
  
  imgbaseUrl = "";
  
  liboperation :any= "AJOUT";
  public results :any = [];
  public alllist :any = [];
  public filtered :any = [];
  searchNotMatched = true;
 constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient) {
			  this.pageForm = this.formBuilder.group({
				 word: ['']
			  })
			  this.categForm = this.formBuilder.group({
				   label: ['', [Validators.required]],
				   parent: [''],
				   resume: [''],
				   description: [''],
				   image: [''],
				   iframe: [''],
				   url: [''],
				   type: [''],
				   status: [''],
				   filename: [''],
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
	
	this.onList();	
  }
  handleInput(event:any) {
    const query = event.target.value.toLowerCase();
    //this.results = this.results.filter((d) => d.toLowerCase().indexOf(query) > -1);
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
  
  onNew(){
     
	   this.addForm = true;
	   this.id = "0";
	   this.liboperation = "AJOUT";
	   this.label = "";
	   this.description = "";
	   this.resume = "";
	   this.image = "";
	   this.iframe = "";
	   this.url = "";
	   this.type = "";
	   this.status = "";
	   this.filename = "";
	 
  } 
  onCancelNew(){
	   this.addForm = false;
  }
  onAdd(): any{
      this.isSend = false;
	  if (!this.categForm.valid) {
		
	  }else {
	   const label = this.categForm.get('label')?.value;
	   const parent = this.categForm.get('parent')?.value;
	   const description = this.categForm.get('description')?.value;
	   const resume = this.categForm.get('resume')?.value;
	   const image = this.categForm.get('image')?.value;
	   const iframe = this.categForm.get('iframe')?.value;
	   const url = this.categForm.get('url')?.value;
	   const type = this.categForm.get('type')?.value;
	   const status = this.categForm.get('status')?.value;
	   const filename = this.categForm.get('filename')?.value;
	   
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
				label: label,
				parent: parent,
				description: description,
			    resume: resume,
			    image: image,
			    iframe: iframe,
			    url: url,
			    type: type,
			    status: status,
			    filename: filename,
				parameter: this.param2,
				materialcode: this.param1,
				programcode: this.param3
		    }
			this.httpClient.post(this.REST_API_SERVER+"/content", postData, {headers: header})
			.subscribe(data => {
					console.log(data);
					this.onList();
					this.addForm = false;
					this.isSend = false;
				}, error => {
					this.isSend = false;	
					console.log(error);
			});
	   }else{
			let postData = {
				label: label,
				parent: parent,
				description: description,
			    resume: resume,
			    image: image,
			    iframe: iframe,
			    url: url,
			    type: type,
			    status: status,
			    filename: filename
		    }
		   this.httpClient.put(this.REST_API_SERVER+"/content/"+this.id, postData, {headers: header})
				.subscribe(data => {
					console.log(data);
					this.onList();
					this.addForm = false;
					this.isSend = false;
				}, error => {
					this.isSend = false;	
					console.log(error);
			});
	   }
		
	  }
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
				this.filename=reponse[0].filename;
				this.image=reponse[0].filename;
			 }
		   }, error => {
			console.log(error);
			alert(JSON.stringify(error));
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
      return result.showcases.filter(line => line.label === this.searchValue)
    });
  }
  
    applyFilter(filterValue: string) {
	  
         let filterValueLower = filterValue.toLowerCase();
         if(filterValue === '' ) {
             this.results=this.alllist;
         }else{
			
           this.results = this.alllist.filter(results => results.label.toLowerCase().includes(filterValue.toLowerCase()));
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
		this.httpClient.get(this.REST_API_SERVER+"/contents/program/"+this.param3, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.results = data;
				this.alllist = data;
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
		this.httpClient.delete(this.REST_API_SERVER+"/content/"+id, {headers: header})
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
		this.httpClient.get(this.REST_API_SERVER+"/content/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.addForm = true;
				this.liboperation = "MODIFICATION";
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
				//this.onList();
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
