import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { PopoverController, ToastController ,ActionSheetController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { PartnerPage } from '../../partnerselection/partner.page';
import { NewoperationPage } from '../../newoperation/newoperation.page';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { PhotoService } from '../../services/photo.service';
import { AddtocartPage } from '../../addtocart/addtocart.page';
//import { SelectautoPage } from '../selectauto/selectauto.page';
import { SelectautomobilePage } from '../selectautomobile/selectautomobile.page';


@Component({
  selector: 'app-chargefixe',
  templateUrl: './chargefixe.page.html',
  styleUrls: ['./chargefixe.page.scss'],
})
export class ChargefixePage implements OnInit {

  
  header = {
	//'Content-Type': 'application/json',
	'enctype': 'application/json',
	'Accept': '*',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
	'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
  };

  photo:any="../assets/images/default-img.jpg";

  REST_API_SERVER="";
  walletId = "";
  pageForm: FormGroup;
  categForm: FormGroup;
  
  showsearchForm = false;
  notshowAddForm = false;
  search = false;
  addForm = false;
  step = false;
  stepsimple = false;
  stepdetail = false;
  stepsell = false;
  isSend = false;
  param1 :any= "0";
  param2 :any= "0";
  param3 :any= "0";
  param4 :any= "0";
  searchValue :any= "0";
  id :any= "0";
  idcart :any= "0";
  indexid :any= "0";
  title :any= "RECETTE/VENTE";
  parameter :any= "";
  parameterlabel :any= "";
  total :any= "";
  discount :any= "";
  rate :any= "";
  discountrate :any= "";
  amounttaxe :any= "";
  amountouttaxe :any= "";
  amount :any= "";
  addDate :any= "";
  reference :any= "";
  date :any= "";
  echeance :any= "";
  partner :any= "";
  partnercode :any= "";
  phone1 :any= "";
  email :any= "";
  address :any= "";
  city :any= "";
  event :any= "";
  counted :any= "";
  task :any= "";
  account :any= "";
  locateurl :any= "";
  description :any= "";
  liboperation :any= "AJOUT";
  categ :any= "";
  categpart :any= "Parténaire";
  montencaisse :any= "";
  word :any= "";
  _image :any= "";
  Uuid :any= "AJOUT";
  selid :any = 'client';
  seltitle :any = 'Client';
  movementtype :any = 'add';
  productid :any = '0';
  billTotal :any= 0;
  
  _categ = "";
  _date1 = "";
  _date2 = "";
  
  cashdesk = "";
  
  amountBill :number= 0;
  amountTotal :number= 0;
  payamountTotal :number= 0;
  stayamountTotal :number= 0;
				
  public results :any = [];
  public alllist :any = [];
  public list :any = [];
  public filtered :any = [];
  public cartprod :any = [];
  public projets :any = [];
  public listcategories :any = [];
  searchNotMatched = true;
  typeForm = false;
 constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient,
			  public photoService: PhotoService) {
			  this.pageForm = this.formBuilder.group({
				 _categ: [''],
				 _date1: [''],
				 _date2: [''],
				 word: ['']
			  })
			  this.categForm = this.formBuilder.group({
				   title: ['', [Validators.required]],
				   parameter: [''],
				   parameterlabel: [''],
				   amount: [''],
				   addDate: [''],
				   reference: [''],
				   date: [''],
				   echeance: [''],
				   partner: [''],
				   partnercode: [''],
				   phone1: [''],
				   email: [''],
				   address: [''],
				   city: [''],
				   rate: [''],
				   discountrate: [''],
				   total: [''],
				   discount: [''],
				   amounttaxe: [''],
				   amountouttaxe: [''],
				   account: [''],
				   locateurl: [''],
				   description: [''],
				   event: [''],
				   task: ['']
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
	
	var cashdesk_html: any =document.getElementById("cashdesk")  as HTMLElement;
	this.cashdesk= cashdesk_html.value;
	
	
	this.param1 = this.activatedRoute.snapshot.paramMap.get('param1');
	this.param2 = this.activatedRoute.snapshot.paramMap.get('param2');
	this.param3 = this.activatedRoute.snapshot.paramMap.get('param3');
	this.param4 = this.activatedRoute.snapshot.paramMap.get('param4');
	console.log(this.walletId)
	this.title=this.param3;
	
	var now = new Date();
	const dateFormatter = Intl.DateTimeFormat('sv-SE');
	this.reference = Date.now();
	this.date = dateFormatter.format(now);
	this.echeance = dateFormatter.format(now);
	
    if(this.param1=="12"){
		this.categ = "recetteauto";
		this.montencaisse = "Encaissé";
		if(this.param2=="COUNTED"){
			this.counted="true";
			this.categpart="Remetteur";
			this.movementtype="no";
			this.notshowAddForm=true;
		}
		if(this.param2=="RECETTE"){
			this.counted="true";
			this.categpart="Remetteur";
			this.movementtype="no";
		}
		if(this.param2=="RECETTE-PRODUIT"){
			this.counted="true";
			this.categpart="Remetteur";
			this.movementtype="no";
		}
		if(this.param2=="FACTURE"){
			this.counted="true";
			this.categpart="Client";
			this.movementtype="move";
		}
		if(this.param2=="DEVIS"){
			this.counted="false";
			this.categpart="Client";
			this.movementtype="no";
		}
	}else{
		if(this.param1=="11"){
			this.categ = "chargeauto";
		    this.montencaisse = "Décaissé";
			if(this.param2=="COUNTED"){
				this.counted="true";
				this.categpart="Bénéficiaire";
				this.movementtype="no";
				this.notshowAddForm=true;
			}
			if(this.param2=="CHARGE"){
				this.counted="true";
				this.categpart="Bénéficiaire";
				this.movementtype="no";
			}
			if(this.param2=="CHARGE-PRODUIT"){
				this.counted="true";
				this.categpart="Bénéficiaire";
				this.movementtype="no";
			}
			if(this.param2=="COMMANDE"){
				this.counted="true";
				this.categpart="Fournisseur";
				this.movementtype="add";
			}
			if(this.param2=="BON-COMMANDE"){
				this.counted="false";
				this.categpart="Fournisseur";
				this.movementtype="no";
			}
		}
	}
	if(this.param2=="RECETTE"){
		this.simpleform=true;
	}
	if(this.param2=="CHARGE"){
		this.simpleform=true;
	}
	this.onList();	
	this.onProductsList();	
	this.onCategorieList();
	this.onListProjet();
	
  }
  
  
  onCalculdiscount1() {
	const amountouttaxe = this.categForm.get('amountouttaxe')?.value;
	const discount = this.categForm.get('discount')?.value;
	this.discountrate=Number(discount)/Number(amountouttaxe)*100;			   
	this.total=Number(amountouttaxe)-Number(discount);
	this.amount=Number(this.total)+Number(this.amounttaxe)	
		
	
  }
  
  
  onCalculdiscount2() {
	const amountouttaxe = this.categForm.get('amountouttaxe')?.value;
	const discountrate = this.categForm.get('discountrate')?.value;
	this.discount=Number(amountouttaxe)*Number(discountrate)/100;			   
	this.total=Number(amountouttaxe)-Number(this.discount);
	this.amount=Number(this.total)+Number(this.amounttaxe)
		
	
  }
  
  
  
  
  onCalcultaxe1() {
	const total = this.categForm.get('total')?.value;
	const amounttaxe = this.categForm.get('amounttaxe')?.value;
	this.rate=Number(amounttaxe)/Number(total)*100;	
	this.amount=Number(total)+Number(amounttaxe)	
		
	
  }
  
  
  onCalcultaxe2() {
	const total = this.categForm.get('total')?.value;
	const rate = this.categForm.get('rate')?.value;
	this.amounttaxe=Number(total)*Number(rate)/100;		
	this.amount=Number(total)+Number(this.amounttaxe)
		
	
  }
  
  
  onCalculamount() {
  
	//this.amounttaxe=Number(this.amountouttaxe)*Number(this.rate)/100;			   
	this.rate=this.amounttaxe/Number(this.amountouttaxe)*100;			   
	this.total=Number(this.amountouttaxe)+Number(this.amounttaxe);	
	//this.discount=Number(this.total)*Number(this.discountrate)/100;	
	this.discountrate=this.discount/Number(this.total)*100;	
	this.amountouttaxe=Number(this.total)-Number(this.discount);	
	
  }
   onCalculonrate() {
  
	this.amounttaxe=Number(this.amountouttaxe)*Number(this.rate)/100;			   
	this.total=Number(this.amountouttaxe)+Number(this.amounttaxe);	
	this.discount=Number(this.total)*Number(this.discountrate)/100;	
	this.amountouttaxe=Number(this.total)-Number(this.discount);	
	
  }
  handleInput(event:any) {
    const query = event.target.value.toLowerCase();
    //this.results = this.results.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }
   
  listmode = false;
  gridmode = true;
  onChangemode(sel:any){
	   if(sel=="list"){
		  this.listmode = true;
	      this.gridmode = false;
	   }else{
	      this.listmode = false;
	      this.gridmode = true;
	   }
  } 
  
  
  result: any =[];
  public actionSheetButtons = [
    {
      text: 'Conducteur',
      data: {
        action: 'conducteur',
      },
    },
    {
      text: 'Propriétaire',
      data: {
        action: 'proprietaireauto',
      },
    },
    {
      text: 'Client',
      data: {
        action: 'client',
      },
    },
    {
      text: 'Fournisseur',
      data: {
        action: 'fournisseur',
      },
    },
    {
      text: 'Employé',
      data: {
        action: 'employe',
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
  
  
   async setResult(ev) {
    console.log(ev.detail)
    this.result = ev.detail;
	if(this.result['data']['action']=="proprietaireauto"){
		this.selid = 'proprietaireauto';
		this.seltitle = 'Propriétaires';
		const modal = await this.modalCtrl.create({
			  component: PartnerPage,
			  componentProps: {
				'param1': this.selid,
				'param2': this.seltitle
			  }
			});

			
			modal.onDidDismiss().then(data=>{
				console.log(data)
				this.partnercode= data['data'];
				this.partner= data['role'];
				this.onGetpartner(data['data']);
			})
			return await modal.present();
	}
	if(this.result['data']['action']=="conducteur"){
		this.selid = 'conducteur';
		this.seltitle = 'Conducteurs';
		const modal = await this.modalCtrl.create({
			  component: PartnerPage,
			  componentProps: {
				'param1': this.selid,
				'param2': this.seltitle
			  }
			});

			
			modal.onDidDismiss().then(data=>{
				console.log(data)
				this.partnercode= data['data'];
				this.partner= data['role'];
				this.onGetpartner(data['data']);
			})
			return await modal.present();
	}
	if(this.result['data']['action']=="client"){
		this.selid = 'client';
		this.seltitle = 'Clients';
		const modal = await this.modalCtrl.create({
			  component: PartnerPage,
			  componentProps: {
				'param1': this.selid,
				'param2': this.seltitle
			  }
			});

			
			modal.onDidDismiss().then(data=>{
				console.log(data)
				this.partnercode= data['data'];
				this.partner= data['role'];
				this.onGetpartner(data['data']);
			})
			return await modal.present();
	}
	if(this.result['data']['action']=="fournisseur"){
		this.selid = 'fournisseur';
		this.seltitle = 'Fournisseurs';
		const modal = await this.modalCtrl.create({
			  component: PartnerPage,
			  componentProps: {
				'param1': this.selid,
				'param2': this.seltitle
			  }
			});

			
			modal.onDidDismiss().then(data=>{
				console.log(data)
				this.partnercode= data['data'];
				this.partner= data['role'];
				this.onGetpartner(data['data']);
			})
			return await modal.present();
	}
	if(this.result['data']['action']=="employe"){
		this.selid = 'employe';
		this.seltitle = 'Employés';
		const modal = await this.modalCtrl.create({
			  component: PartnerPage,
			  componentProps: {
				'param1': this.selid,
				'param2': this.seltitle
			  }
			});

			
			modal.onDidDismiss().then(data=>{
				console.log(data)
				this.partnercode= data['data'];
				this.partner= data['role'];
				this.onGetpartner(data['data']);
			})
			return await modal.present();
	}
	if(this.result['data']['action']=="membre"){
		this.selid = 'membre';
		this.seltitle = 'Membres';
		const modal = await this.modalCtrl.create({
			  component: PartnerPage,
			  componentProps: {
				'param1': this.selid,
				'param2': this.seltitle
			  }
			});

			
			modal.onDidDismiss().then(data=>{
				console.log(data)
				this.partnercode= data['data'];
				this.partner= data['role'];
				this.onGetpartner(data['data']);
			})
			return await modal.present();
	}
  }


  
 onGetpartner(id:string){
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
			
				this.phone1 = data['mobile'];
				this.email = data['emailaddress'];
				this.address = data['address'];
				this.city = data['city'];
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
	this._sendImage(file);
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
		formData.append("file", file);
		console.log(file)
		this.httpClient.post(this.REST_API_SERVER+"/uploadfile", formData, {headers: header})
        .subscribe(reponse => {
			 console.log(reponse["fileName"]);
			 this._image=reponse["fileName"];
			 alert(JSON.stringify(reponse));
		   }, error => {
			console.log(error);
			alert(JSON.stringify(error));
		  });
	}
	
	
	
  onAddLineToCart(){
	var _design: any =document.getElementById("design")  as HTMLElement;
	var design= _design.value;
	var _unity: any =document.getElementById("unity")  as HTMLElement;
	var unity= _unity.value;
	var _qty: any =document.getElementById("qty")  as HTMLElement;
	var qty= _qty.value;
	var _prixu: any =document.getElementById("prixu")  as HTMLElement;
	var prixu= _prixu.value;
	
	var prixtotal = Number(qty)*Number(prixu);
	console.log(prixtotal)
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
				label: design,
				quantity : qty,
				price : prixu,
				total : prixtotal,
				margin : "",
				direction : "NO",
				productid : "0",
				uui : this.Uuid
		    }
			console.log(postData)
			this.httpClient.post(this.REST_API_SERVER+"/movement", postData, {headers: header})
			.subscribe(data => {
					console.log(data);
					this.onCart();
				}, error => {
					
			});
    
  }
  onSelect(){
	var open_action_sheet_html: any =document.getElementById("open-action-sheet")  as HTMLElement;
	open_action_sheet_html.click();
  }
  onNew(){
    if(this.param2!="COUNTED"){
		   this.Uuid =uuidv4();
	   this.cartprod=[];
	   this.addForm = true;
	   this.id = "0";
	   this.reference = Date.now();
	   this.liboperation = "AJOUT "+this.param3;
	   this.step = false;
	   this.stepsimple = false;
	   this.stepdetail = false;
	   this.stepsell = false;
	   if(this.param3=="1"){
		  this.step=true;
		  this.stepsimple = true;
		  this.typeForm=true;
		  this.title = "";
	   }else{
	       if(this.param3=="2"){
			   this.stepsell = true;
		   }else{
			   this.stepdetail = true;
		   }
		   this.typeForm=false;
			
	   }
	this.account = "0";  
	this.date = "";  
	this.echeance = "";  
	this.title = this.param4;  
	this.amount = "";  
	this.parameter = "";  
	this.parameterlabel = "";  
	this.partner = "";  
	this.partnercode = "";  
	this.description = "";  
	this.event = "0";  
	var now = new Date();
	const dateFormatter = Intl.DateTimeFormat('sv-SE');
	this.date = dateFormatter.format(now);
	this.echeance = dateFormatter.format(now);
	this.onProductsList();	
	}
    
  }  
  onDeleteinCart(id:string){
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
		this.httpClient.delete(this.REST_API_SERVER+"/movement/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.onCart();
			}, error => {
				console.log(error);
		});
  }   
  goNext(){
	   this.step = true;
  }  
  goPreview(){
	   this.step = false;
  }  
    
  onEnterQty(val:any, i:any, idprod:any, prod:any, prixachat:any, prixvente:any){
	  console.log(val.target.value)
	  if(this.list[i].shop==null){ this.list[i].shop=0;}
       let newqte = val.target.value;
	   this.list[i].shop=newqte
	   let total = prixvente*newqte;
	   let margin = prixvente-prixachat;
	   let totalmargin = margin*newqte;
       console.log(this.list[i].shop)
	   this.indexid=i;
	   if(this.list[i].value==null){ 
			this.onAddTocart(0, idprod, prod, newqte, prixvente, total, totalmargin);
	   }else{
			let movid = this.list[i].value;
			this.onAddTocart(movid, idprod, prod, newqte, prixvente, total, totalmargin);
	   }
  }  
  
  onRemoveQte(i:any, idprod:any, prod:any, prixachat:any, prixvente:any){
       if(this.list[i].shop==null){ this.list[i].shop=0;}
       let qte = this.list[i].shop;
	   if(qte>0){
		   let newqte = qte-1;
		   this.list[i].shop=newqte;
		   let total = prixvente*newqte;
		   let margin = prixvente-prixachat;
		   let totalmargin = margin*newqte;
		   console.log(this.list[i].shop)
		   this.indexid=i;
		   if(this.list[i].value==null){ 
				this.onAddTocart(0, idprod, prod, newqte, prixvente, total, totalmargin);
		   }else{
				let movid = this.list[i].value;
				if(newqte==0){
					this.list[i].value="0";
					this.onDeleteinCart(movid)
				}else{
					
					this.onAddTocart(movid, idprod, prod, newqte, prixvente, total, totalmargin);
				}
				
		   }
	   }
       
	  
  } 
  
  onAddQte(i:any, idprod:any, prod:any, prixachat:any, prixvente:any){
       if(this.list[i].shop==null){ this.list[i].shop=0;}
       let qte = this.list[i].shop;
       let newqte = qte+1;
	   this.list[i].shop=newqte
	   let total = prixvente*newqte;
	   let margin = prixvente-prixachat;
	   let totalmargin = margin*newqte;
       console.log(this.list[i].shop)
	   this.indexid=i;
	   if(this.list[i].value==null){ 
			this.onAddTocart(0, idprod, prod, newqte, prixvente, total, totalmargin);
	   }else{
			let movid = this.list[i].value;
			this.onAddTocart(movid, idprod, prod, newqte, prixvente, total, totalmargin);
	   }
	   
	   
     
  }  
  onRemoveQteCart(i:any, idprod:any, prod:any){
  
  }  
  onAddQteCart(i:any, idprod:any, prod:any){
  
  } 
  
  
    onAddTocart(id:number, idprod:number, product:any, qte:any, prix:any, total:any, margin:any): any{
      
	   var header = {
		'Content-Type': 'application/json',
		'enctype': 'application/json',
		'Accept': '*',
		'Authorization': 'Bearer '+this.walletId,
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
		'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
	   };
	   if(this.param1=="1"){
			this.productid="0";
			if(this.param2=="FACTURE"){
				this.productid=idprod;
			}
		}else{
			if(this.param1=="2"){
				this.productid="0";
				if(this.param2=="COMMANDE"){
					this.productid=idprod;
				}
			}
		}
	   
	   if(id==0){
			let postData = {
				label: product,
				quantity : qte,
				price : prix,
				total : total,
				margin : margin,
				direction : this.movementtype,
				productid : this.productid,
				uui : this.Uuid
		    }
			console.log(postData)
			this.httpClient.post(this.REST_API_SERVER+"/movement", postData, {headers: header})
			.subscribe(data => {
					console.log(data);
					this.list[this.indexid].value = data['id'];
					this.onCart();
					this.isSend = false;
				}, error => {
					this.isSend = false;	
					console.log(error);
			});
	   }else{
			let postData = {
				label: product,
				quantity : qte,
				price : prix,
				total : total,
				margin : margin,
				productid : this.productid
		    }
			if(qte==0){
				this.httpClient.delete(this.REST_API_SERVER+"/movement/"+id, {headers: header})
				.subscribe(data => {
					console.log(data);
					this.onCart();
				}, error => {
					console.log(error);
				});
			}else{
				this.httpClient.put(this.REST_API_SERVER+"/movement/"+id, postData, {headers: header})
				.subscribe(data => {
					console.log(data);
					this.onCart();
					this.isSend = false;
				}, error => {
					this.isSend = false;	
					console.log(error);
				});
			}
			console.log(postData)
		   
	   }
	
 }

  onCart(){
      var header = {
		'Content-Type': 'application/json',
		'enctype': 'application/json',
		'Accept': '*',
		'Authorization': 'Bearer '+this.walletId,
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
		'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
	   };
	       this.httpClient.get(this.REST_API_SERVER+"/cart/"+this.Uuid, {headers: header})
			.subscribe(data => {
					console.log(data);
					this.cartprod=data;
					let total = 0;
					this.amountTotal = 0;
					this.cartprod.forEach((line, index) => {
					   console.log(line.label);
					   this.amountTotal = Number(this.amountTotal) + Number(line.total);
					   
						this.total=this.amountTotal;
						this.amount=this.amountTotal;
						this.amountouttaxe=this.amountTotal;
					   if(!line.label) {
						  this.cartprod.splice(index, 1);
					   }
					});
				}, error => {	
					console.log(error);
			});
  }
  
  async operationModal(id:number, code:string) {
	
	const modal = await this.modalCtrl.create({
			  component: NewoperationPage,
			  componentProps: {
				'param1': id, 
				'param2': this.param1,
				'param3': code
			  }
			});

			
			modal.onDidDismiss().then(data=>{
				console.log(data)
				this.onList();	
			})
			return await modal.present();
  }
  
  async presentModal() {
	
	if(this.param1=="1"){
		this.selid = 'client';
		this.seltitle = 'Clients';
		const modal = await this.modalCtrl.create({
			  component: PartnerPage,
			  componentProps: {
				'param1': this.selid,
				'param2': this.seltitle
			  }
			});

			
			modal.onDidDismiss().then(data=>{
				console.log(data)
				this.partnercode= data['data'];
				this.partner= data['role'];
			})
			return await modal.present();
		if(this.param2=="2"){
			
		}
	}else{
		this.selid = 'fournisseur';
		this.seltitle = 'Fournisseurs';
		if(this.param1=="2"){
			const modal = await this.modalCtrl.create({
				  component: PartnerPage,
				  componentProps: {
					'param1': this.selid,
					'param2': this.seltitle
				  }
				});

				
				modal.onDidDismiss().then(data=>{
					console.log(data)
					this.partnercode= data['data'];
					this.partner= data['role'];
				})
				return await modal.present();
			
			if(this.param2=="2"){
				
			}
		}
	}
	
    
  }
  async addlineModal() {
	
		    const modal = await this.modalCtrl.create({
			  component: AddtocartPage,
			  componentProps: {
				'param1': this.Uuid,
			  }
			});

			
			modal.onDidDismiss().then(data=>{
				this.onCart();
			})
			return await modal.present();
    
  }
  async autoModal() {
	
		    const modal = await this.modalCtrl.create({
			  component: SelectautomobilePage,
			  componentProps: {
				'param1': '0',
				'param2': 'Automobiles',
			  }
			});

			
			modal.onDidDismiss().then(data=>{
				
				this.parameter= data['data'];
				this.parameterlabel= data['role'];
			})
			return await modal.present();
    
  }
  
  searchForm(){
	   this.showsearchForm = true;
  }
  onCancelNew(){
	   this.addForm = false;
  }
  
  onAdd(): any{
      this.isSend = false;
	  if (!this.categForm.valid) {
		
	  }else {
	   const title = this.categForm.get('title')?.value;
	   const parameter = this.categForm.get('parameter')?.value;
	   const parameterlabel = this.categForm.get('parameterlabel')?.value;
	   const total = this.categForm.get('total')?.value;
	   const discount = this.categForm.get('discount')?.value;
	   const amounttaxe = this.categForm.get('amounttaxe')?.value;
	   const amountouttaxe = this.categForm.get('amountouttaxe')?.value;
	   const amount = this.categForm.get('amount')?.value;
	   const reference = this.categForm.get('reference')?.value;
	   const date = this.categForm.get('date')?.value;
	   const echeance = this.categForm.get('echeance')?.value;
	   const partner = this.categForm.get('partner')?.value;
	   const partnercode = this.categForm.get('partnercode')?.value;
	   const phone1 = this.categForm.get('phone1')?.value;
	   const email = this.categForm.get('email')?.value;
	   const address = this.categForm.get('address')?.value;
	   const city = this.categForm.get('city')?.value;
				   
	   const account = this.categForm.get('account')?.value;
	   const description = this.categForm.get('description')?.value;
	   const event = this.categForm.get('event')?.value;
	   const task = this.categForm.get('task')?.value;
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
			    parameter: parameter,
			    parameterlabel: parameterlabel,
			    total: amount,
				amountouttaxe: amountouttaxe,
				discount: discount,
				amounttaxe: amounttaxe,
			    amount: amount,
			    stayamount: amount,
			    addDate: date,
			    eventDate: echeance,
			    reference: reference,
			    partner: partner,
			    partnercode: partnercode,
				phone1: phone1,
				email: email,
				address: address,
				city: city,
			    description: description,
			    uui: this.Uuid,
			    type: this.param1,
			    category: this.param2,
			    account: account,
			    counted: this.counted,
			    event: event,
			    task: this.task,
				statut: 'En attente'
		    }
			
			console.log(postData)
			this.httpClient.post(this.REST_API_SERVER+"/bill", postData, {headers: header})
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
			    parameter: parameter,
			    parameterlabel: parameterlabel,
			    total: amount,
			    amount: amount,
			    stayamount: amount,
			    addDate: date,
			    eventDate: echeance,
			    reference: reference,
			    partner: partner,
			    partnercode: partnercode,
				phone1: phone1,
				email: email,
				address: address,
				city: city,
			    description: description,
			    account: account,
			    event: event,
			    task: task
		    }
		   this.httpClient.put(this.REST_API_SERVER+"/bill/"+this.id, postData, {headers: header})
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
      return result.showcases.filter(line => line.title === this.searchValue)
    });
  }
  
    applyFilter() {
	     let searchvalue = this.pageForm.get('word')?.value;
         let filterValueLower = searchvalue.toLowerCase();
		 
         if(searchvalue === '' ) {
             this.list=this.alllist;
         }else{
			
           this.list = this.alllist.filter(list => list.title.toLowerCase().includes(searchvalue.toLowerCase()));
         }
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
		this.httpClient.get(this.REST_API_SERVER+"/configs/"+this.categ, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.listcategories=data;
				
			}, error => {
				console.log(error);
		});
 }  
 onBillList(){
	this.results = [];
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
		
		if(this.param2=="COUNTED"){
			
			if(this._categ=="0"){
				if(this._date1=="" || this._date2==""){	
					this.httpClient.get(this.REST_API_SERVER+"/bills/type/counted/"+this.param1+"/"+this.counted, {headers: header})
					.subscribe(data => {
						console.log(data);
						
							this.results = data;
							this.amountBill=0;
						
						    this.payamountTotal = 0;
						    this.stayamountTotal = 0;
  
							this.results.forEach((line, index) => {
								this.amountBill = Number(this.amountBill) + Number(line.amount);
								this.payamountTotal = Number(this.payamountTotal) + Number(line.payamount);
								this.stayamountTotal = Number(this.stayamountTotal) + Number(line.stayamount);
							   if(!line.title) {
								  this.results.splice(index, 1);
							   }
							});
					}, error => {
						console.log(error);
					});
				}else{
					this.httpClient.get(this.REST_API_SERVER+"/bills/type/counted/dates/"+this.param1+"/"+this.counted+"/"+this._date1+"/"+this._date2, {headers: header})
						.subscribe(data => {
							console.log(data);
							
								this.results = data;
								this.amountBill=0;
						
								this.payamountTotal = 0;
								this.stayamountTotal = 0;
							
								this.results.forEach((line, index) => {
									this.amountBill = Number(this.amountBill) + Number(line.amount);
								this.payamountTotal = Number(this.payamountTotal) + Number(line.payamount);
								this.stayamountTotal = Number(this.stayamountTotal) + Number(line.stayamount);
								   if(!line.title) {
									  this.results.splice(index, 1);
								   }
								});
						}, error => {
							console.log(error);
						});
				
				}
			}else{
				if(this._date1=="" || this._date2==""){	
					this.httpClient.get(this.REST_API_SERVER+"/bills/type/counted/account/"+this.param1+"/"+this.counted+"/"+this._categ, {headers: header})
						.subscribe(data => {
							console.log(data);
							
								this.results = data;
								this.amountBill=0;
						
								this.payamountTotal = 0;
								this.stayamountTotal = 0;
							
								this.results.forEach((line, index) => {
									this.amountBill = Number(this.amountBill) + Number(line.amount);
									this.payamountTotal = Number(this.payamountTotal) + Number(line.payamount);
									this.stayamountTotal = Number(this.stayamountTotal) + Number(line.stayamount);
								   if(!line.title) {
									  this.results.splice(index, 1);
								   }
								});
						}, error => {
							console.log(error);
						});
				}else{
					this.httpClient.get(this.REST_API_SERVER+"/bills/type/counted/account/dates/"+this.param1+"/"+this.counted+"/"+this._categ+"/"+this._date1+"/"+this._date2, {headers: header})
						.subscribe(data => {
							console.log(data);
							
								this.results = data;
								this.amountBill=0;
						
								this.payamountTotal = 0;
								this.stayamountTotal = 0;
							
								this.results.forEach((line, index) => {
									this.amountBill = Number(this.amountBill) + Number(line.amount);
									this.payamountTotal = Number(this.payamountTotal) + Number(line.payamount);
									this.stayamountTotal = Number(this.stayamountTotal) + Number(line.stayamount);
								   if(!line.title) {
									  this.results.splice(index, 1);
								   }
								});
						}, error => {
							console.log(error);
						});
				
				}
				
			}	
 
		}else{
			if(this._categ=="0"){
				if(this._date1=="" || this._date2==""){	
					this.httpClient.get(this.REST_API_SERVER+"/bills/type/categ/"+this.param1+"/"+this.param2, {headers: header})
					.subscribe(data => {
						console.log(data);
						
							this.results = data;
							this.amountBill=0;
						
								this.payamountTotal = 0;
								this.stayamountTotal = 0;
						
							this.results.forEach((line, index) => {
								this.amountBill = Number(this.amountBill) + Number(line.amount);
									this.payamountTotal = Number(this.payamountTotal) + Number(line.payamount);
									this.stayamountTotal = Number(this.stayamountTotal) + Number(line.stayamount);
							   if(!line.title) {
								  this.results.splice(index, 1);
							   }
							});
					}, error => {
						console.log(error);
					});
				}else{
					this.httpClient.get(this.REST_API_SERVER+"/bills/type/categ/dates/"+this.param1+"/"+this.param2+"/"+this._date1+"/"+this._date2, {headers: header})
					.subscribe(data => {
						console.log(data);
						
							this.results = data;
							this.amountBill=0;
						
								this.payamountTotal = 0;
								this.stayamountTotal = 0;
						
							this.results.forEach((line, index) => {
								this.amountBill = Number(this.amountBill) + Number(line.amount);
									this.payamountTotal = Number(this.payamountTotal) + Number(line.payamount);
									this.stayamountTotal = Number(this.stayamountTotal) + Number(line.stayamount);
							   if(!line.title) {
								  this.results.splice(index, 1);
							   }
							});
					}, error => {
						console.log(error);
					});
				}
				
				
			}else{
				if(this._date1=="" || this._date2==""){	
					this.httpClient.get(this.REST_API_SERVER+"/bills/type/categ/account/"+this.param1+"/"+this.param2+"/"+this._categ, {headers: header})
					.subscribe(data => {
						console.log(data);
						
							this.results = data;
							this.amountBill=0;
						
								this.payamountTotal = 0;
								this.stayamountTotal = 0;
						
							this.results.forEach((line, index) => {
								this.amountBill = Number(this.amountBill) + Number(line.amount);
									this.payamountTotal = Number(this.payamountTotal) + Number(line.payamount);
									this.stayamountTotal = Number(this.stayamountTotal) + Number(line.stayamount);
							   if(!line.title) {
								  this.results.splice(index, 1);
							   }
							});
					}, error => {
						console.log(error);
					});
				}else{
					this.httpClient.get(this.REST_API_SERVER+"/bills/type/categ/account/date/"+this.param1+"/"+this.param2+"/"+this._categ+"/"+this._date1+"/"+this._date2, {headers: header})
					.subscribe(data => {
						console.log(data);
						
							this.results = data;
							this.amountBill=0;
						
								this.payamountTotal = 0;
								this.stayamountTotal = 0;
						
							this.results.forEach((line, index) => {
								this.amountBill = Number(this.amountBill) + Number(line.amount);
									this.payamountTotal = Number(this.payamountTotal) + Number(line.payamount);
									this.stayamountTotal = Number(this.stayamountTotal) + Number(line.stayamount);
							   if(!line.title) {
								  this.results.splice(index, 1);
							   }
							});
					}, error => {
						console.log(error);
					});
				}
				
				
			}	
 
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
		if(this.param2=="COUNTED"){
			this.httpClient.get(this.REST_API_SERVER+"/bills/type/counted/"+this.param1+"/"+this.counted, {headers: header})
				.subscribe(data => {
					console.log(data);
					this.results = data;
					
					this.amountBill=0;
					this.payamountTotal = 0;
					this.stayamountTotal = 0;
					this.results.forEach((line, index) => {
							this.amountBill = Number(this.amountBill) + Number(line.amount);
									this.payamountTotal = Number(this.payamountTotal) + Number(line.payamount);
									this.stayamountTotal = Number(this.stayamountTotal) + Number(line.stayamount);
						   if(!line.title) {
							  this.results.splice(index, 1);
						   }
						});
				}, error => {
					console.log(error);
			});
		}else{
			this.httpClient.get(this.REST_API_SERVER+"/bills/type/categ/"+this.param1+"/"+this.param2, {headers: header})
				.subscribe(data => {
					console.log(data);
					this.results = data;
					
					this.amountBill=0;
					this.payamountTotal = 0;
					this.stayamountTotal = 0;
					this.results.forEach((line, index) => {
							this.amountBill = Number(this.amountBill) + Number(line.amount);
									this.payamountTotal = Number(this.payamountTotal) + Number(line.payamount);
									this.stayamountTotal = Number(this.stayamountTotal) + Number(line.stayamount);
						   if(!line.title) {
							  this.results.splice(index, 1);
						   }
						});
				}, error => {
					console.log(error);
			});
		}
 } 	
 onEdit(){
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
		this.httpClient.get(this.REST_API_SERVER+"/bills/type/"+this.param1, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.results = data;
			}, error => {
				console.log(error);
		});
 }
 
 onPay(id:string){
	
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
		this.httpClient.delete(this.REST_API_SERVER+"/bill/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.onList();
			}, error => {
				console.log(error);
		});
 }
 onUpdateStatus(i:number, id:number, statut:string){

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
			statut: statut
		}
		this.httpClient.put(this.REST_API_SERVER+"/bill/"+id, postData, {headers: header})
			.subscribe(data => {
				console.log(data);
				//console.log(i);
				//this.results[i]=data['statut'];
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
		this.httpClient.get(this.REST_API_SERVER+"/bill/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.addForm = true;
				this.step = true;
				this.liboperation = "MODIFICATION";
				this.id = data['id'];
				if(data['addDate']!="" && data['addDate']!=null){
					let date01 = data['addDate'];
					let date1 = date01.substr(0, 10);
					this.date = date1;
				}
				
				if(data['eventDate']!="" && data['eventDate']!=null){
					let date02 = data['eventDate'];
					let date2 = date02.substr(0, 10);
					this.echeance = date2;
				}
				
				this.title = data['title'];
				this.parameter = data['parameter'];
				this.parameterlabel = data['parameterlabel'];
				this.amountTotal = data['amount'];
				this.account = data['account'];
				this.reference = data['reference'];
				this.partner = data['partner'];
				this.partnercode = data['partnercode'];
				this.phone1 = data['phone1'];
				this.email = data['email'];
				this.address = data['address'];
				this.city = data['city'];
				this.description = data['description'];
				this.event = data['event'];
				
				//this.onList();
			}, error => {
				console.log(error);
		});
 }
  onProductsList(){
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
				this.list = data;
				this.alllist = data;
			}, error => {
				console.log(error);
		});
   }
   onListProjet(){
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
	   this.httpClient.get(this.REST_API_SERVER+"/event/category/project", {headers: header})
			.subscribe(data => {
					console.log(data);
					this.projets = data;
				}, error => {
					console.log(error);
			});
		
 }
 

}
