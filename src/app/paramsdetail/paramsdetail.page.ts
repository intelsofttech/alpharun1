import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
import { MembreselectionPage } from '../membreselection/membreselection.page';


@Component({
  selector: 'app-paramsdetail',
  templateUrl: './paramsdetail.page.html',
  styleUrls: ['./paramsdetail.page.scss'],
})
export class ParamsdetailPage implements OnInit {

  
  
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
  
  showtask1 = false;
  showtask2 = false;
  showtask3 = false;
  showtask4 = false;
  showtask5 = false;
  showtask6 = false;
  showtask7 = false;
  showtask8 = false;
  showtask9 = false;
  showtask10 = false;
  showtask = false;
  addForm = false;
  isSend = false;
  param1 :any= "0";
  param2 :any= "0";
  searchValue :any= "0";
  id :any= "0";
  parent :any= "";
  respo :any= "TACHE";
  label :any= "";
  liboperation :any= "AJOUT";
  
  task1: any = "";
  task2: any = "";
  task3: any = "";
  task4: any = "";
  task5: any = "";
  task6: any = "";
  task7: any = "";
  task8: any = "";
  task9: any = "";
  task10: any = "";
  name1: any = "";
  name2: any = "";
  name3: any = "";
  name4: any = "";
  name5: any = "";
  name6: any = "";
  name7: any = "";
  name8: any = "";
  name9: any = "";
  name10: any = "";
  nameid1: any = "";
  nameid2: any = "";
  nameid3: any = "";
  nameid4: any = "";
  nameid5: any = "";
  nameid6: any = "";
  nameid7: any = "";
  nameid8: any = "";
  nameid9: any = "";
  nameid10: any = "";
				   
  public results :any = [];
  public alllist :any = [];
  public filtered :any = [];
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
				   task1: [''],
				   task2: [''],
				   task3: [''],
				   task4: [''],
				   task5: [''],
				   task6: [''],
				   task7: [''],
				   task8: [''],
				   task9: [''],
				   task10: [''],
				   name1: [''],
				   name2: [''],
				   name3: [''],
				   name4: [''],
				   name5: [''],
				   name6: [''],
				   name7: [''],
				   name8: [''],
				   name9: [''],
				   name10: [''],
				   nameid1: [''],
				   nameid2: [''],
				   nameid3: [''],
				   nameid4: [''],
				   nameid5: [''],
				   nameid6: [''],
				   nameid7: [''],
				   nameid8: [''],
				   nameid9: [''],
				   nameid10: ['']
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
	
