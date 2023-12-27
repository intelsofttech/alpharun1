import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {

  
    
  
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
  listmode = false;
  gridmode = true;
  addbutton = false;
  param1 :any= "0";
  param2 :any= "0";
  param3 :any= "0";
  searchValue :any= "0";
  id :any= "0";
  libparent :any= "";
  compte :any= "0";
  
  label :any = "";
  levelname :any = "";
  partner :any = "";
  partnername :any = "";
  number :any = "";
  numberboy :any = "";
  numbergirl :any = "";
  principal :any = "";
  principalname :any = "";
  leader :any = "";
  leadername :any = "";
  capacitor :any = "";
  tablenbr :any = "";
  room :any = "";
  sector :any = "";
  key :any = "";
			
  filiere :any= "";
  level :any= "0";
  year :any= "";
  
  liboperation :any= "AJOUT";
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
			 
			  this.pageForm = this.formBuilder.group({
				 filiere: [''],
				 level: ['']
			  })

			  this.categForm = this.formBuilder.group({
				  label: [''],
				  level: [''],
				  levelname: [''],
				  partner: [''],
				  partnername: [''],
				  number: [''],
				  numberboy: [''],
				  numbergirl: [''],
				  principal: [''],
				  principalname: [''],
				  leader: [''],
				  leadername: [''],
				  year: [''],
				  capacitor: [''],
				  tablenbr: [''],
				  room: [''],
				  sector: [''],
				  key: ['']
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
		
		var filiere_html: any =document.getElementById("filiere")  as HTMLElement;
		this.filiere= filiere_html.value;
		
		this.onListinit();
		this.onListfliere();	
		
  }
  handleInput(event:any) {
    const query = event.target.value.toLowerCase();
    //this.results = this.results.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }
   
    
 onListLevel(){
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
	   this.httpClient.get(this.REST_API_SERVER+"/configs/compte/niveau/"+this.filiere, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.niveaux = data;
				//this.onListbyfiliere();
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
	   this.httpClient.get(this.REST_API_SERVER+"/gradeconfig/filiere/"+this.filiere, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.results = data;
			}, error => {
				console.log(error);
			});
		
 } 
 
 
 onListbylevel(){
        this.addbutton=true;
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	    };
		if(this.level=='0'){
			this.onListbyfiliere();
		}else{
			this.httpClient.get(this.REST_API_SERVER+"/classlist/level/"+this.level+"/"+this.year, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.results = data;
			}, error => {
					console.log(error);
			});
		}
	   
	   
 } 
   

 onListbyfiliere(){
        this.addbutton=true;
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	    };
		  const filiere = this.pageForm.get('filiere')?.value;
		if(filiere=='0'){
			this.onListinit();
		}else{
			this.httpClient.get(this.REST_API_SERVER+"/classlist/filiere/"+filiere+"/"+this.year, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.results = data;
			}, error => {
					console.log(error);
			});
		}	
	   
	   
 } 
   
				

 onListinit(){
        this.addbutton=true;
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	    };
	   this.httpClient.get(this.REST_API_SERVER+"/classlist/year/"+this.year, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.results = data;
		}, error => {
				console.log(error);
		});
	   
 } 
   



  onChange(){
	  console.log(this.compte)
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
  onNew(){
	    this.addForm = true;
	    this.id = "0";
	    this.liboperation = "AJOUT";
	    this.label = "";
		this.levelname = "";
		this.partner = "";
		this.partnername = "";
		this.number = "";
		this.numberboy = "";
		this.numbergirl = "";
		this.principal = "";
		this.principalname = "";
		this.leader = "";
		this.leadername = "";
		this.capacitor = "";
		this.tablenbr = "";
		this.room = "";
		this.sector = "";
		this.key = "";
  } 
  onCancelNew(){
	   this.addForm = false;
  }
  onAdd(): any{
      this.isSend = false;
	  if (!this.categForm.valid) {
		
	  }else {
	  
	    const label = this.categForm.get('label')?.value;
		const level = this.categForm.get('level')?.value;
		const levelname = this.categForm.get('levelname')?.value;
		const partner = this.categForm.get('partner')?.value;
		const partnername = this.categForm.get('partnername')?.value;
		const number = this.categForm.get('number')?.value;
		const numberboy = this.categForm.get('numberboy')?.value;
		const numbergirl = this.categForm.get('numbergirl')?.value;
		const principal = this.categForm.get('principal')?.value;
		const principalname = this.categForm.get('principalname')?.value;
		const leader = this.categForm.get('leader')?.value;
		const leadername = this.categForm.get('leadername')?.value;
		//const year = this.categForm.get('year')?.value;
		const capacitor = this.categForm.get('capacitor')?.value;
		const tablenbr = this.categForm.get('tablenbr')?.value;
		const room = this.categForm.get('room')?.value;
		const sector = this.categForm.get('sector')?.value;
		const key = this.categForm.get('key')?.value;
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
				label : label,
				levelname : levelname,
				partner : partner,
				partnername : partnername,
				number : number,
				numberboy : numberboy,
				numbergirl : numbergirl,
				principal : principal,
				principalname : principalname,
				leader : leader,
				leadername : leadername,
				year : this.year,
				capacitor : capacitor,
				tablenbr : tablenbr,
				room : room,
				sector : sector,
				key : key,
				level: this.level,
				filiere: this.filiere
		    }
			
			this.httpClient.post(this.REST_API_SERVER+"/classlist", postData, {headers: header})
			.subscribe(data => {
					console.log(data);
					this.onListbylevel();
					this.addForm = false;
					this.isSend = false;
				}, error => {
					this.isSend = false;	
					console.log(error);
			});
	   }else{
			let postData = {
				label : label,
				levelname : levelname,
				partner : partner,
				partnername : partnername,
				number : number,
				numberboy : numberboy,
				numbergirl : numbergirl,
				principal : principal,
				principalname : principalname,
				leader : leader,
				leadername : leadername,
				capacitor : capacitor,
				tablenbr : tablenbr,
				room : room,
				sector : sector,
				key : key,
				level: this.level,
				filiere: this.filiere
		    }
			console.log(postData);
		   this.httpClient.put(this.REST_API_SERVER+"/classlist/"+this.id, postData, {headers: header})
				.subscribe(data => {
					console.log(data);
					this.onListbylevel();
					this.addForm = false;
					this.isSend = false;
				}, error => {
					this.isSend = false;	
					console.log(error);
			});
	   }
		
	  }
 }
  
 
   
 onListfliere(){
 
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
	  
		this.httpClient.get(this.REST_API_SERVER+"/configs/filiere", {headers: header})
			.subscribe(data => {
				console.log(data);
				this.parents = data;
				var filiere_html: any =document.getElementById("filiere")  as HTMLElement;
				this.filiere= filiere_html.value;
				this.onListLevel();
				
			}, error => {
				console.log(error);
			});
		
 } 
 
 
 onParents(){
 
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
		this.httpClient.get(this.REST_API_SERVER+"/configs/compte/niveau/"+this.param2, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.parents = data;
			}, error => {
				console.log(error);
			});
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
		this.httpClient.delete(this.REST_API_SERVER+"/classlist/"+id, {headers: header})
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
		this.httpClient.get(this.REST_API_SERVER+"/classlist/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.addForm = true;
				this.liboperation = "MODIFICATION";
				this.id = data['id'];
				this.label = data['label'];
				this.level = data['level'];
				this.levelname = data['levelname'];
				this.partner = data['partner'];
				this.partnername = data['partnername'];
				this.number = data['number'];
				this.numberboy = data['numberboy'];
				this.numbergirl = data['numbergirl'];
				this.principal = data['principal'];
				this.principalname = data['principalname'];
				this.leader = data['leader'];
				this.leadername = data['leadername'];
				this.capacitor = data['capacitor'];
				this.tablenbr = data['tablenbr'];
				this.room = data['room'];
				this.sector = data['sector'];
				this.key = data['key'];
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
