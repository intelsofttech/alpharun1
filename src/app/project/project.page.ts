import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.page.html',
  styleUrls: ['./project.page.scss'],
})
export class ProjectPage implements OnInit {

  
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
  
  addForm = false;
  isSend = false;
  param1 :any= "0";
  param2 :any= "0";
  param3 :any= "0";
  searchValue :any= "0";
  id :any= "0";
  parent :any= "";
  label :any= "";
  title :any= "";
  addDate :any= "";
  addHour :any= "";
  eventDate :any= "";
  eventHour :any= "";
  task :any= "";
  value :any= "";
  locate :any= "";
  image :any= "";
  locateUrl :any= "";
  budget :any= "";
  budgetuse :any= "";
  budgetstay :any= "";
  chief :any= "";
  chiefname :any= "";
  type :any= "";
  service :any= "";
  level :any= "";
  typelib :any= "";
  servicelib :any= "";
  levellib :any= "";
  progress :any= "";
  statut :any= "";
  file1 = "";
  file2 = "";
  file3 = "";
  file4 = "";
  file5 = "";
  filename1 = "";
  filename2 = "";
  filename3 = "";
  filename4 = "";
  filename5 = "";
  
  idselect = "";
 
  word :any= "";
  liboperation :any= "AJOUT";
  public results :any = [];
  public alllist :any = [];
  public filtered :any = [];
  public services :any = [];
  public categories :any = [];
  public agents :any = [];
  public villes :any = [];
  public niveaux :any = [];
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
				   title: ['', [Validators.required]],
				   addDate: [''],
				   addHour: [''],
				   eventDate: [''],
				   eventHour: [''],
				   image: [''],
				   task: [''],
				   value: [''],
				   locate: [''],
				   locateUrl: [''],
				   budget: [''],
				   budgetuse: [''],
				   budgetstay: [''],
				   chief: [''],
				   chiefname: [''],
				   type: [''],
				   service: [''],
				   level: [''],
				   typelib: [''],
				   servicelib: [''],
				   levellib: [''],
				   progress: [''],
				   statut: [''],
				   file1: [''],
				   file2: [''],
				   file3: [''],
				   file4: [''],
				   file5: [''],
				   filename1: [''],
				   filename2: [''],
				   filename3: [''],
				   filename4: [''],
				   filename5: ['']
				   
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
		this.param3 = this.activatedRoute.snapshot.paramMap.get('param3');
		
		this.onList();	
		
