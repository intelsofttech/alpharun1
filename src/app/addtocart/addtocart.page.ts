import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, NavParams, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { ProductselectionPage } from '../productselection/productselection.page';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.page.html',
  styleUrls: ['./addtocart.page.scss'],
})
export class AddtocartPage implements OnInit {

 
  
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
  Uuid :any ="";
  
  id :any= "";
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
  image :any= "";
  imageurl :any= "";
				
 constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient,
			  private params: NavParams) {
			  
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
	this.Uuid=  this.params.get('param1');
	
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
	var _detail: any =document.getElementById("detail")  as HTMLElement;
	var detail= _detail.value;
	
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
				description : detail,
				direction : "NO",
				productid : "0",
				uui : this.Uuid
		    }
			console.log(postData)
			this.httpClient.post(this.REST_API_SERVER+"/movement", postData, {headers: header})
			.subscribe(data => {
					console.log(data);
					this.closemodal("0", "0");
				}, error => {
					
			});
    
  }
  
 async ProductModal() {
	const modal = await this.modalCtrl.create({
		component: ProductselectionPage,
		componentProps: {
			'param1': 'product',
			'param2': 'listproduit',
		}
	});
	modal.onDidDismiss().then(data=>{
		console.log(data);
		this.onGet(data.data);
	})
	return await modal.present();
    
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
				//this.imageurl=this.imgbaseUrl+"/uploads/"+data['image'];
				
				var _design: any =document.getElementById("design")  as HTMLElement;
				_design.value = this.title;
				var _unity: any =document.getElementById("unity")  as HTMLElement;
				_unity.value = this.unit;
				var _qty: any =document.getElementById("qty")  as HTMLElement;
				_qty.value = '1';
				var _prixu: any =document.getElementById("prixu")  as HTMLElement;
				_prixu.value = this.sellingprice;
				var _detail: any =document.getElementById("detail")  as HTMLElement;
				_detail.value = this.resume;
				
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
