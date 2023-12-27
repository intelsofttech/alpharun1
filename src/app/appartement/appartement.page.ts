import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-appartement',
  templateUrl: './appartement.page.html',
  styleUrls: ['./appartement.page.scss'],
})
export class AppartementPage implements OnInit {

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
  typeForm: FormGroup;
  
	caution = "";
	avance = "";
	agence = "";
	tva = "";
	cautionmois = "";
	avancemois = "";
	agencemois = "";
	tvataux = "";
	dossier = "";
	total1 = "";
	bail = "";
	cie = "";
	dijoncteur = "";
	sodeci = "";
	total2 = "";
	netapayer = "";
	
	
	file1="";
	file2="";
	file3="";
	file4="";
	file5="";
	file6="";
	file7="";
	file8="";
	file9="";
	file10="";
	facture :any=false;
	param1 :any = "";
	param2 :any = "";
	
	imageurl1="assets/images/default.jpg";
	imageurl2="assets/images/default.jpg";
	imageurl3="assets/images/default.jpg";
	imageurl4="assets/images/default.jpg";
	imageurl5="assets/images/default.jpg";
	imageurl6="assets/images/default.jpg";
	imageurl7="assets/images/default.jpg";
	imageurl8="assets/images/default.jpg";
	imageurl9="assets/images/default.jpg";
	imageurl10="assets/images/default.jpg";
  constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient) {

			  this.categForm = this.formBuilder.group({
					caution: [''],
					avance: [''],
					agence: [''],
					tva: [''],
					cautionmois: [''],
					avancemois: [''],
					agencemois: [''],
					tvataux: [''],
					dossier: [''],
					total1: [''],
					bail: [''],
					cie: [''],
					dijoncteur: [''],
					sodeci: [''],
					total2: [''],
					netapayer: [''],
					file1: [''],
					file2: [''],
					file3: [''],
					file4: [''],
					file5: [''],
					file6: [''],
					file7: [''],
					file8: [''],
					file9: [''],
					file10: ['']
			  })
			
			  }

  ngOnInit() {
  
	var api_html: any =document.getElementById("API_SERVER")  as HTMLElement;
	this.REST_API_SERVER= api_html.value;
	
	this.param1 = this.activatedRoute.snapshot.paramMap.get('param1');
	this.param2 = this.activatedRoute.snapshot.paramMap.get('param2');
	if(this.param1=="facture"){
		this.facture=true;
	} 
	this.onGet(this.param2)
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
		this.httpClient.get(this.REST_API_SERVER+"/apartment/code/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				
				if(data['file1']!=""){
				this.onGetImageone(data['file1'], "file1");
				}
				if(data['file2']!=""){
				this.onGetImageone(data['file2'], "file2");
				}
				if(data['file3']!=""){
				this.onGetImageone(data['file3'], "file3");
				}
				if(data['file4']!=""){
				this.onGetImageone(data['file4'], "file4");
				}
				if(data['file5']!=""){
				this.onGetImageone(data['file5'], "file5");
				}
				if(data['file6']!=""){
				this.onGetImageone(data['file6'], "file6");
				}
				if(data['file7']!=""){
				this.onGetImageone(data['file7'], "file7");
				}
				if(data['file8']!=""){
				this.onGetImageone(data['file8'], "file8");
				}
				if(data['file9']!=""){
				this.onGetImageone(data['file9'], "file9");
				}
				if(data['file10']!=""){
				this.onGetImageone(data['file10'], "file10");
				}
			}, error => {
				console.log(error);
		});
 }
   onGetImageone(name:string, img:any){
	if(name!=""){	
		this.httpClient.get(this.REST_API_SERVER+"/file/name/"+name)
			.subscribe(data => {
				console.log(data);
				if(img=="file1"){
					this.imageurl1 =data['content'];
				}
				if(img=="file2"){
					this.imageurl2 =data['content'];
				}
				if(img=="file3"){
					this.imageurl3 =data['content'];
				}
				if(img=="file4"){
					this.imageurl4 =data['content'];
				}
				if(img=="file5"){
					this.imageurl5 =data['content'];
				}
				if(img=="file6"){
					this.imageurl6 =data['content'];
				}
				if(img=="file7"){
					this.imageurl7 =data['content'];
				}
				if(img=="file8"){
					this.imageurl8 =data['content'];
				}
				if(img=="file9"){
					this.imageurl9 =data['content'];
				}
				if(img=="file10"){
					this.imageurl10 =data['content'];
				}
			}, error => {
				console.log(error);
		});
	}	
 }
 
 
}