		this.onListservices();
		this.onListcategorie();
		this.onListvilles();
		this.onListagents();
 
  }
  handleInput(event:any) {
    const query = event.target.value.toLowerCase();
    //this.results = this.results.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }
   
  onNew(){
	this.addForm = true;
	this.id = "0";
	this.liboperation = "AJOUT";
	let date01 = "";
	let date02 = "";
	this.title = "";;
	this.addDate = "";
	this.addHour = "";
	this.eventDate = "";
	this.eventHour = "";
	this.task = "";
	this.typelib = "";
	this.servicelib = "";
	this.levellib = "";
	this.value = "";
	this.locate = "";
  } 
  onCancelNew(){
	   this.addForm = false;
  } 
  onChange(){
	  const type = this.categForm.get('type')?.value;
	  const idniveau = "niveauproject"+type;
	  console.log(idniveau);
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
		this.httpClient.get(this.REST_API_SERVER+"/configs/"+idniveau, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.niveaux = data;
			}, error => {
				console.log(error);
		});
  }
  onGetuser(){
	  const chief = this.categForm.get('chief')?.value;
	 
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
		this.httpClient.get(this.REST_API_SERVER+"/user/"+chief, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.chiefname = data['firsName']+" "+data['lastName'];
			}, error => {
				console.log(error);
		});
  } 
  addFile(){
	  var file_html: any =document.getElementById("file")  as HTMLElement;
	  file_html.click; 
  }
  onAdd(): any{
      this.isSend = false;
	  if (!this.categForm.valid) {
		
	  }else {
	   const title = this.categForm.get('title')?.value;
	   const addDate = this.categForm.get('addDate')?.value;
	   const addHour = this.categForm.get('addHour')?.value;
	   const eventDate = this.categForm.get('eventDate')?.value;
	   const eventHour = this.categForm.get('eventHour')?.value;
	   const image = this.categForm.get('image')?.value;
	   const task = this.categForm.get('task')?.value;
	   const value = this.categForm.get('value')?.value;
	   const locate = this.categForm.get('locate')?.value;
	   const locateUrl = this.categForm.get('locateUrl')?.value;
	   const budget = this.categForm.get('budget')?.value;
	   const budgetuse = this.categForm.get('budgetuse')?.value;
	   const budgetstay = this.categForm.get('budgetstay')?.value;
	   const chief = this.categForm.get('chief')?.value;
	   const chiefname = this.categForm.get('chiefname')?.value;
	   const type = this.categForm.get('type')?.value;
	   const service = this.categForm.get('service')?.value;
	   const level = this.categForm.get('level')?.value;
	   const typelib = this.categForm.get('typelib')?.value;
	   const servicelib = this.categForm.get('servicelib')?.value;
	   const levellib = this.categForm.get('levellib')?.value;
	   const progress = this.categForm.get('progress')?.value;
	   const statut = this.categForm.get('statut')?.value;
	   const file1 = this.categForm.get('file1')?.value;
	   const file2 = this.categForm.get('file2')?.value;
	   const file3 = this.categForm.get('file3')?.value;
	   const file4 = this.categForm.get('file4')?.value;
	   const file5 = this.categForm.get('file5')?.value;
	   const filename1 = this.categForm.get('filename1')?.value;
	   const filename2 = this.categForm.get('filename2')?.value;
	   const filename3 = this.categForm.get('filename3')?.value;
	   const filename4 = this.categForm.get('filename4')?.value;
	   const filename5 = this.categForm.get('filename5')?.value;
	   this.isSend = true;
	   
	   var header = {
		'Content-Type': 'application/json',
		'enctype': 'application/json',
		'Accept': '*',
		'Authorization': 'Bearer '+this.walletId,
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
		'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
	   };
	   if(this.id=="0"){
			let postData = {
			    title: title,
			    addDate: addDate,
			    addHour: addHour,
			    eventDate: eventDate,
			    eventHour: eventHour,
			    image: image,
			    task: task,
			    value: value,
			    locate: locate,
				locateUrl : locateUrl,
				budget : budget,
				budgetuse : budgetuse,
				budgetstay : budgetstay,
				chief : chief,
				chiefname : chiefname,
				type : type,
				typelib : typelib,
				service : service,
				servicelib : servicelib,
				level : level,
				levellib : levellib,
				progress : progress,
				statut : statut,
				file1 : file1,
				file2 : file2,
				file3 : file3,
				file4 : file4,
				file5 : file5,
				filename1 : filename1,
				filename2 : filename2,
				filename3 : filename3,
				filename4 : filename4,
				filename5 : filename5,
				categorie: this.param1,
				parameter: this.param2,
				post: "0"
		    }
			this.httpClient.post(this.REST_API_SERVER+"/event", postData, {headers: header})
			.subscribe(data => {
					console.log(data);
					this.onList();
					this.addForm = false;
					this.isSend = false;
				}, error => {
					this.isSend = false;	
					console.log(error);
			});
	   }else{
			let postData = {
				title: title,
			    addDate: addDate,
			    addHour: addHour,
			    eventDate: eventDate,
			    eventHour: eventHour,
			    image: image,
			    task: task,
			    value: value,
			    locate: locate,
				locateUrl : locateUrl,
				budget : budget,
				budgetuse : budgetuse,
				budgetstay : budgetstay,
				chief : chief,
				chiefname : chiefname,
				type : type,
				typelib : typelib,
				service : service,
				servicelib : servicelib,
				level : level,
				levellib : levellib,
				progress : progress,
				statut : statut,
				file1 : file1,
				file2 : file2,
				file3 : file3,
				file4 : file4,
				file5 : file5,
				filename1 : filename1,
				filename2 : filename2,
				filename3 : filename3,
				filename4 : filename4,
				filename5 : filename5,
		    }
			console.log(postData);
		   this.httpClient.put(this.REST_API_SERVER+"/event/"+this.id, postData, {headers: header})
				.subscribe(data => {
					console.log(data);
					this.onList();
					this.addForm = false;
					this.isSend = false;
				}, error => {
					this.isSend = false;	
					console.log(error);
			});
	   }
		
	  }
 }
 
 onGetlabel(sel:string){
		
		if(sel=="categorie"){
			this.idselect = this.categForm.get('type')?.value;		
		}
		if(sel=="niveau"){
			this.idselect = this.categForm.get('level')?.value;		
		}
		if(sel=="service"){
			this.idselect = this.categForm.get('service')?.value;		
		}
        
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
		this.httpClient.get(this.REST_API_SERVER+"/config/"+this.idselect, {headers: header})
			.subscribe(data => {
				if(sel=="categorie"){
					this.typelib = data['label'];		
				}
				if(sel=="niveau"){
					this.levellib = data['label'];		
				}
				if(sel=="service"){
					this.servicelib = data['label'];			
				}
			}, error => {
				console.log(error);
		});
 }
 
 
 onListservices(){
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
		this.httpClient.get(this.REST_API_SERVER+"/configs/serviceproject", {headers: header})
			.subscribe(data => {
				console.log(data);
				this.services = data;
			}, error => {
				console.log(error);
		});
 }
 
 onListcategorie(){
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
		this.httpClient.get(this.REST_API_SERVER+"/configs/categoryproject", {headers: header})
			.subscribe(data => {
				console.log(data);
				this.categories = data;
			}, error => {
				console.log(error);
		});
 }
 
 onListvilles(){
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
		this.httpClient.get(this.REST_API_SERVER+"/configs/localiteproject", {headers: header})
			.subscribe(data => {
				console.log(data);
				this.villes = data;
			}, error => {
				console.log(error);
		});
 }
 
  public searchArea(text: string) {
  
    this.searchValue = text;
    if (this.searchValue === '') {
      this.filtered = this.results;
      return;
    }

    this.setFilteredList();

    if (this.filtered.length === 0) {
      this.searchNotMatched = true;
      return;
    }
    this.searchNotMatched = false;

  }
  listmode = false;
  gridmode = true;
  onChangemode(sel:any){
	   if(sel=="list"){
		  this.listmode = true;
	      this.gridmode = false;
	   }else{
	      this.listmode = false;
	      this.gridmode = true;
	   }
  } 
  private setFilteredList(): void {
    this.filtered = this.results.map(result => {
      return result.showcases.filter(line => line.label === this.searchValue)
    });
  }
  
    applyFilter() {
	  
         let filterValue = "";
         if(filterValue === '' ) {
             this.results=this.alllist;
         }else{
			
           this.results = this.alllist.filter(results => results.label.toLowerCase().includes(filterValue.toLowerCase()));
         }
   }
    
 onListagents(){
 
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
		this.httpClient.get(this.REST_API_SERVER+"/users/usergroup/agentprojet", {headers: header})
			.subscribe(data => {
				console.log(data);
				this.agents = data;
			}, error => {
				console.log(error);
		});
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
		
		if(this.param2=="0"){
			//this.httpClient.get(this.REST_API_SERVER+"/events", {headers: header})
			this.httpClient.get(this.REST_API_SERVER+"/event/category/"+this.param1, {headers: header})
			.subscribe(data => {
					console.log(data);
					this.results = data;
					this.alllist = data;
				}, error => {
					console.log(error);
			});
		}else{
			this.httpClient.get(this.REST_API_SERVER+"/event/category/parameter/"+this.param1+"/"+this.param2, {headers: header})
				.subscribe(data => {
					console.log(data);
					this.results = data;
					this.alllist = data;
				}, error => {
					console.log(error);
			});
		}
		
 }
 onDelete(id:string){
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
		this.httpClient.delete(this.REST_API_SERVER+"/event/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.onList();
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
		this.httpClient.get(this.REST_API_SERVER+"/event/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.addForm = true;
				
				this.liboperation = "MODIFICATION";
				
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
				this.locate = data['locate'];
				this.locateUrl = data['locateUrl'];
				this.budget = data['budget'];
				this.budgetuse = data['budgetuse'];
				this.budgetstay = data['budgetstay'];
				this.chief = data['chief'];
				this.chiefname = data['chiefname'];
				this.service = data['service'];
				this.type = data['type'];
				this.level = data['level'];
			    this.typelib = data['typelib'];
			    this.servicelib = data['servicelib'];
			    this.levellib = data['levellib'];
				this.progress = data['progress'];
				this.statut = data['statut'];
				this.file1 = data['file1'];
				this.file2 = data['file2'];
				this.file3 = data['file3'];
				this.file4 = data['file4'];
				this.file5 = data['file5'];
				this.filename1 = data['filename1'];
				this.filename2 = data['filename2'];
				this.filename3 = data['filename3'];
				this.filename4 = data['filename4'];
				this.filename5 = data['filename5'];
				console.log(this.id);
				//this.onList();
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
