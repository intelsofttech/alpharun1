import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-matiereniveau',
  templateUrl: './matiereniveau.page.html',
  styleUrls: ['./matiereniveau.page.scss'],
})
export class MatiereniveauPage implements OnInit {

  
  
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
  param1 :any= "0";
  param2 :any= "0";
  param3 :any= "0";
  searchValue :any= "0";
  id :any= "0";
  libparent :any= "";
  filiere :any= "0";
  compte :any= "0";
  label :any= "";
  materialid :any= "";
  type :any= "";
  typeid :any= "";
  coef :any= "";
  value :any= "";
  level :any= "";
  year :any= "";
  liboperation :any= "AJOUT";
  public results :any = [];
  public parents :any = [];
  public alllist :any = [];
  public filtered :any = [];
  public matieres :any = [];
  public types :any = [];
  searchNotMatched = true;
 constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient) {
			  this.pageForm = this.formBuilder.group({
				 level: ['']
			  })
			  this.categForm = this.formBuilder.group({
				   label: [''],
				   materialid: [''],
				   type: [''],
				   typeid: [''],
				   coef: [''],
				   value: [''],
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
	
	var filiere_html: any =document.getElementById("filiere")  as HTMLElement;
	this.filiere= filiere_html.value;
	
	
	this.param1 = this.activatedRoute.snapshot.paramMap.get('param1');
	this.param2 = this.activatedRoute.snapshot.paramMap.get('param2');
	this.param3 = this.activatedRoute.snapshot.paramMap.get('param3');
	
	
	
	if(this.param2=="0"){
		this.param2=this.filiere;
	}
	if(this.param2=="type"){
		this.libparent="Sélectionnez type de formation";
	}
	if(this.param2=="filiere"){
		this.libparent="Sélectionnez la filière";
	}
	this.onList();	
	this.onParents();	
	this.onMatieres();	
	this.onTypes();	
  }
  handleInput(event:any) {
    const query = event.target.value.toLowerCase();
    //this.results = this.results.filter((d) => d.toLowerCase().indexOf(query) > -1);
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
	   this.label = "";
	   this.liboperation = "AJOUT";
  } 
  onCancelNew(){
	   this.addForm = false;
  }
  onAdd(): any{
      this.isSend = false;
	  if (!this.categForm.valid) {
		
	  }else {
	   const label = this.categForm.get('label')?.value;
	   const materialid = this.categForm.get('materialid')?.value;
	   const type = this.categForm.get('type')?.value;
	   const typeid = this.categForm.get('typeid')?.value;
	   const coef = this.categForm.get('coef')?.value;
	   const value = this.categForm.get('value')?.value;
	   const level = this.pageForm.get('level')?.value;
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
				label: label,
				labelid: materialid,
				type: type,
				typeid: typeid,
				coef: coef,
				value: value,
				level: level,
				year: this.year
		    }
			console.log(postData);
			this.httpClient.post(this.REST_API_SERVER+"/material", postData, {headers: header})
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
				label: label,
				labelid: materialid,
				type: type,
				typeid: typeid,
				coef: coef,
				value: value,
		    }
			console.log(postData);
		   this.httpClient.put(this.REST_API_SERVER+"/material/"+this.id, postData, {headers: header})
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

  private setFilteredList(): void {
    this.filtered = this.results.map(result => {
      return result.showcases.filter(line => line.label === this.searchValue)
    });
  }
  
    applyFilter(filterValue: string) {
	  
         let filterValueLower = filterValue.toLowerCase();
         if(filterValue === '' ) {
             this.results=this.alllist;
         }else{
			
           this.results = this.alllist.filter(results => results.label.toLowerCase().includes(filterValue.toLowerCase()));
         }
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
	    const level = this.pageForm.get('level')?.value;
		console.log(level);
		this.httpClient.get(this.REST_API_SERVER+"/materials/"+level, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.results = data;
				this.alllist = data;
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
 
 
 onTypes(){
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
		this.httpClient.get(this.REST_API_SERVER+"/configs/compte/typematiere/"+this.param2, {headers: header})
		.subscribe(data => {
			console.log(data);
			this.types = data;
		}, error => {
			console.log(error);
		});
 }
 
 
 onMatieres(){
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
		this.httpClient.get(this.REST_API_SERVER+"/configs/compte/"+this.param1+"/"+this.param2, {headers: header})
		.subscribe(data => {
			console.log("matieres");
			console.log(data);
			this.matieres = data;
		}, error => {
			console.log(error);
		});
 }
 
  
   onGetmatiere(){
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
	    const materialid = this.categForm.get('materialid')?.value;
		this.httpClient.get(this.REST_API_SERVER+"/config/"+materialid, {headers: header})
			.subscribe(data => {
				
				this.label = data['label'];
				console.log(data['label']);
				console.log(data);
			}, error => {
				console.log(error);
		});
   
   }
   
   onGettype(){
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
	    const typeid = this.categForm.get('typeid')?.value;
		this.httpClient.get(this.REST_API_SERVER+"/config/"+typeid, {headers: header})
			.subscribe(data => {
				
				this.type = data['label'];
				console.log(data);
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
		this.httpClient.delete(this.REST_API_SERVER+"/material/"+id, {headers: header})
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
		this.httpClient.get(this.REST_API_SERVER+"/material/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.addForm = true;
				this.liboperation = "MODIFICATION";
				this.id = data['id'];
				this.label = data['label'];
				this.materialid = data['labelid'];
				this.type = data['type'];
				this.typeid = data['typeid'];
				this.coef = data['coef'];
				this.value = data['value'];
				
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
