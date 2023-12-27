import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, NavParams, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-selectionchambre',
  templateUrl: './selectionchambre.page.html',
  styleUrls: ['./selectionchambre.page.scss'],
})
export class SelectionchambrePage implements OnInit {

   
  
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
  param4 :any= "0";
  param5 :any= "0";
  searchValue :any= "0";
  id :any= "0";
  Uuid :any= "0";
  bedroomcateg :any= "";
  name :any= "";
  priceNight :any= "";
  minPrice :any= "";
  priceHour :any= "";
  detail :any= "";
				
  liboperation :any= "AJOUT";
  public results :any = [];
  public alllist :any = [];
  public filtered :any = [];
  public types :any = [];
  searchNotMatched = true;
 constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient,
			  private params: NavParams) {
			  this.pageForm = this.formBuilder.group({
				 word: ['']
			  })
			  this.categForm = this.formBuilder.group({
				   bedroomcateg: [''],
				   name: ['', [Validators.required]]
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
	this.param1=  this.params.get('param1');
	this.param2=  this.params.get('param2');
	this.param3=  this.params.get('param3');
	this.param4=  this.params.get('param4');
	this.param5=  this.params.get('param5');
	this.Uuid=  this.params.get('param4');
	
	this.onListTypechambre();
    this.onListbyType();	
  }
  handleInput(event:any) {
    const query = event.target.value.toLowerCase();
    //this.results = this.results.filter((d) => d.toLowerCase().indexOf(query) > -1);
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
  } 
  onCancelNew(){
	   this.addForm = false;
  }
  
  onCalcul(){
  
    console.log(this.param1);
	const dateFormatter = Intl.DateTimeFormat('sv-SE');
    var enddate = new Date(this.param1);
    
	let x = 0

	while(x < parseInt(this.param2)){
		var newdate = enddate.setDate(enddate.getDate() + x);
	    console.log(dateFormatter.format(newdate));
		x++;
	}
  }
  
   
 onListTypechambre(){
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
		this.httpClient.get(this.REST_API_SERVER+"/bedroomcategs", {headers: header})
			.subscribe(data => {
				console.log(data);
				this.types = data;
			}, error => {
				console.log(error);
		});
 }

 onAddLineToCart(id:string, chambre:string, categ:string){
	//if(this.param5=="1"){}
	var prixtotal = Number(this.param2)*Number(this.priceNight);
	console.log(prixtotal)
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
				label: chambre,
				quantity : this.param2,
				price : this.priceNight,
				total : prixtotal,
				margin : "",
				description : "",
				direction : "NO",
				productid : "0",
				act : id,
				uui : this.Uuid
		    }
			console.log(postData)
			this.httpClient.post(this.REST_API_SERVER+"/movement", postData, {headers: header})
			.subscribe(data => {
					console.log(data);
					this.closemodal("0", "0");
				}, error => {
					
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

  private setFilteredList(): void {
    this.filtered = this.results.map(result => {
      return result.showcases.filter(line => line.name === this.searchValue)
    });
  }
  
    applyFilter(filterValue: string) {
	  
         let filterValueLower = filterValue.toLowerCase();
         if(filterValue === '' ) {
             this.results=this.alllist;
         }else{
			
           this.results = this.alllist.filter(results => results.name.toLowerCase().includes(filterValue.toLowerCase()));
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
	   let postData = {
			
		}
		
		this.httpClient.get(this.REST_API_SERVER+"/bedrooms", {headers: header})
			.subscribe(data => {
				console.log(data);
				this.results = data;
				this.alllist = data;
			}, error => {
				console.log(error);
		});
 }  
 onListbyType(){
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
	    var _bedroomcateg: any =document.getElementById("bedroomcateg")  as HTMLElement;
	    var bedroomcateg= _bedroomcateg.value;
		this.onGetType(parseInt(bedroomcateg));
	   
		this.httpClient.get(this.REST_API_SERVER+"/bedrooms/categ/"+bedroomcateg, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.results = data;
				this.alllist = data;
			}, error => {
				console.log(error);
		});
 }


 onGetType(id:number){
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
	  
		this.httpClient.get(this.REST_API_SERVER+"/bedroomcateg/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.priceNight = data['priceNight'];
				this.minPrice = data['minPrice'];
				this.priceHour = data['priceHour'];
				this.detail = data['detail'];
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
