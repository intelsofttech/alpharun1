import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { PopoverController, ToastController ,ActionSheetController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { Media, MediaObject } from '@awesome-cordova-plugins/media/ngx';
import { v4 as uuidv4 } from 'uuid';
import { PartnerPage } from '../partnerselection/partner.page';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.page.html',
  styleUrls: ['./recette.page.scss'],
})
export class RecettePage implements OnInit {

  
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
  step = false;
  isSend = false;
  param1 :any= "0";
  param2 :any= "0";
  searchValue :any= "0";
  id :any= "0";
  idcart :any= "0";
  indexid :any= "0";
  title :any= "RECETTE/VENTE";
  amount :any= "";
  addDate :any= "";
  reference :any= "";
  partner :any= "";
  partnercode :any= "";
  category :any= "";
  locateurl :any= "";
  description :any= "";
  liboperation :any= "AJOUT";
  word :any= "";
  Uuid :any= "AJOUT";
  selid :any = 'client';
  seltitle :any = 'Client';
  amountTotal :any= 0;
  public results :any = [];
  public alllist :any = [];
  public list :any = [];
  public filtered :any = [];
  public cartprod :any = [];
  public listcategories :any = [];
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
				   title: ['', [Validators.required]],
				   amount: [''],
				   addDate: [''],
				   reference: [''],
				   partner: [''],
				   partnercode: [''],
				   category: [''],
				   locateurl: [''],
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
	this.param1 = this.activatedRoute.snapshot.paramMap.get('param1');
	this.param2 = this.activatedRoute.snapshot.paramMap.get('param2');
	console.log(this.walletId)
	this.onList();	
	this.onProductsList();	
	this.onCategorieList();
	
  }
  handleInput(event:any) {
    const query = event.target.value.toLowerCase();
    //this.results = this.results.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }
   
  onNew(){
       this.Uuid =uuidv4();
	   console.log(this.Uuid)
	   this.addForm = true;
	   this.id = "0";
	   this.liboperation = "AJOUT";
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
				this.onAddTocart(movid, idprod, prod, newqte, prixvente, total, totalmargin);
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
	   if(id==0){
			let postData = {
				label: product,
				quantity : qte,
				price : prix,
				total : total,
				margin : margin,
				direction : 'add',
				productid : idprod,
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
				productid : idprod
		    }
			console.log(postData)
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
					this.cartprod.forEach((line, index) => {
					   console.log(line.label);
					   this.amountTotal = Number(this.amountTotal) + Number(line.total);
					   
					   if(!line.label) {
						  this.cartprod.splice(index, 1);
					   }
					});
					
				}, error => {	
					console.log(error);
			});
  }
  
  async presentModal() {
	
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
  }
  
  onCancelNew(){
	   this.addForm = false;
  }
  
  onAdd(): any{
      this.isSend = false;
	  if (!this.categForm.valid) {
		
	  }else {
	   const title = this.categForm.get('title')?.value;
	   const amount = this.categForm.get('amount')?.value;
	   const partner = this.categForm.get('partner')?.value;
	   const partnercode = this.categForm.get('partnercode')?.value;
	   const category = this.categForm.get('category')?.value;
	   const description = this.categForm.get('description')?.value;
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
	   
	   alert(this.id)
	   if(this.id=="0"){
			
			let postData = {
				title: title,
			    amount: 'amount',
			    partner: partner,
			    partnercode: 'partnercode',
			    description: description,
			    uui: this.Uuid,
			    type: this.param1,
			    category: category
		    }
			let postData2 = {
				label: title,
			    amount: amount,
			    partner: partner,
			    partnercode: partnercode,
			    description: description,
			    uui: this.Uuid,
			    type: this.param1,
			    category: category
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
			    amount: amount,
			    partner: partner,
			    partnercode: partnercode,
			    description: description,
			    category: category
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
		this.httpClient.get(this.REST_API_SERVER+"/configs/recette", {headers: header})
			.subscribe(data => {
				console.log(data);
				this.listcategories=data;
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
	   let postData = {
			
		}
		this.httpClient.get(this.REST_API_SERVER+"/bills/category/"+this.param1, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.results = data;
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
		this.httpClient.delete(this.REST_API_SERVER+"/config/"+id, {headers: header})
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
		this.httpClient.get(this.REST_API_SERVER+"/config/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.addForm = true;
				this.liboperation = "MODIFICATION";
				this.id = data['id'];
				this.title = data['title'];
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
}