	this.onGet(this.param1);	
  }
  handleInput(event:any) {
    const query = event.target.value.toLowerCase();
    //this.results = this.results.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }
   
  onNew(){
	   this.addForm = true;
	   this.id = "0";
	   this.liboperation = "MODIFICATION";
  } 
  onCancelNew(){
	   this.addForm = false;
  }
  onSelect(sel:any){
	  
  }
  onAdd(){
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
				task1: this.task1,
				task2: this.task2,
				task3: this.task3,
				task4: this.task4,
				task5: this.task5,
				task6: this.task6,
				task7: this.task7,
				task8: this.task8,
				task9: this.task9,
				task10: this.task10,
				name1: this.name1,
				name2: this.name2,
				name3: this.name3,
				name4: this.name4,
				name5: this.name5,
				name6: this.name6,
				name7: this.name7,
				name8: this.name8,
				name9: this.name9,
				name10: this.name10,
				nameid1: this.nameid1,
				nameid2: this.nameid2,
				nameid3: this.nameid3,
				nameid4: this.nameid4,
				nameid5: this.nameid5,
				nameid6: this.nameid6,
				nameid7: this.nameid7,
				nameid8: this.nameid8,
				nameid9: this.nameid9,
				nameid10: this.nameid10
		    }
		   this.httpClient.put(this.REST_API_SERVER+"/tree/"+this.param1, postData, {headers: header})
				.subscribe(data => {
					console.log(data);
					this.onGet(this.param1);
					this.addForm = false;
					this.isSend = false;
				}, error => {
					this.isSend = false;	
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
		this.httpClient.get(this.REST_API_SERVER+"/tree/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.liboperation = "MODIFICATION";
				this.id = data['id'];
				this.label = data['name'];
				this.task1 = data['task1'];
				this.task2 = data['task2'];
				this.task3 = data['task3'];
				this.task4 = data['task4'];
				this.task5 = data['task5'];
				this.task6 = data['task6'];
				this.task7 = data['task7'];
				this.task8 = data['task8'];
				this.task9 = data['task9'];
				this.task10 = data['task10'];
				this.name1 = data['name1'];
				this.name2 = data['name2'];
				this.name3 = data['name3'];
				this.name4 = data['name4'];
				this.name5 = data['name5'];
				this.name6 = data['name6'];
				this.name7 = data['name7'];
				this.name8 = data['name8'];
				this.name9 = data['name9'];
				this.name10 = data['name10'];
				this.nameid1 = data['nameid1'];
				this.nameid2 = data['nameid2'];
				this.nameid3 = data['nameid3'];
				this.nameid4 = data['nameid4'];
				this.nameid5 = data['nameid5'];
				this.nameid6 = data['nameid6'];
				this.nameid7 = data['nameid7'];
				this.nameid8 = data['nameid8'];
				this.nameid9 = data['nameid9'];
				this.nameid10 = data['nameid10'];
				if(this.task1 != "" && this.task1 != null){
					this.showtask1 = true;
				}
				if(this.task2 != "" && this.task2 != null){
					this.showtask2 = true;
				}
				if(this.task3 != "" && this.task3 != null){
					this.showtask3 = true;
				}
				if(this.task4 != "" && this.task4 != null){
					this.showtask4 = true;
				}
				if(this.task5 != "" && this.task5 != null){
					this.showtask5 = true;
				}
				if(this.task6 != "" && this.task6 != null){
					this.showtask6 = true;
				}
				if(this.task7 != "" && this.task7 != null){
					this.showtask7 = true;
				}
				if(this.task8 != "" && this.task8 != null){
					this.showtask8 = true;
				}
				if(this.task9 != "" && this.task9 != null){
					this.showtask9 = true;
				}
				if(this.task10!= "" && this.task10 != null){
					this.showtask10 = true;
				}
  
				//this.onList();
			}, error => {
				console.log(error);
		});
 }
   async membreModal(id:string) {
	
	const modal = await this.modalCtrl.create({
			  component: MembreselectionPage,
			  componentProps: {
				'param1': 'membre', 
				'param2': '0',
				'param3': 'Tous les membres'
			  }
			});

			
			modal.onDidDismiss().then(data=>{
				console.log(data)
				console.log(data['role'])
				if(id=='1'){
					this.nameid1=data['data'];
					this.name1=data['role'];
				}
				if(id=='2'){
					this.nameid2=data['data'];
					this.name2=data['role'];
				}
				if(id=='3'){
					this.nameid3=data['data'];
					this.name3=data['role'];
				}
				if(id=='4'){
					this.nameid4=data['data'];
					this.name4=data['role'];
				}
				if(id=='5'){
					this.nameid5=data['data'];
					this.name5=data['role'];
				}
				if(id=='6'){
					this.nameid6=data['data'];
					this.name6=data['role'];
				}
				if(id=='7'){
					this.nameid7=data['data'];
					this.name7=data['role'];
				}
				if(id=='8'){
					this.nameid8=data['data'];
					this.name8=data['role'];
				}
				if(id=='9'){
					this.nameid9=data['data'];
					this.name9=data['role'];
				}
				if(id=='10'){
					this.nameid10=data['data'];
					this.name10=data['role'];
				}
			})
			return await modal.present();
  }
}
