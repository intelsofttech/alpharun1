import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.page.html',
  styleUrls: ['./projectdetail.page.scss'],
})
export class ProjectdetailPage implements OnInit {

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
  
  id = "";
  title = "";
  addDate = "";
  addHour = "";
  eventDate = "";
  eventHour = "";
  value = "";
  locate = "";
  task = "";
  report = "";
  decision = "";
  other = "";
	
  modtask = false;
  modreport = false;
  moddecision = false;
  modother = false;
  
  addForm = false;
  isSend = false;
  param1 :any= "0";
  param2 :any= "0";
  param3 :any= "0";
  
  public results :any = [];
 constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient) {

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

 onEdit(sel:string){
    this.modtask = false;
    this.modreport = false;
    this.moddecision = false;
    this.modother = false;
  
	if(sel=="task"){
		this.modtask = true;
	}
	if(sel=="report"){
		this.modreport = true;
	}
	if(sel=="decision"){
		this.moddecision = true;
	}
	if(sel=="other"){
		this.modother = true;
	}
 }
 onSave(sel:string){
    
	
	if(sel=="task"){
		var _task: any =document.getElementById("task")  as HTMLElement;
		this.task= _task.value;
	}
	if(sel=="report"){
		var _rapport: any =document.getElementById("rapport")  as HTMLElement;
		this.report= _rapport.value;
	}
	if(sel=="decision"){
		var _decision: any =document.getElementById("decision")  as HTMLElement;
		this.decision= _decision.value;
	}
	if(sel=="other"){
		var _other: any =document.getElementById("other")  as HTMLElement;
		this.other= _other.value;
	}
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
				task: this.task,
				report : this.report,
				decision : this.decision,
				other : this.other
		    }
			console.log(postData)
		   this.httpClient.put(this.REST_API_SERVER+"/event/"+this.param1, postData, {headers: header})
				.subscribe(data => {
					console.log(data);
					this.modtask = false;
					this.modreport = false;
					this.moddecision = false;
					this.modother = false;
				}, error => {
						
					console.log(error);
			});
			
			
  
 }
 onCancel(sel:string){
    this.modtask = false;
    this.modreport = false;
    this.moddecision = false;
    this.modother = false;
  
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
		this.httpClient.get(this.REST_API_SERVER+"/event/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				
				if(data['addDate']!="" && data['addDate']!=null){
					let date01 = data['addDate'];
					let date1 = date01.substr(0, 10);
					this.addDate = date1;
				}
				
				if(data['eventDate']!="" && data['eventDate']!=null){
					let date02 = data['eventDate'];
					let date2 = date02.substr(0, 10);
					this.eventDate = date2;
				}
				
				this.id = data['id'];
				this.title = data['title'];
			    
			    this.addHour = data['addHour'];
			    this.eventHour = data['eventHour'];
			    this.task = data['task'];
			    this.value = data['value'];
			    this.locate = data['locate'];
				this.report = data['report'];
				this.decision = data['decision'];
				this.other = data['other'];
				
			}, error => {
				console.log(error);
		});
 }
 
}