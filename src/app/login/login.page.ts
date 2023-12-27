import { Component, NgZone, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { CountryPage } from '../country/country.page';
import { ConfigPage } from '../config/config.page';
import { CapacitorHttp } from '@capacitor/core';
import { Observable } from 'rxjs';
import { CallbackID, Capacitor } from '@capacitor/core';
import { Geolocation } from '@capacitor/geolocation';
import { IonicSlides } from '@ionic/angular';
import { Swiper } from 'swiper';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
 
 public REST_API_SERVER = "http://localhost:8080";
 header = {
				//'Content-Type': 'application/json',
				'enctype': 'application/json',
				'Accept': '*',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
				'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
		};
 @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  images = [
    'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    'https://images.unsplash.com/photo-1488229297570-58520851e868',
  ];
 
  
 loginForm: FormGroup;
 registerForm: FormGroup;
 forgetForm: FormGroup;
 createsuccessfull = false;
 isSubmitted2 = false;
 isSubmitted = false;
 isEmpty2 = true;
 isEmpty = true;
 firstPage = false;
 Header = false;
 homePage = false;
 loginPage = true;
 registerPage = false;
 forgetPage = false;
 agencyPage = false;
 helpPage = false;
 countryId = false;
 selectId = false;
 gpsLocation = false;
 gpsLocationCord = false;
 reportlastName = 'Lastname';
 Message = "";
 resp :any = [] ;
 listtype :any = [] ;
 country :string = "";
 configid :string = ""
 configlabel = ""
 countrylabel :string = "";
 usertype :string = "";
 usercateg :string = "";
 userclass :string = "";
 posLatitude :any = "";
 posLongitude :any = "";
 cords :any = "vide";
 coordinate: any;
 watchCoordinate: any;
 watchId: any;  
 //Type application : Education Job Manager School Event Building
 //AppSelect = "Education";
 AppSelect = "Entreprise";
 ShowAppSelect = false;
 ShowAppUnderSelect = false;
 ShowSelect = false;
 LibUnderSelect = "";
 usereducation  = [{id: 1,label: 'Primaire'},{id: 2,label: 'Sécondaire Général'},{id: 3,label: 'Sécondaire Technique'}];
 userjob  = [{id: 1,label: 'Cherche emploi'},{id: 2,label: 'Cherche stage'},{id: 3,label: 'Formation carrière'},{id: 3,label: 'Formation carrière'},{id: 3,label: 'Formation carrière'},{id: 3,label: 'Formation carrière'}];
 usergestion  = [{id: 1,label: 'Vente et stock'},{id: 2,label: 'Hôtel'},{id: 3,label: 'Hopital'}];
 userschool  = [{id: 1,label: 'Gérer une classe'},{id: 2,label: 'Gérer une école'}];
 usereglise  = [{id: 1,label: 'Eglise'},{id: 6,label: 'Département ou Groupe'},{id: 2,label: 'Entreprise ou Métier'}];
 //usereglise  = [{id: 1,label: 'Eglise ou Département'},{id: 2,label: 'Entreprise et Métier'},{id: 3,label: 'Emploi et Stage'},{id: 4,label: 'Education et Encadrement'},{id: 5,label: 'Conseils et Suivi'}];
 


  constructor(private zone: NgZone,
			  public Geolocation: Geolocation,
			  public formBuilder: FormBuilder,
			  public  modalCtrl: ModalController,
			  public httpClient: HttpClient,
			  public navCtrl: NavController) {
	this.loginForm = this.formBuilder.group({
	   username: ['', [Validators.required, Validators.minLength(2)]],
	   password: ['', [Validators.required, Validators.minLength(2)]]
	})
	this.forgetForm = this.formBuilder.group({
	   username: ['', [Validators.required, Validators.minLength(2)]],
	})
	this.registerForm = this.formBuilder.group({
	   usertype: [''],
	   usercateg: [''],
	   userclass: [''],
	   typeacc: [''],
	   configid: [''],
	   configlabel: [''],
	   firstName: ['', [Validators.required, Validators.minLength(2)]],
	   lastName: [''],
	   phone: ['', [Validators.required, Validators.minLength(8)]],
	   city: ['', [Validators.required, Validators.minLength(1)]],
	   country: ['', [Validators.required, Validators.minLength(1)]],
	   countrylabel: [''],
	   posLatitude: [''],
	   posLongitude: [''],
	   email: ['', 
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
	   ],
	   password: ['', [Validators.required, Validators.minLength(2)]],
	   password2: ['', [Validators.required, Validators.minLength(2)]]
	})
  }

  ngOnInit() {
		var api_html: any =document.getElementById("API_SERVER")  as HTMLElement;
		this.REST_API_SERVER= api_html.value;
		console.log(this.REST_API_SERVER);
		
		this.usertype="Particulier";
		
		if(this.AppSelect=="Eglise"){
			this.listtype = this.usereglise;
			this.ShowAppSelect = true;
			this.ShowAppUnderSelect = true;
			this.LibUnderSelect = "Secteur";
		}
		if(this.AppSelect=="Education"){
			this.listtype = this.usereducation;
			this.ShowAppSelect = true;
			this.ShowAppUnderSelect = true;
			this.LibUnderSelect = "Niveau";
		}
		if(this.AppSelect=="Job"){
			this.listtype = this.userjob;
			this.ShowAppSelect = true;
			this.ShowAppUnderSelect = true;
			this.LibUnderSelect = "Filère de formation";
		}
		if(this.AppSelect=="Manager"){
			this.listtype = this.usergestion;
			this.ShowAppSelect = true;
			this.ShowAppUnderSelect = false;
			this.LibUnderSelect = "Under";
		}
		if(this.AppSelect=="School"){
			this.listtype = this.userschool;
			this.ShowAppSelect = true;
			this.ShowAppUnderSelect = false;
			this.LibUnderSelect = "Classe";
		}
		if(this.AppSelect=="Event"){
			this.ShowAppSelect = false;
			this.ShowAppUnderSelect = false;
			this.LibUnderSelect = "Under";
		}
		if(this.AppSelect=="Building"){
			this.ShowAppSelect = false;
			this.ShowAppUnderSelect = false;
			this.LibUnderSelect = "Under";
		}
		console.log(this.listtype);
		this.onCashdesk();
  }
  
  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }
 
  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }
 
  goNext() {
    this.swiper?.slideNext();
  }
 
  goPrev() {
    this.swiper?.slidePrev();
  }
  
  
  async requestPermissions() {
    const permResult = await Geolocation.requestPermissions();
    console.log('Perm request result: ', permResult);
  }

  getCurrentCoordinate() {
    if (!Capacitor.isPluginAvailable('Geolocation')) {
      console.log('Plugin geolocation not available');
      return;
    }
    Geolocation.getCurrentPosition().then(data => {
      this.coordinate = {
        latitude: data.coords.latitude,
        longitude: data.coords.longitude,
        accuracy: data.coords.accuracy
      };
		this.gpsLocationCord = true;
		 this.posLatitude = data.coords.latitude;
		 this.posLongitude = data.coords.longitude;
    }).catch(err => {
      console.error(err);
	  this.watchPosition();
    });
  }

  watchPosition() {
    try {
      this.watchId = Geolocation.watchPosition({}, (position, err) => {
        console.log('Watch', position);
		this.watchCoordinate = {
            latitude: position!.coords.latitude,
            longitude: position!.coords.longitude,
          };
		 this.gpsLocationCord = true;
		 this.posLatitude = position!.coords.latitude;
		 this.posLongitude = position!.coords.longitude; 
        this.zone.run(() => {
          
        });
      });
    } catch (e) {
      console.error(e);
    }
  }

  clearWatch() {
    if (this.watchId != null) {
      Geolocation.clearWatch({ id: this.watchId });
    }
  }
  async getPosition(){
    this.cords = "get ";
		const printCurrentPosition = async () => {
			const coordinates = await Geolocation.getCurrentPosition();
			this.cords = coordinates;
			//this.posLatitude = coordinates.latitude;
			//this.posLongitude = coordinates.longitude;
			console.log('Current position:', coordinates);
		};
  }
 

	
 
 get errorControl() {
  return this.loginForm.controls;
}

  async presentModalConfig() {
	//const word = this.FormSign.get('Secteur').value;				  
	  
    const modal = await this.modalCtrl.create({
      component: ConfigPage,
	  componentProps: {
		'cat': this.usertype,
	  }
    });
	modal.onDidDismiss().then(data=>{
		console.log(data)
		if(data.data!="0"){
			this.configid =String(data.data);
			this.configlabel =String(data.role);
		}else{
			this.configid = "";
			this.configlabel = "";
		}
	})
    return await modal.present();
  }
  
  async presentModalCountry() {
	//const word = this.FormSign.get('Secteur').value;				  
	  
    const modal = await this.modalCtrl.create({
      component: CountryPage,
	  componentProps: {
		//'word': word,
	  }
    });
	modal.onDidDismiss().then(data=>{
		console.log(data)
		if(data.data!="0"){
			this.country =String(data.data);
			this.countrylabel =String(data.role);
			console.log(String(this.country));
		}else{
			//this.country = "";
			//this.countrylabel = "";
		}
	})
    return await modal.present();
  }
  
  
 changePage(val : string) {
  this.createsuccessfull = false;
  if(val=="first"){
    this.firstPage = true;
    this.Header = true;
    this.homePage = false;
    this.loginPage = false;
    this.registerPage = false;
    this.forgetPage = false;
  }
  if(val=="home"){
    this.firstPage = false;
    this.Header = true;
    this.homePage = true;
    this.loginPage = false;
    this.registerPage = false;
    this.forgetPage = false;
  }
  if(val=="login"){
    this.Header = false;
    this.firstPage = false;
    this.homePage = false;
    this.loginPage = true;
    this.registerPage = false;
    this.forgetPage = false;
  }
  if(val=="register"){
    this.Header = false;
    this.firstPage = false;
    this.homePage = false;
    this.loginPage = false;
    this.registerPage = true;
    this.forgetPage = false;
  }
  if(val=="forget"){
    this.Header = false;
    this.firstPage = false;
    this.homePage = false;
    this.loginPage = false;
    this.registerPage = false;
    this.forgetPage = true;
  }
}
 
 changePageToHome() {
 
    this.firstPage = false;
    this.homePage = true;
    this.loginPage = false;
    this.registerPage = false;
    this.forgetPage = false;
}
 changePageToFirst() {
 
    this.firstPage = true;
    this.homePage = false;
    this.loginPage = false;
    this.registerPage = false;
    this.forgetPage = false;
}
 onLogin(): any {
	  this.isSubmitted = true;
	  if (!this.loginForm.valid) {
		console.log('Please provide all the required values!')
		this.Message = 'Veuillez renseigner correctement les champs';
		this.isEmpty = true;
	  } else {
		//console.log(this.loginForm.value)
		this.Message = '';
		const userName = this.loginForm.get('username')?.value;
		const password = this.loginForm.get('password')?.value;
		
		let postData = {
			userName: userName,
			password: password
		}
		this.httpClient.post(this.REST_API_SERVER+"/login", postData, {headers: this.header})
			.subscribe(data => {
				console.log(data);
				this.resp = data;
				this.changePageToHome();
				this.onSetvalue(
				  this.resp.user.userApikey,
				  this.resp.user.walletId,
				  this.resp.user.categ,
				  this.resp.user.accountType,
				  this.resp.user.id,
				  this.resp.user.lastName,
				  this.resp.user.firstName,
				  this.resp.user.phone);
				  this.isEmpty = true;
			}, error => {
				console.log(error);
				this.Message = 'Paramètres de connexion sont incorrects';
		});
        this.isEmpty = true;
		return false;
	  }
 }
 onCashdesk() {
	 
		this.httpClient.post(this.REST_API_SERVER+"/cashdesk/all", {headers: this.header})
			.subscribe(data => {
				console.log(data);
			}, error => {
				console.log(error);
		});
 }
 
 onLogin3(): any {
	  
 }	
  onRegister(): any {
	this.isEmpty2 = false;
	const password = this.registerForm.get('password')?.value;
	const password2 = this.registerForm.get('password2')?.value;
	if(password!=password2){
		this.isEmpty2 = true;
	}	 
	
	console.log(this.registerForm);
	this.isSubmitted2 = true;
	  if (!this.registerForm.valid) {
		console.log('Please provide all the required values!')
		this.Message = 'Veuillez renseigner correctement les champs';
		this.isEmpty2 = true;
	  } else {
	  if (!this.isEmpty2) {
			
			this.Message = '';
			this.usertype = this.registerForm.get('usertype')?.value;
			const usercateg = this.registerForm.get('usercateg')?.value;
			const userclass = this.registerForm.get('userclass')?.value;
			const typeacc = this.registerForm.get('typeacc')?.value;
			const configid = this.registerForm.get('configid')?.value;
			const configlabel = this.registerForm.get('configlabel')?.value;
			const firstName = this.registerForm.get('firstName')?.value;
			const lastName = this.registerForm.get('lastName')?.value;
			const phone = this.registerForm.get('phone')?.value;
			const city = this.registerForm.get('city')?.value;
			const country = this.registerForm.get('country')?.value;
			const countrylabel = this.registerForm.get('countrylabel')?.value;
			const posLatitude = this.registerForm.get('posLatitude')?.value;
			const posLongitude = this.registerForm.get('posLongitude')?.value;
			const email = this.registerForm.get('email')?.value;
			const password = this.registerForm.get('password')?.value;
			const password2 = this.registerForm.get('password2')?.value;
			if(lastName==""){
				this.reportlastName = 'Lastname';
			}else{
				this.reportlastName = lastName;
			}
			if(this.usertype==""){
				this.usertype = 'Particulier';
			}
			alert(this.usertype)
			let postData = {
				accountType: this.usertype,
				categ: configid,
				firstName: firstName,
				lastName: this.reportlastName,
				phone: phone,
				userName: 'usernamecode'+phone,
				city: city,
				countryShortCode: country,
				latitude: posLatitude,
				longitude: posLongitude,
				email: email,
				password: password,
			}
			console.log(postData)
			this.httpClient.post(this.REST_API_SERVER+"/register", postData, {headers: this.header})
				.subscribe(data => {
					console.log(data);
					this.firstPage = false;
					this.homePage = false;
					this.loginPage = true;
					this.registerPage = false;
					this.forgetPage = false;
					this.createsuccessfull = true;
				}, error => {
					this.isEmpty2 = true;
					console.log(error);
			});
	        this.isEmpty2 = true;
			return false;
		}	
		
	  }
  }


