import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { BackButtonEvent } from '@ionic/core';
import { App } from '@capacitor/app';
import { PaysPage } from './pays/pays.page';
import { VillePage } from './ville/ville.page';
import { SecteurPage } from './secteur/secteur.page';
import { DiplomePage } from './diplome/diplome.page';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Geolocation } from '@capacitor/geolocation';

register();


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  implements OnInit {


  header = {
	//'Content-Type': 'application/json',
	'enctype': 'application/json',
	'Accept': '*',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
	'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
  };
		
		
  public REST_API_SERVER: any = "https";
  
  public color: any = "#060761";
  //public textcolor: any = "#505152";
  public textcolor: any = "#ffffff";
  public config = false;
  public recette = false;
  public charge = false;
  public caisse = false;
  public statut = false;
  public admin = false;
  public event = true;
  public eglise = false;
  public hebergement = false;
  public transaction = false;
  
  public _createsuccessfull = false;
  public _firstPage = false;
  public _homePage = true;
  public _accounts = false;
  public _loginPage = false;
  public _forgetPage = false;
  public _registerPage = false;
  
  public isShow = false;
  public Typeinput = "password";
  public isEmpty = true;
  
  
  public imgbaseUrl : any = "../assets/images/default-img.jpg";
  public numberupper :any = 0;
  public numberchiffre :any = 0;
  public tauxsecure :any = 0;
  public scannedResult :any = "";
  public condition = false;
  
  public upper1 = [];
  public nbrchiffr = [];
  
  public isEmpty2 = true;
  public height:any = 600;
  
  public isSubmitted = false;
  
  public webleft = true;
  public webtop = false;
  public mobile = false;
  
  public showetabtype = false;
  public showcity = false;
  public showactivity = false;
  public showemploi = false;
  public showposition = false;
  public editschool = false;
  public configschool = false;
  public gestionimmo = false;
  public promotion = false;
  public parcauto = false;
  public gestioncom = false;
  
  public Code = "";
  public Message = "";
  public getmobile = "";
  public getemail = "";
  
  
  public resp :any = [] ;
  public listtype :any = [] ;
  public list2 :any = [] ;
  public list1 :any = [] ;
  public coord :any = [] ;
  public countries :any = [] ;
 
 
  public _loginForm: FormGroup;
  public _registerForm: FormGroup;
  public _forgetForm: FormGroup;
 
  public username :any = "";
  public password :any = "";
  public _user_name = "";
  public _accountType = "";
				
  public _apikey = "0";
  public _usertype = "";
  public _usercateg = "";
  public _userclass = "";
  public _typeacc = "";
  public _configid = "";
  public _configlabel = "";
  public _firstName = "";
  public _lastName = "";
  public _phone = "";
  public _city = "";
  public _country = "";
  public _countrylabel = "";
  public _Locationurl:any = "";
  public _posLatitude:any = "";
  public _posLongitude:any = "";
  public _email = "";
  public _password = "";
  public _password2 = "";
  public _about = "";
  
  public etabType = "";
  public categ = "";
  public userclass = "";
  public typeacc = "";
  public configid = "";
  public configlabel = "";
  public Locationurl = "";
  public firstName = "";
  public lastName = "";
  public phone = "";
  public city = "";
  public country = "";
  public countrylabel = "";
  public posLatitude = "";
  public posLongitude = "";
  public email = "";
  public password2 = "";
				   
  public _libtype = "";
  
  public _Diplome = "";
  public _Diplomeid = "";
  public _libactivity = "A propos";
  
  public backcolor1 :any = "#f8de73";
  public backcolor2 :any = "#ffffff";
  public backcolor3 :any = "#f1f0f0";
  public textcolor1 :any = "#ffffff";
  public textcolor2 :any = "#5a5858";
  public textcolor3 :any = "#5a5858";
  
  public results :any = [];
  public alllist :any = [];
  
 loginForm: FormGroup;
 registerForm: FormGroup;
 forgetForm: FormGroup;
  routerEl = document.querySelector('ion-router');
  
  constructor(public formBuilder: FormBuilder,
			  public httpClient: HttpClient,
			  public  modalCtrl: ModalController,
			  public navCtrl: NavController) {
				
				this.loginForm = this.formBuilder.group({
				   username: ['', [Validators.required, Validators.minLength(8)]],
				   password: ['', [Validators.required, Validators.minLength(8)]]
				})
				this.forgetForm = this.formBuilder.group({
				   username: ['', [Validators.required, Validators.minLength(8)]],
				})
				this.registerForm = this.formBuilder.group({
				   etabType: [''],
				   categ: [''],
				   userclass: [''],
				   typeacc: [''],
				   configid: [''],
				   configlabel: [''],
				   Locationurl: [''],
				   firstName: ['', [Validators.required]],
				   lastName: [''],
				   phone: [''],
				   city: [''],
				   country: [''],
				   countrylabel: [''],
				   posLatitude: [''],
				   posLongitude: [''],
				   email: ['', [Validators.required]],
				   password: ['', [Validators.required]],
				   password2: ['', [Validators.required]]
				})
			  }
  
  ngOnInit(){
		var backcolor1_html: any =document.getElementById("backcolor1")  as HTMLElement;
		this.backcolor1= backcolor1_html.value;
		
		var backcolor2_html: any =document.getElementById("backcolor2")  as HTMLElement;
		this.backcolor2= backcolor2_html.value;
		
		var backcolor3_html: any =document.getElementById("backcolor3")  as HTMLElement;
		this.backcolor3= backcolor3_html.value;
		
		var textcolor_html: any =document.getElementById("textcolor")  as HTMLElement;
		this.textcolor1= textcolor_html.value;
		
		var textcolor2_html: any =document.getElementById("textcolor2")  as HTMLElement;
		this.textcolor2= textcolor2_html.value;
		
		var textcolor3_html: any =document.getElementById("textcolor3")  as HTMLElement;
		this.textcolor3= textcolor3_html.value;
	
	
		this.backcolor1 = "#ffffff";
		this.backcolor2 = "#ffffff";
		this.textcolor = "#ffffff";
		
		this.backcolor1 = "#ea890c";
	    this.backcolor2 = "#ffffff";
	    this.backcolor3 = "#06569d";
	    this.textcolor1 = "#4c4c4c";
	    this.textcolor2 = "#4c4c4c";
	    this.textcolor3 = "#ffffff";
  
		
		this.backcolor1 = "#e24206";
		//this.backcolor2 = "#e24206";
		this.textcolor = "#ffffff";
		
		backcolor1_html.value = this.backcolor1;
		backcolor2_html.value = this.backcolor2;
		textcolor_html.value = this.textcolor;
        var api_html: any =document.getElementById("API_SERVER")  as HTMLElement;
		this.REST_API_SERVER= api_html.value;
		if(screen.width<500){
			this.mobile = true;
		}else{
			this.height=Number(screen.height)-120;
		}
		this.onListpays();
		//this.mobile = true;
		
	    StatusBar.setOverlaysWebView({ overlay: true });
		//alert(screen.width+" "+screen.height)
		document.addEventListener('ionBackButton', (ev: BackButtonEvent) => {
		//alert("01")
		  ev.detail.register(-1, () => {
			//alert(window.location.pathname)
			const path = window.location.pathname;
			if(path=="/home"){
				App.exitApp();
			}
			if(path=="/etabtype"){
				App.exitApp();
			}
			if (path === this.routerEl.root) {
				App.exitApp();
			}
		  });
		});
  }
  


onCondition() {
	this.condition = !this.condition;
	console.log(this.condition)
}

	
  
onVerifypassword() {
	
	const password = this.registerForm.get('password')?.value;
	var nbr = password.length;
	console.log(password)
	var strmaj = password
	var strmaj1 = strmaj.replace(/[a-z]/g, ''); 
	var strmaj2 = strmaj1.replace(/[0-9]/g, ''); 
	this.upper1 = strmaj2.split('');
	
	var nbrmaj = this.upper1.length;
    
	this.numberupper = nbrmaj;
    
  
	var chiff = password
	var chiff1 = chiff.replace(/[a-z]/g, ''); 
	var chiff2 = chiff1.replace(/[A-Z]/g, ''); 
	this.nbrchiffr = chiff2.split('');
	
	var nbrch = this.nbrchiffr.length;
	this.numberchiffre = nbrch;
    this.tauxsecure=0;
	if(this.numberupper > 0){
		this.tauxsecure=50;
	}
	if(this.numberchiffre > 0){
		this.tauxsecure=this.tauxsecure+50;
	}
	
	if(nbr < 8){
		this.tauxsecure=0;
	}
	console.log(this.tauxsecure)
}


  onClose(){
	App.exitApp();
  }

  onSelectType(){
	var _accountTypehtml: any =document.getElementById("_accountType")  as HTMLElement;
	this._accountType= _accountTypehtml.value;
	this.showetabtype=true;	
	if(this._accountType=="eglise"){
		this._libtype="Dénomination/Communauté";
		this._libactivity="A propos";
		this.showactivity=true;
		this.showemploi=false;
	}	
	if(this._accountType=="entreprise"){
		this._libtype="Secteur d'activité";
		this._libactivity="A propos";
		this.showactivity=true;
		this.showemploi=false;
	}	
	if(this._accountType=="metier"){
		this._libtype="Secteur d'intervention";
		this._libactivity="A propos";
		this.showactivity=true;
		this.showemploi=false;
	}	
	if(this._accountType=="emploi"){
		this._libtype="Filière de formation";
		this._libactivity="Plus de détail";
		this.showactivity=false;
		this.showemploi=true;
	}	
	if(this._accountType=="stage"){
		this._libtype="Filière de formation";
		this._libactivity="Plus de détail";
		this.showactivity=false;
		this.showemploi=true;
	}	
	if(this._accountType=="scolaire"){
		this._libtype="Niveau d'étude";
		this.showactivity=false;
		this.showemploi=false;
	}	
	if(this._accountType=="academique"){
		this._libtype="Filière";
		this.showactivity=false;
		this.showemploi=false;
	}	
  }
  onSelectCountry(){
	var _countryhtml: any =document.getElementById("_country")  as HTMLElement;
	this._country= _countryhtml.value;
		
	if(this._country!=""){
		this.showcity=true;
	}else{
		this.showcity=false;
	}
  }
  
 goMenu(sel:any){
	if(sel=="left"){
		this.webleft = true;
		this.webtop = false;
	}
	if(sel=="top"){
		this.webtop = true;
		this.webleft = false;
	}
 }
 async CurrentPosition(){

  const position = await Geolocation.getCurrentPosition();
  this._posLatitude = position.coords.latitude;
  this._posLongitude = position.coords.longitude;
  this.showposition=true;
  var _Locationurlhtml: any =document.getElementById("_Locationurl")  as HTMLElement;
  _Locationurlhtml.value = "https://www.google.com/maps/dir//"+this._posLatitude+","+this._posLongitude;
  
  console.log(this._posLatitude);
  console.log(this._posLongitude);
};


  goSelect(sel:any){
	  this.config = false;
	  this.recette = false;
	  this.charge = false;
	  this.caisse = false;
	  this.admin = false;
	  this.event = false;
	  this.eglise = false;
	  this.hebergement = false;
	  this.transaction = false;
	  this.configschool = false;
	  this.editschool = false;
	  this.gestionimmo = false;
	  this.promotion = false;
	  this.parcauto = false;
	  this.gestioncom = false;
	  this.statut = false;
	  
	  if(sel=="recette"){
			this.recette = true;
	  }
	  if(sel=="charge"){
			this.charge = true;
	  }
	  if(sel=="caisse"){
			this.caisse = true;
	  }
	  if(sel=="admin"){
			this.admin = true;
	  }
	  if(sel=="event"){
			this.event = true;
	  }
	  if(sel=="config"){
			this.config = true;
	  }
	  if(sel=="eglise"){
			this.eglise = true;
	  }
	  if(sel=="hebergement"){
			this.hebergement = true;
	  }
	  if(sel=="transaction"){
			this.transaction = true;
	  }
	  if(sel=="configschool"){
			this.configschool = true;
	  }
	  if(sel=="editschool"){
			this.editschool = true;
	  }
	  if(sel=="gestionimmo"){
			this.gestionimmo = true;
	  }
	  if(sel=="promotion"){
			this.promotion = true;
	  }
	  if(sel=="parcauto"){
			this.parcauto = true;
	  }
	  if(sel=="gestioncom"){
			this.gestioncom = true;
	  }
	  if(sel=="statut"){
			this.statut = true;
	  }
  }
  
  showPassword(){
      this.isShow = !this.isShow;
	  var x = document.getElementById("_showpassword")  as HTMLElement;
	  if (this.isShow) {
		this.Typeinput="text";
	  } else {
		this.Typeinput="password";
	  }
  }
  onLogin(){
		this.Message = '';
		
		var userNameId: any =document.getElementById("username")  as HTMLElement;
		this.username= userNameId.value;
		
		var passwordId: any =document.getElementById("password")  as HTMLElement;
		this.password= passwordId.value;
		
		//console.log(this.username)
		//console.log(this.password)
		this.isEmpty=false;
		let postData = {
			userName: this.username,
			password: this.password
		}
		this.httpClient.post(this.REST_API_SERVER+"/login", postData, {headers: this.header})
			.subscribe(data => {
				console.log(data);
				
				this.resp = data;
				this._accounts = false;
				this._homePage = true;
                this._loginPage = false;
				
				this.isEmpty=true;
				this.onSetvalue(
				  this.resp.user.userApikey,
				  this.resp.user.walletId,
				  this.resp.user.categ,
				  this.resp.user.type,
				  this.resp.user.accountType,
				  this.resp.user.id,
				  this.resp.user.lastName,
				  this.resp.user.firstName,
				  this.resp.user.phone,
				  this.resp.user.email,
				  this.resp.user.accountAmount);
				  if(this.resp.user.image ==""){
						this.imgbaseUrl = "../assets/images/default-img.jpg";
				  }else{
						this.onGetImageone(this.resp.user.image);
				  }
				  this.onFindbyEmail();
				  this.onFindbyMobile();
				  
				this.navCtrl.navigateRoot('/first');
			}, error => {
				console.log(error);
				this.isEmpty=true;
				this.Message = 'Paramètres de connexion sont incorrects';
		});
        
  }
  
  
   onGetImageone(name:string){
		
		this.httpClient.get(this.REST_API_SERVER+"/file/name/"+name)
			.subscribe(data => {
				console.log(data);
				this.imgbaseUrl =data['content'];
			}, error => {
				console.log(error);
		});
 }
 
onRegister(){

	this.isEmpty2 = false;
	const password = this.registerForm.get('password')?.value;
	const password2 = this.registerForm.get('password2')?.value;

	if(password!=password2){
		this.isEmpty2 = true;
	}
	if(this.tauxsecure==0){
		this.isEmpty2 = true;
	}
	if(this.condition==false){
		this.isEmpty2 = true;
	}	
			
			this.Message = '';
			const etabType = this.registerForm.get('etabType')?.value;
			const firstName = this.registerForm.get('firstName')?.value;
			const countrylabel = this.registerForm.get('countrylabel')?.value;
			const country = this.registerForm.get('country')?.value;
			const city = this.registerForm.get('city')?.value;
			const phone = this.registerForm.get('phone')?.value;
			const email = this.registerForm.get('email')?.value;
		
		console.log("-"+password+"-"+"-"+password2+"-"+this.tauxsecure+"-"+this.condition+"-")
		if (!this.isEmpty2) {
	
			let postData = {
				type: etabType,
				firstName: firstName,
				lastName: ' ',
				phone: phone,
				userName: email,
				city: city,
				countryShortCode: country,
				email: email,
				password: password,
				accountStatus: "pending"
			}
			console.log(postData)
			this.httpClient.post(this.REST_API_SERVER+"/register", postData, {headers: this.header})
				.subscribe(data => {
					//console.log(data);
					  this._firstPage = false;
					  this._homePage = false;
					  this._accounts = false;
					  this._loginPage = false;
					  this._forgetPage = false;
					  this._registerPage = false;
					  this._createsuccessfull = true;
					  this.isEmpty2 = true;
					
			}, error => {
				console.log(error);
				this.Message=error.error.message;
			});
	        this.isEmpty2 = true;
		}else{
			this.Message="Renseignez correctement les champs";
		}		
  }

  onFindbyMobile(){
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer ',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
		this.httpClient.get(this.REST_API_SERVER+"/users/mobile/"+this.getmobile, {headers: header})
			.subscribe(data => {
				//console.log(data)
				this.list1=data;
					
			}, error => {
				console.log(error.error);
		});
  }
  
  onFindbyEmail(){
  
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer ',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
		this.httpClient.get(this.REST_API_SERVER+"/users/email/"+this.getemail, {headers: header})
			.subscribe(data => {
				console.log(data)
				this.list2=data;
			}, error => {
				console.log(error);
		});
  }
  
  
  onFindcashDesk(id:string){
        var walletId_html: any =document.getElementById("walletId")  as HTMLElement;
	    var walletId= walletId_html.value;
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
		this.httpClient.get(this.REST_API_SERVER+"/cashdesk/found/"+id, {headers: header})
			.subscribe(data => {
				console.log("Caisse")
				console.log(data)
				this.list2=data;
			}, error => {
				console.log(error);
		});
  }
   
   async presentModalCountry() {
    const modal = await this.modalCtrl.create({
      component: PaysPage,
	  componentProps: {
		//'word': word,
	  }
    });
	modal.onDidDismiss().then(data=>{
		console.log(data)
		console.log(data.data)
		if(data.data!="0"){
			this._countrylabel= data.data;
			this._country= data.role;
		}else{
			
		}
	})
    return await modal.present();
  }
 
 onListpays(){
		
		this.httpClient.get(this.REST_API_SERVER+"/countries")
			.subscribe(data => {
				console.log(data);
				this.countries=data;
			}, error => {
				console.log(error);
		});
 }
 
   
   async presentModalCity() {
	  
	
	var _countryhtml: any =document.getElementById("_country")  as HTMLElement;
	this._country= _countryhtml.value;
	
	
    const modal = await this.modalCtrl.create({
      component: VillePage,
	  componentProps: {
		'id': this._country,
	  }
    });
	modal.onDidDismiss().then(data=>{
		console.log(data)
		if(data.data!="0"){
			
			var _city_html: any =document.getElementById("_city")  as HTMLInputElement;
			_city_html.value= data.data;
			var _citylabel_html: any =document.getElementById("_citylabel")  as HTMLInputElement;
			_citylabel_html.value= data.role;
	
	
		}else{
			//this.country = "";
			//this.countrylabel = "";
		}
	})
    return await modal.present();
  }
   
   async presentModalSector() {
	var _accountTypehtml: any =document.getElementById("_accountType")  as HTMLElement;
	this._accountType= _accountTypehtml.value;  
    const modal = await this.modalCtrl.create({
      component: SecteurPage,
	  componentProps: {
		'type': this._accountType,
		'libelle': this._libtype
	  }
    });
	modal.onDidDismiss().then(data=>{
		console.log(data)
		if(data.data!="0"){
			
			var _etabType_html: any =document.getElementById("_etabType")  as HTMLInputElement;
			_etabType_html.value= data.data;
			var _etabTypelabel_html: any =document.getElementById("_etabTypelabel")  as HTMLInputElement;
			_etabTypelabel_html.value= data.role;
	
	
		}else{
			//this.country = "";
			//this.countrylabel = "";
		}
	})
    return await modal.present();
  }
 
   async presentModalDiplome() {
	
    const modal = await this.modalCtrl.create({
      component: DiplomePage,
	  componentProps: {
		'type': 'diplome',
		'libelle': 'Dernier diplôme'
	  }
    });
	modal.onDidDismiss().then(data=>{
		console.log(data)
		if(data.data!="0"){
			
			var _Diplomeid_html: any =document.getElementById("_Diplomeid")  as HTMLInputElement;
			_Diplomeid_html.value= data.data;
			var _Diplome_html: any =document.getElementById("_Diplome")  as HTMLInputElement;
			_Diplome_html.value= data.role;
	
	
		}else{
			
		}
	})
    return await modal.present();
  }
 

 goMyAccount(){
	this._accounts = false;
	this._homePage = true;
  }
  
  goOut(){
	this._loginPage = true;
	this._homePage = false;
  }
  goAccountlist(){
	this._accounts = true;
	this._homePage = false;
  }
  goSelectAccount(sel:string, cash:string){
	
	console.log("caisse "+cash)
	var cashdesk_html: any =document.getElementById("cashdesk")  as HTMLInputElement;
	cashdesk_html.value= cash;
	
	this.onGetUser(sel);
	this._accounts = false;
	this._homePage = true;
  }
  onForget(){
  
  }
  
 
 changePage(val : string) {
  if(val=="first"){
      this._firstPage = true;
      this._homePage = false;
	  this._accounts = false;
	  this._loginPage = false;
	  this._forgetPage = false;
	  this._registerPage = false;
	  this._createsuccessfull = false;
  }
  if(val=="home"){
      this._firstPage = false;
      this._homePage = true;
	  this._accounts = false;
	  this._loginPage = false;
	  this._forgetPage = false;
	  this._registerPage = false;
	  this._createsuccessfull = false;
  }
  if(val=="login"){
      this._firstPage = false;
      this._homePage = false;
	  this._accounts = false;
	  this._loginPage = true;
	  this._forgetPage = false;
	  this._registerPage = false;
	  this._createsuccessfull = false;
  }
  if(val=="register"){
      this._firstPage = false;
      this._homePage = false;
	  this._accounts = false;
	  this._loginPage = false;
	  this._forgetPage = false;
	  this._registerPage = true;
	  this._createsuccessfull = false;
  }
  if(val=="success"){
      this._firstPage = false;
      this._homePage = false;
	  this._accounts = false;
	  this._loginPage = false;
	  this._forgetPage = false;
	  this._registerPage = false;
	  this._createsuccessfull = true;
  }
  if(val=="forget"){
      this._firstPage = false;
      this._homePage = false;
	  this._accounts = false;
	  this._loginPage = false;
	  this._forgetPage = true;
	  this._registerPage = false;
	  this._createsuccessfull = false;
  }
}
 
  
   async onSetvalue(userApikey:string,
				  walletId:string,
				  categ:string,
				  type:string,
				  accountType:string,
				  id:string,
				  lastName:string,
				  firstName:string,
				  phone:string,
				  email:string,
				  accountAmount:string) {
	
				  
	this.getmobile = phone;
    this.getemail = email;
	this._apikey=walletId;			  
	var userApikey_html: any =document.getElementById("userApikey")  as HTMLInputElement;
	userApikey_html.value= userApikey;

	var walletId_html: any =document.getElementById("walletId")  as HTMLInputElement;
	walletId_html.value= walletId;
	
	var categ_html: any =document.getElementById("idcateg")  as HTMLInputElement;
	categ_html.value= categ;
	
	var type_html: any =document.getElementById("idtype")  as HTMLInputElement;
	type_html.value= type;
	
	var accountType_html: any =document.getElementById("idaccountType")  as HTMLInputElement;
	accountType_html.value= accountType;
	
	var id_html: any =document.getElementById("idadmin")  as HTMLInputElement;
	id_html.value= id;
	
	var lastName_html: any =document.getElementById("idlastName")  as HTMLInputElement;
	lastName_html.value= lastName;
	
	var firstName_html: any =document.getElementById("idfirstName")  as HTMLInputElement;
	firstName_html.value= firstName;
	
	var phone_html: any =document.getElementById("idphone")  as HTMLInputElement;
	phone_html.value= phone;
	
	var email_html: any =document.getElementById("idemail")  as HTMLInputElement;
	email_html.value= email;
	
	var solde_html: any =document.getElementById("idsolde")  as HTMLInputElement;
	solde_html.value= accountAmount;
  }
  
  
 onGetUser(id:string){
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer ',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
	   let postData = {
			
		}
		this.httpClient.get(this.REST_API_SERVER+"/users/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				var walletId_html: any =document.getElementById("walletId")  as HTMLInputElement;
				walletId_html.value= data['walletId'];
				console.log("walletId "+data['walletId'])
				//this.onFindcashDesk(data['id']);
			}, error => {
				console.log(error);
		});
 }
}
