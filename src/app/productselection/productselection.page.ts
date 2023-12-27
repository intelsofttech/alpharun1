import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, NavParams, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { PopoverController, ToastController ,ActionSheetController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
import { Media, MediaObject } from '@awesome-cordova-plugins/media/ngx';
import { MouvementproduitPage } from '../mouvementproduit/mouvementproduit.page';
import { PhotoService } from '../services/photo.service';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

@Component({
  selector: 'app-productselection',
  templateUrl: './productselection.page.html',
  styleUrls: ['./productselection.page.scss'],
})
export class ProductselectionPage implements OnInit {

  header = {
	//'Content-Type': 'application/json',
	'enctype': 'application/json',
	'Accept': '*',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
	'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
  };
		
  REST_API_SERVER="";
  imgbaseUrl = "";
  selid = "";
  seltitle = "";
  seloper = "";
  selprixachat = "";
  selprixvente = "";
  walletId = "";
  pageForm: FormGroup;
  productForm: FormGroup;
  
  photo:any="../assets/images/default-img.jpg";
  image:any = "../assets/images/default-img.jpg";
  imageurl:any = "../assets/images/default-img.jpg";
  
  addForm = false;
  isSend = false;
  listmode = false;
  gridmode = true;
  
  picselect :any= "1";
  param1 :any= "0";
  param2 :any= "0";
  searchValue :any= "0";
  id :any= "0";
  title :any= "";
  code :any= "";
  unit :any= "";
  buyingprice :any= "";
  filePath :any= "";
  sellingprice :any= "";
  tauxmargin :any= "";
  margin :any= "";
  category :any= "";
  stockmini :any= "";
  stockalert :any= "";
  resume :any= "";
  description :any= "";
  sel :any= -1;
  imgselected = "";
  liboperation :any= "AJOUT";
  public results :any = [];
  public alllist :any = [];
  public filtered :any = [];
  public listcategories :any = [];
  searchNotMatched = true;
 constructor( 
			  private media: Media,
			  public platform: Platform,
			  public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient,
			  private params: NavParams,
			  public actionSheetController: ActionSheetController) {
			  this.pageForm = this.formBuilder.group({
				 word: ['']
			  })
			  this.productForm = this.formBuilder.group({
				title: ['', [Validators.required]],
				code: [''],
				unit: [''],
				buyingprice: [''],
				sellingprice: [''],
				margin: [''],
				tauxmargin: [''],
				category: [''],
				stockmini: [''],
				stockalert: [''],
				resume: [''],
				description: [''],
				image: ['']
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
	this.param1=  this.params.get('param1');
	this.param2=  this.params.get('param2');
	
	this.onList();	
	this.onCategorieList();
  }
  
   async presentModalMouv(i:any, id:any, title:any, oper:any, achat:any, vente:any) {
	//const word = this.FormSign.get('Secteur').value;				  
	this.selid = id;
	this.seltitle = title;	
	this.seloper = oper;	
	this.selprixachat = achat;	
	this.selprixvente = vente;	
	this.sel = i;	
    const modal = await this.modalCtrl.create({
      component: MouvementproduitPage,
	  componentProps: {
		'param1': this.selid,
		'param2': this.seltitle,
		'param3': this.seloper,
		'param4': this.selprixachat,
		'param5': this.selprixvente
	  }
    });
	
	modal.onDidDismiss().then(data=>{
		console.log(data)
		if(oper=="add"){
			this.results[this.sel]['stock']=Number(this.results[this.sel]['stock'])+Number(data['data']);
		}else{
			this.results[this.sel]['stock']=Number(this.results[this.sel]['stock'])-Number(data['data']);
		}
		
	})
    return await modal.present();
  }
   onChangemode(sel:any){
	   if(sel=="list"){
		  this.listmode = true;
	      this.gridmode = false;
	   }else{
		if(sel=="grid"){
			this.listmode = false;
	        this.gridmode = true;
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
				this.image=reponse[0].filename;
			 }
		   }, error => {
			console.log(error);
			alert(JSON.stringify(error));
		  });
	}
	
	
 onCategorieList(){
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
		this.httpClient.get(this.REST_API_SERVER+"/configs/produit", {headers: header})
			.subscribe(data => {
				console.log(data);
				this.listcategories=data;
			}, error => {
				console.log(error);
		});
 }
  
  onCalculmarge() {
	this.margin = parseInt(this.sellingprice)-parseInt(this.buyingprice);
	this.tauxmargin = parseInt(this.margin)*100/parseInt(this.sellingprice);
	
  }
  onCalculPrixventeMargin() {
	this.sellingprice = parseInt(this.buyingprice)+parseInt(this.margin);
	
  }
  onCalculPrixventeTauxMargin() {
	this.sellingprice =parseInt(this.buyingprice)+ parseInt(this.buyingprice)*parseInt(this.tauxmargin)/100;
	
  }
  
  
 selectProduct(id:any, title:any) {
	this.selid = id;
	this.seltitle = title;
 }
 async selectImageFrom(sel) {
	 this.picselect=sel ;
    const actionSheet = await this.actionSheetController.create({
        header: "Choisir une image",
		cssClass: 'action-sheets-groups-page',
        buttons: [{
                text: 'Depuis la librairie',
                handler: () => {
                    //this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                }
            },
            {
                text: 'Utiliser la caméra',
                handler: () => {
                    //this.takePicture(this.camera.PictureSourceType.CAMERA);
                }
            },
            {
                text: 'Annuler',
                role: 'cancel'
            }
        ]
    });
    await actionSheet.present();
  }


  selectImage(sel:any) {
     var image1_html: any =document.getElementById("idimage1")  as HTMLElement;
	 image1_html.click();
   }
   changeListener(sel:any) {
     console.log(sel.target.files[0]);
	 let file = sel.target.files[0];
     let reader = new FileReader();
      reader.onload = (sel:any) => {
        this.image = sel.target.result;
      }
      reader.readAsDataURL(sel.target.files[0]);
	  //this.onPostfile(file,"img1") 
   }
   
  applyFilter(filterValue: string) {
	  
         let filterValueLower = filterValue.toLowerCase();
         if(filterValue === '' ) {
             this.results=this.alllist;
         }else{
			
           this.results = this.alllist.filter(results => results.title.toLowerCase().includes(filterValue.toLowerCase()));
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
		this.httpClient.get(this.REST_API_SERVER+"/products", {headers: header})
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
		this.httpClient.delete(this.REST_API_SERVER+"/product/"+id, {headers: header})
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
		this.httpClient.get(this.REST_API_SERVER+"/product/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.addForm = true;
				this.liboperation = "MODIFICATION";
				this.id = data['id'];
				this.title = data['title'];
				this.code = data['code'];
				this.unit = data['unit'];
				this.buyingprice = data['buyingprice'];
				this.sellingprice = data['sellingprice'];
				this.margin = data['margin'];
				this.category = data['category'];
				this.stockmini = data['stockmini'];
				this.stockalert = data['stockalert'];
				this.resume = data['resume'];
				this.description = data['description'];
				this.image = data['image'];
				this.imageurl=this.imgbaseUrl+"/uploads/"+data['image'];
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
 
 
  onNew(){
	   this.addForm = true;
	   this.id = "0";
	   this.liboperation = "AJOUT PRODUIT";
	   this.title = "";
	   this.code = "";
	   this.unit = "";
	   this.buyingprice = "";
	   this.filePath = "";
	   this.sellingprice = "";
	   this.tauxmargin = "";
	   this.margin = "";
	   this.category  = "";
	   this.stockmini = "";
	   this.stockalert = "";
	   this.resume = "";
	   this.description = "";
  } 
  onCancelNew(){
	   this.addForm = false;
  }
  onAdd(): any{
      this.isSend = false;
	  if (!this.productForm.valid) {
		
	  }else {
	   const title = this.productForm.get('title')?.value;	   
	   const code = this.productForm.get('code')?.value;
	   const unit = this.productForm.get('unit')?.value;
	   const buyingprice = this.productForm.get('buyingprice')?.value;
	   const sellingprice = this.productForm.get('sellingprice')?.value;
	   const margin = this.productForm.get('margin')?.value;
	   const category = this.productForm.get('category')?.value;
	   const stockmini = this.productForm.get('stockmini')?.value;
	   const stockalert = this.productForm.get('stockalert')?.value;
	   const resume = this.productForm.get('resume')?.value;
	   const description = this.productForm.get('description')?.value;
	   const image = this.productForm.get('image')?.value;
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
				title: title,
				code : code,
				unit : unit,
				buyingprice : buyingprice,
				sellingprice : sellingprice,
				margin : margin,
				category : category,
				stockmini : stockmini,
				stockalert : stockalert,
				resume : resume,
				description : description,
				image : image
		    }
			this.httpClient.post(this.REST_API_SERVER+"/product", postData, {headers: header})
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
				title: title,
				code : code,
				unit : unit,
				buyingprice : buyingprice,
				sellingprice : sellingprice,
				margin : margin,
				category : category,
				stockmini : stockmini,
				stockalert : stockalert,
				resume : resume,
				description : description,
				image : image
		    }
			console.log(postData)
		   this.httpClient.put(this.REST_API_SERVER+"/product/"+this.id, postData, {headers: header})
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
triggerEvent(){

}

}
