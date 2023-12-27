import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-saisienotes',
  templateUrl: './saisienotes.page.html',
  styleUrls: ['./saisienotes.page.scss'],
})
export class SaisienotesPage implements OnInit {


  
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
  year = "";
  pageForm: FormGroup;
  categForm: FormGroup;
  
  param1 : any = "";
  param2 : any = "";
  param3 : any = "";
  
  reference : any = "";
  filiere : any = "";
  periode : any = "";
  matiere : any = "";
  note : any = "";
  libnote : any = "";
  maxnote : any = "";
  coefnote : any = "";
  id : any = "0";
  nb : any = "0";
  
  public periodes :any = [];
  public matieres :any = [];
  public list :any = [];
  public notes :any = [];
  public alllist :any = [];
  public filtered :any = [];
  public selectnotes :any = [];
  searchNotMatched = true;
  constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient) {
			  this.pageForm = this.formBuilder.group({
				 periode: [''],
				 matiere: [''],
				 note: ['']
			  })
			  this.categForm = this.formBuilder.group({
				   label: ['', [Validators.required]],
				   value: ['']
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
		
		
		var year_html: any =document.getElementById("yearSco")  as HTMLElement;
		this.year= year_html.value;
		
		this.param1 = this.activatedRoute.snapshot.paramMap.get('param1');
		this.param2 = this.activatedRoute.snapshot.paramMap.get('param2');
		this.param3 = this.activatedRoute.snapshot.paramMap.get('param3');
		
		var filiere_html: any =document.getElementById("filiere")  as HTMLElement;
		this.filiere= filiere_html.value;
		this.onListeleve();
		this.onListnote();
		this.onListperiodes(this.filiere);
		this.onListmatiere();
  }


 onListeleve(){
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
	   
		this.httpClient.get(this.REST_API_SERVER+"/users/group3/student/"+this.param1, {headers: header})
				.subscribe(data => {
							this.list = data;
							this.alllist = data;
							console.log(data);
				}, error => {
							console.log(error);
				});
		
 }
 

 onUpdateNote(noteid:any, idel:string, event:any, reference:any, i:any){
	
	console.log("-"+reference+"-");
	if(reference==""){
		this.id = "0";
	    const ref = Date.now();
		this.list[i].computer=ref;
		this.reference=ref;
	}else{
		this.reference=reference;
		this.id = reference;
	}
	
	console.log("**-"+this.reference+"-**");
	var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
	  
	let periode = this.pageForm.get('periode')?.value;
	let matiere = this.pageForm.get('matiere')?.value;
	let note = this.pageForm.get('note')?.value;
	
	const classcode = this.param1;
    const studentcode = idel;
    const materialcode = matiere;
    const periodcode = periode;
    const gradeconfigcode = note;
    const material = matiere;
    const value1 = event.target.value;
    const coef1 = this.coefnote;
    const on1 = this.maxnote;
    const year = this.year;
	
	if(this.id=="0"){
			let postData = {
				classcode: classcode,
				studentcode: studentcode,
				materialcode: materialcode,
				periodcode: periodcode,
				gradeconfigcode: gradeconfigcode,
				material: material,
				value1: value1,
				coef1: coef1,
				on1: on1,
				reference: this.reference,
				year: year
		    }
			this.httpClient.post(this.REST_API_SERVER+"/grade", postData, {headers: header})
			.subscribe(data => {
					console.log(data);
				}, error => {	
					console.log(error);
			});
	}else{
		let postData = {
				value1: value1
		    }
			this.httpClient.put(this.REST_API_SERVER+"/gradeupdate/"+this.reference, postData, {headers: header})
			.subscribe(data => {
					console.log(data);
				}, error => {	
					console.log(error);
			});
	}
			
 }
 
 
 onGetnote(id:string){
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
		this.httpClient.get(this.REST_API_SERVER+"/gradeconfig/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.libnote = data['label'];
				this.maxnote = data['onvalue'];
				this.coefnote = data['coef'];
			}, error => {
				console.log(error);
		});
 }
 ongrade(){
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
	    let periode = this.pageForm.get('periode')?.value;
		let matiere = this.pageForm.get('matiere')?.value;
		let note = this.pageForm.get('note')?.value;
		const classcode = this.param1;
		const year = this.year;
		
		this.httpClient.get(this.REST_API_SERVER+"/grades/class/periode/material/note/"+classcode+"/"+periode+"/"+matiere+"/"+year+"/"+note, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.selectnotes = data;
				this.nb = 0 ;
				this.list.forEach((eleve, index) => {
					this.list[this.nb].auto="0";
					this.list[this.nb].post="";
					this.list[this.nb].computer="";
					 this.selectnotes.forEach((line, index1) => {
					   console.log(line.studentcode);
					   console.log("-----------------");
					   if(eleve.id==line.studentcode){
							this.list[this.nb].auto=line.id;
							this.list[this.nb].post=line.value1;
							this.list[this.nb].computer=line.reference;
					   }
					});  
					this.nb++;   
				});
				
				
					
			}, error => {
				console.log(error);
		});
 }
 
 
 onListperiodes(filiere:string){
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
	   
		this.httpClient.get(this.REST_API_SERVER+"/configs/compte/periode/"+filiere, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.periodes = data;
			}, error => {
				console.log(error);
			});
		
 }
 
  onListmatiere(){
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
		this.httpClient.get(this.REST_API_SERVER+"/materials/"+this.param2, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.matieres = data;
			}, error => {
				console.log(error);
			});
		
 } 
  onListnote(){
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
		this.httpClient.get(this.REST_API_SERVER+"/gradeconfig/level/"+this.param2, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.notes = data;
			}, error => {
				console.log(error);
			});
		
 } 
 
 
 onRefresh(){
	this.onListeleve();
	let note = this.pageForm.get('note')?.value;
	this.onGetnote(note);
	this.ongrade();
 }
 
 
 
}