triggerEvent(){
	    
	if(this.usertype!=""){
		this.ShowAppSelect=true;
	}   
	if(this.AppSelect == "Eglise"){
	console.log(this.usertype)
		if(this.usertype=="1"){
			this.LibUnderSelect = "Dénomination";
			this.ShowSelect=true;
			this.gpsLocation=true;
		}
		if(this.usertype=="2"){
			this.LibUnderSelect = "Secteur d'activité";
			this.ShowSelect=true;
			this.gpsLocation=true;
		}
		if(this.usertype=="3"){
			this.LibUnderSelect = "Filière de formation";
			this.ShowSelect=true;
			this.gpsLocation=false;
		}
		if(this.usertype=="4"){
			this.LibUnderSelect = "Niveau de formation";
			this.ShowSelect=true;
			this.gpsLocation=false;
		}
		if(this.usertype=="5"){
			this.LibUnderSelect = "Conseil et suivi";
			this.ShowSelect=false;
			this.gpsLocation=false;
		}
	}
  }

 async onForget() {
	
	
  }
 async onSetvalue(userApikey:string,
				  walletId:string,
				  categ:string,
				  accountType:string,
				  id:string,
				  lastName:string,
				  firstName:string,
				  phone:string) {
				  
	var userApikey_html: any =document.getElementById("userApikey")  as HTMLInputElement;
	userApikey_html.value= userApikey;
	var walletId_html: any =document.getElementById("walletId")  as HTMLInputElement;
	walletId_html.value= walletId;
	var categ_html: any =document.getElementById("categ")  as HTMLInputElement;
	categ_html.value= categ;
	var accountType_html: any =document.getElementById("accountType")  as HTMLInputElement;
	accountType_html.value= accountType;
	var id_html: any =document.getElementById("id")  as HTMLInputElement;
	id_html.value= id;
	var lastName_html: any =document.getElementById("lastName")  as HTMLInputElement;
	lastName_html.value= lastName;
	var firstName_html: any =document.getElementById("firstName")  as HTMLInputElement;
	firstName_html.value= firstName;
	var phone_html: any =document.getElementById("phone")  as HTMLInputElement;
	phone_html.value= phone;
  }
  
}
