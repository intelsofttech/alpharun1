import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { PopoverController, NavParams, ToastController ,ActionSheetController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-ville',
  templateUrl: './ville.page.html',
  styleUrls: ['./ville.page.scss'],
})
export class VillePage implements OnInit {

  
 
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
  
  
  photo :any = "";
  liboperation :any = "";
  cashdesk :any = "grid";
  
  showmode :any = "grid";
  idcountry :any = "0";
  indicatif :any = "0";
  
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
	
	
	this.idcountry=  this.params.get('id');
	
	console.log(this.idcountry);
	this.onGetcountryinfo(this.idcountry);
	
	
  }

  applyFilter() {
	     
	   const filterValue = this.pageForm.get('word')?.value;
         if(filterValue == '' ) {
             this.results=this.alllist;
         }else{
			
           this.results = this.alllist.filter(results => results.name.toLowerCase().includes(filterValue.toLowerCase()));
         }
   }
 
 onList(){
		
		this.httpClient.get(this.REST_API_SERVER+"/cities/country/"+this.indicatif)
			.subscribe(data => {
				console.log(data);
				this.results=data;
				this.alllist=data;
			}, error => {
				console.log(error);
		});
 }
 
 onGetcountryinfo(id:any){
		
		this.httpClient.get(this.REST_API_SERVER+"/countries/"+id)
			.subscribe(data => {
				console.log(data);
				this.indicatif=data['id'];
				console.log(this.indicatif);
				this.onList();
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
