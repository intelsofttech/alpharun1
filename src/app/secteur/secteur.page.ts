import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { PopoverController, NavParams, ToastController ,ActionSheetController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-secteur',
  templateUrl: './secteur.page.html',
  styleUrls: ['./secteur.page.scss'],
})
export class SecteurPage implements OnInit {

  
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
  imgbaseUrl = "";
  word = "";
  pageForm: FormGroup;
  eventForm: FormGroup;
 

  public results :any = [];
  public alllist :any = [];
  
  imageurl:any = "../assets/images/default-img.jpg";
  
 constructor(public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  public httpClient: HttpClient,
			  private params: NavParams) {
			  this.pageForm = this.formBuilder.group({
				 word: ['']
			  })
			 
			}

  		 
  backcolor1 :any = "#194eda";
  backcolor2 :any = "#194eda";
  textcolor :any = "#ffffff";
  
  simpleform :any = false;
  isSend :any = false;
  
  
  type :any = "";
  libelle :any = "";
  photo :any = "";
  liboperation :any = "";
  cashdesk :any = "grid";
  
  showmode :any = "grid";
  
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
	this.type=  this.params.get('type');
	this.libelle=  this.params.get('libelle');
	this.onList();
	
  }

  applyFilter() {
	     
	   const filterValue = this.pageForm.get('word')?.value;
       //**let filterValueLower = filterValue.toLowerCase();
         if(filterValue == '' ) {
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
		
		this.httpClient.get(this.REST_API_SERVER+"/configs/parameter/"+this.type, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.results = data;
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
