import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
import { AddemploiPage } from '../addemploi/addemploi.page';

@Component({
  selector: 'app-configemploi',
  templateUrl: './configemploi.page.html',
  styleUrls: ['./configemploi.page.scss'],
})
export class ConfigemploiPage implements OnInit {


   
  
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
  
  public horaires :any = [];
  public results :any = [];
  public parents :any = [];
  public alllist :any = [];
  public filtered :any = [];
  public niveaux :any = [];
 constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient) {
			 
			}

  	 
  backcolor1 :any = "#194eda";
  backcolor2 :any = "#194eda";
  textcolor :any = "#ffffff";
  
  
  typeemlpoi :any = "0";
  year :any = "0";
  param1 :any = "0";
  param2 :any = "0";
  param3 :any = "0";
  
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
	var year_html: any =document.getElementById("yearSco")  as HTMLElement;
	this.year= year_html.value;
		
	
	this.param1 = this.activatedRoute.snapshot.paramMap.get('param1');
	this.param2 = this.activatedRoute.snapshot.paramMap.get('param2');	
	this.param3 = this.activatedRoute.snapshot.paramMap.get('param3');	
	this.onHoraire();
  }
   onHoraire(){
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
	   
	    ///configs/compte/classcode/"+this.typeemlpoi+"/"+this.param2+"/horaire/"+this.param2
		this.httpClient.get(this.REST_API_SERVER+"/configs/compte/classcode/"+this.typeemlpoi+"/"+this.param1+"/horaire/"+this.param2, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.horaires = data['horaires'];
			}, error => {
				console.log(error);
			});
		
 } 
 
   onDeleteemp(id:any){

	   this.httpClient.delete(this.REST_API_SERVER+"/schedule/"+id)
			.subscribe(data => {
				this.onHoraire();
			}, error => {
				console.log(error);
			});
		
 } 
 async presentModal(id:string, day:string, daylabel:string) {
  
		
			const modal = await this.modalCtrl.create({
			  component: AddemploiPage,
			  componentProps: {
				'param1': this.param1,
				'param2': id,
				'param3': day,
				'param4': daylabel
			  }
			});
			modal.onDidDismiss().then(data=>{
				console.log(data)
				this.onHoraire();
			})
			return await modal.present();
    
  }
}
