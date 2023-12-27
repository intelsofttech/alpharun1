import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
import { SelectpropertyPage } from '../selectproperty/selectproperty.page';


@Component({
  selector: 'app-arriere',
  templateUrl: './arriere.page.html',
  styleUrls: ['./arriere.page.scss'],
})
export class ArrierePage implements OnInit {


  
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
  
  param1 : any = "";
  param2 : any = "";
  word : any = "";
  proprieteid : any = "0";
  propriete : any = "Toutes";
  statut : any = "1";
				 
				 
  listmode = false;
  gridmode = true;
  indexnum :number = 0;
  public results :any = [];
  public alllist :any = [];
  
  constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient) {
			  this.pageForm = this.formBuilder.group({
				 word: [''],
				 proprieteid: [''],
				 propriete: [''],
				 statut: ['']
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
		
		this.onList();	
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

 

  async onSelectPropriete(){
  
		const modal = await this.modalCtrl.create({
			  component: SelectpropertyPage,
			  componentProps: {
				'param1': 'gestion',
				'param2': 'Propriétés',
			  }
			});

			
			modal.onDidDismiss().then(data=>{
				console.log(data)
				this.proprieteid= data['data'];
				this.propriete= data['role'];
				this.onList();
			})
			return await modal.present();
 }
	
	
  onRefresh(){
	
		this.proprieteid = this.pageForm.get('proprieteid')?.value;
        this.statut = this.pageForm.get('statut')?.value;
			
		
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
		this.proprieteid = this.pageForm.get('proprieteid')?.value;
		if(this.param1=="0"){
			if(this.proprieteid=="0"){
				this.httpClient.get(this.REST_API_SERVER+"/apartment/unpaid/apikey", {headers: header})
				.subscribe(data => {
					console.log(data);
					this.results = data;
					this.alllist = data;
				}, error => {
						console.log(error);
				});
			}else{
				
				this.httpClient.get(this.REST_API_SERVER+"/apartment/unpaid/apikey", {headers: header})
				.subscribe(data => {
					console.log(data);
					this.results = data;
					this.alllist = data;
				}, error => {
						console.log(error);
				});
			}
		}else{
				this.httpClient.get(this.REST_API_SERVER+"/apartment/unpaid/tenant/"+this.param1, {headers: header})
				.subscribe(data => {
					console.log(data);
					this.results = data;
					this.alllist = data;
				}, error => {
						console.log(error);
				});
		}
  }
  
  
}
