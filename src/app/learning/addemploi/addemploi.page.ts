import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, NavParams, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addemploi',
  templateUrl: './addemploi.page.html',
  styleUrls: ['./addemploi.page.scss'],
})
export class AddemploiPage implements OnInit {

  
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
  partnercode :any = "";
  partner :any = "";
  id :any = "";
  indexid :any = "";
  
  param1 :any= "0";
  param2 :any= "0";
  param3 :any= "0";
  param4 :any= "0";
  
  horaireid :any= "0";
  horaire :any= "0";
  day :any= "0";
  classe :any= "0";
  classname :any= "";
  niveau :any= "0";
  matiereid :any= "0";
  matiere :any= "0";
  enseignant :any= "0";
  enseignantid :any= "0";
  
  public results :any = [];
  
  constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient,
			  private params: NavParams) { }

  	 
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
		
		this.param1=  this.params.get('param1');
		this.param2=  this.params.get('param2');
		this.param3=  this.params.get('param3');
		this.param4=  this.params.get('param4');
		
		this.horaireid = this.param2;
		this.horaire = this.param4;
		this.day = this.param3;
		this.classe = this.param1;
		this.onGetclass(this.classe);
  
	this.onList();
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
	  
		this.httpClient.get(this.REST_API_SERVER+"/materialclass/class/"+this.param1, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.results = data;
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
		this.httpClient.get(this.REST_API_SERVER+"/materialclass/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				console.log(data['materialid']);
				
				
				this.matiereid = data['materialid'];
				this.matiere = data['label'];
	            this.enseignant = data['partnername'];
	            this.enseignantid = data['partner'];
				this.onAddemploi();
				
			}, error => {
				console.log(error);
		});
 }
 
 
 
 onGetclass(id:string){
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
		this.httpClient.get(this.REST_API_SERVER+"/classlist/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.classname = data['label'];
			}, error => {
				console.log(error);
		});
 }
 
 
 
onAddemploi(){
   
    if(this.horaireid!="0"){
	
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
				period: this.horaireid,
				periodlabel: this.horaire,
				weekday: this.day,
				classid: this.classe,
				classname: this.classname,
				materialid: this.matiereid,
				materialname: this.matiere,
				teacherid: this.enseignantid,
				teachername: this.enseignant
		    }
			console.log(postData);
			this.httpClient.post(this.REST_API_SERVER+"/schedule", postData, {headers: header})
			.subscribe(data => {
					console.log(data);
					this.closemodal("0","0")
				}, error => {	
					console.log(error);
			});
			
			
	}
}
 
onselect(id:string)
  {
    this.onGet(id);
    //this.modalCtrl.dismiss(id,'0');

  }
 closemodal(code:string,libelle:string)
 {
    this.modalCtrl.dismiss(code,libelle);

 }

}
