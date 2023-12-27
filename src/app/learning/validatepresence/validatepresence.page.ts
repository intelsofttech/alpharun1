import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, NavParams, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-validatepresence',
  templateUrl: './validatepresence.page.html',
  styleUrls: ['./validatepresence.page.scss'],
})
export class ValidatepresencePage implements OnInit {


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
  enscode = "";
  
  constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient,
			  private params: NavParams) { }

  
  	 
  backcolor1 :any = "#194eda";
  backcolor2 :any = "#194eda";
  textcolor :any = "#ffffff";
  
  isSend = false
  
  typeemlpoi :any = "0";
  year :any = "0";
  param1 :any = "0";
  param2 :any = "0";
  param3 :any = "0";
  
  
  scheduleid :any = "";
  addDate :any = "";
  day :any = "";
  heure :any = "";
  period :any = "";
  materialid :any = "";
  material :any = "";
  classlist :any = "";
  classlistcode :any = "";
  value :any = "";
  planingcode :any = "";
  partner :any = "";
  partnername :any = "";
  level = "";
  usercode = "";
  username = "";
				
  showmode :any = "grid";
  
  ngOnInit() {
  
		var api_html: any =document.getElementById("API_SERVER")  as HTMLElement;
		this.REST_API_SERVER= api_html.value;
		var walletId_html: any =document.getElementById("walletId")  as HTMLElement;
		this.walletId= walletId_html.value;
		
		
		this.addDate=  this.params.get('date');
		this.day=  this.params.get('day');
		this.scheduleid=  this.params.get('id');
		this.onFoundschedule(this.scheduleid);
		var backcolor1_html: any =document.getElementById("backcolor1")  as HTMLElement;
		this.backcolor1= backcolor1_html.value;
		
		var backcolor2_html: any =document.getElementById("backcolor2")  as HTMLElement;
		this.backcolor2= backcolor2_html.value;
		
		var textcolor_html: any =document.getElementById("textcolor")  as HTMLElement;
		this.textcolor= textcolor_html.value;
  }


  onFoundschedule(id:any){
		
		 this.httpClient.get(this.REST_API_SERVER+"/schedule/"+id)
			.subscribe(data => {
				  console.log(data);
				  this.period = data['period'];
				  this.heure = data['periodlabel'];
				  this.materialid = data['materialid'];
				  this.material = data['materialname'];
				  this.classlist = data['classname'];
				  this.classlistcode = data['classid'];
				  this.value = "";
				  this.planingcode = id;
				  this.partner = data['teacherid'];
				  this.partnername = data['teachername'];
				  this.level = "";
				  this.usercode = "";
				  this.username = "";
				  this.onGet(data['teacherid']);
		
				}, error => {
					console.log(error);
				});
			
	
	}
	
  onAddpresence(){
		this.isSend=true;
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
					title: "Title",
					addDate: this.addDate,
					day: this.day,
					period: this.period,
					materialid: this.materialid,
					material: this.material,
					classlist: this.classlist,
					classlistcode: this.classlistcode,
					value: this.value,
					parameter: this.heure,
					planingcode: this.planingcode,
					partner: this.partner,
					partnername: this.partnername,
					level: this.level,
					usercode: this.usercode,
					username: this.username,
					category: 'enseignent'
				}
				this.httpClient.post(this.REST_API_SERVER+"/present", postData, {headers: header})
				.subscribe(data => {
						console.log(data);
						this.modalCtrl.dismiss(data['id'],'Success');
					}, error => {	
						console.log(error);
						this.isSend=false;
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
				console.log(data['walletId']);
				this.enscode = data['walletId'];
				this.onGetprice(this.materialid, this.enscode);
			}, error => {
				console.log(error);
		});
 }
 	
 onGetprice(id:string, enscode:string){
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
		this.httpClient.get(this.REST_API_SERVER+"/configs/parameter/param/"+enscode+"/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				console.log(data[0]['amount']);
				this.value = data[0]['amount'];
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
