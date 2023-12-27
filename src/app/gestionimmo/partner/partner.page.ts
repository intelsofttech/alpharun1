import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.page.html',
  styleUrls: ['./partner.page.scss'],
})
export class PartnerPage implements OnInit {

  
  
  
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
  searchValue :any= "0";
  id :any= "0";
  number :any= "0";
  firstName :any= "";
  lastName :any= "";
  master :any= "";
  birthDate :any= "";
  birthLocate :any= "";
  nationality :any= "";
  type :any= "";
  typeidcard :any= "";
  numidcard :any= "";
  dateidcard :any= "";
  endidcard :any= "";
  locateidcard :any= "";
  countryidcard :any= "";
  image1idcard :any= "";
  image2idcard :any= "";
  signbyidcard :any= "";
  profession :any= "";
  phone :any= "";
  email :any= "";
  address :any= "";
  city :any= "";
  locateurl :any= "";
  description :any= "";
  url :any= "";
  imgselected :any= "";
  
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
	libfile1="";
	libfile2="";
	libfile3="";
	libfile4="";
	libfile5="";
	libfile6="";
	libfile7="";
	libfile8="";
	libfile9="";
	libfile10="";
	
	
   imageurl :any= "";
   imageurl1 :any= "";
   imageurl2 :any= "";
   imageurl3 :any= "";
   imageurl4 :any= "";
   imageurl5 :any= "";
	
  Uuid :any ="";
  partnercId :any ="";
  usergroupselect :any= "";
  usergroup :any= "client";
  liboperation :any= "AJOUT";
  
  agency = "0";
  word = "";
  billparam1 = "";
  billparam2 = "";
  billparam3 = "";
  billparam4 = "";
  
  baseurl = "";
  baseurl2 = "";
	
  public results :any = [];
  public alllist :any = [];
  public filtered :any = [];
  searchNotMatched = true;
 constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  public navController: NavController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient) {
			  this.pageForm = this.formBuilder.group({
				 word: ['']
			  })
			  this.categForm = this.formBuilder.group({
				   firstName: ['', [Validators.required, Validators.minLength(2)]],
				   lastName: [''],
				   birthDate: [''],
				   birthLocate: [''],
				   nationality: [''],
				   type: [''],
				   typeidcard: [''],
				   numidcard: [''],
				   dateidcard: [''],
				   endidcard: [''],
				   locateidcard: [''],
				   countryidcard: [''],
				   image1idcard: [''],
				   image2idcard: [''],
				   signbyidcard: [''],
				   profession: [''],
				   master: [''],
				   phone: [''],
				   email: [''],
				   address: [''],
				   city: [''],
				   locateurl: [''],
				   description: [''],
				   usergroup: [''],
				   url: [''],
					file1: [''],
					file2: [''],
					file3: [''],
					file4: [''],
					file5: [''],
					file6: [''],
					file7: [''],
					file8: [''],
					file9: [''],
					file10: [''],
					namefile1: [''],
					namefile2: [''],
					namefile3: [''],
					namefile4: [''],
					namefile5: [''],
					namefile6: [''],
					namefile7: [''],
					namefile8: [''],
					namefile9: [''],
					namefile10: ['']
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
	var agency_html: any =document.getElementById("agency")  as HTMLElement;
	this.agency= agency_html.value;
	
	this.param1 = this.activatedRoute.snapshot.paramMap.get('param1');
	this.param2 = this.activatedRoute.snapshot.paramMap.get('param2');
	this.usergroup=this.param1;
	this.number = Date.now();
	this.onList();	
	this.onGetInfo();	
  }
  close() {
    this.navController.back();
  }
  handleInput(event:any) {
    const query = event.target.value.toLowerCase();
    //this.results = this.results.filter((d) => d.toLowerCase().indexOf(query) > -1);
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


  result: any =[];
  public actionSheetButtons = [
    {
      text: 'Recettes et ventes',
      data: {
        action: 'recette',
      },
    },
    {
      text: 'Dévis',
      data: {
        action: 'devis',
      },
    },
    {
      text: 'Proformas',
      data: {
        action: 'proforma',
      },
    },
    {
      text: 'Charges et commandes',
      data: {
        action: 'charge',
      },
    },
    {
      text: 'Bons de commande',
      data: {
        action: 'bon',
      },
    },
    {
      text: 'Annuler',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];
  
  
   async setResult(ev) {
    console.log(ev.detail)
    this.result = ev.detail;
	
	
	if(this.result['data']['action']=="recette"){
	  this.billparam1 = "1";
	  this.billparam2 = "COUNTED";
	  this.billparam3 = "0";
	  this.billparam4 = "Recettes et Ventes";
	  this.navController.navigateRoot('/partnerbill/'+this.billparam1+'/'+this.billparam2+'/'+this.billparam3+'/'+this.billparam4+'/'+this.partnercId);
	}
	if(this.result['data']['action']=="devis"){
	  this.billparam1 = "1";
	  this.billparam2 = "DEVIS";
	  this.billparam3 = "3";
	  this.billparam4 = "Dévis";
	  this.navController.navigateRoot('/partnerbill/'+this.billparam1+'/'+this.billparam2+'/'+this.billparam3+'/'+this.billparam4+'/'+this.partnercId);
		
	}
	if(this.result['data']['action']=="proforma"){
	  this.billparam1 = "1";
	  this.billparam2 = "PROFORMA";
	  this.billparam3 = "4";
	  this.billparam4 = "Proformas";
	  this.navController.navigateRoot('/partnerbill/'+this.billparam1+'/'+this.billparam2+'/'+this.billparam3+'/'+this.billparam4+'/'+this.partnercId);
		
	}
	if(this.result['data']['action']=="charge"){
	  this.billparam1 = "2";
	  this.billparam2 = "COUNTED";
	  this.billparam3 = "2";
	  this.billparam4 = "Charges et commandes";
	  this.navController.navigateRoot('/partnerbill/'+this.billparam1+'/'+this.billparam2+'/'+this.billparam3+'/'+this.billparam4+'/'+this.partnercId);
		
	}
	if(this.result['data']['action']=="bon"){
	  this.billparam1 = "2";
	  this.billparam2 = "BON-COMMANDE";
	  this.billparam3 = "3";
	  this.billparam4 = "Bons de commandes";
	  this.navController.navigateRoot('/partnerbill/'+this.billparam1+'/'+this.billparam2+'/'+this.billparam3+'/'+this.billparam4+'/'+this.partnercId);
		
	}
  }



  
  onPartnerselected(sel:any){
      var partnerclick_html: any =document.getElementById("open-action-sheet")  as HTMLElement;
	  partnerclick_html.click(); 
	  this.partnercId= sel; 
  }

  
  onNew(){
       this.Uuid =uuidv4();
	   this.addForm = true;
	   this.id = "0";
	   this.usergroup=this.param1;
	   this.liboperation = "AJOUT";
  } 
  onCancelNew(){
	   this.addForm = false;
  }
  onAdd(): any{
      this.isSend = false;
	  if (!this.categForm.valid) {
		
	  }else {
	   let firstName = this.categForm.get('firstName')?.value;
	   let lastName = this.categForm.get('lastName')?.value;
	   let phone = this.categForm.get('phone')?.value;
	   let master = this.categForm.get('master')?.value;
	   let birthDate = this.categForm.get('birthDate')?.value;
	   let birthLocate = this.categForm.get('birthLocate')?.value;
	   let nationality = this.categForm.get('nationality')?.value;
	   let type = this.categForm.get('type')?.value;
	   let typeidcard = this.categForm.get('typeidcard')?.value;
	   let numidcard = this.categForm.get('numidcard')?.value;
	   let dateidcard = this.categForm.get('dateidcard')?.value;
	   let endidcard = this.categForm.get('endidcard')?.value;
	   let locateidcard = this.categForm.get('locateidcard')?.value;
	   let countryidcard = this.categForm.get('countryidcard')?.value;
	   let image1idcard = this.categForm.get('image1idcard')?.value;
	   let image2idcard = this.categForm.get('image2idcard')?.value;
	   let signbyidcard = this.categForm.get('signbyidcard')?.value;
	   let profession = this.categForm.get('profession')?.value;
	   let email = this.categForm.get('email')?.value;
	   let address = this.categForm.get('address')?.value;
	   let city = this.categForm.get('city')?.value;
	   let locateurl = this.categForm.get('locateurl')?.value;
	   let description = this.categForm.get('description')?.value;
		let file1 = this.pageForm.get('file1')?.value;
		let file2 = this.pageForm.get('file2')?.value;
		let file3 = this.pageForm.get('file3')?.value;
		let file4 = this.pageForm.get('file4')?.value;
		let file5 = this.pageForm.get('file5')?.value;
		let file6 = this.pageForm.get('file6')?.value;
		let file7 = this.pageForm.get('file7')?.value;
		let file8 = this.pageForm.get('file8')?.value;
		let file9 = this.pageForm.get('file9')?.value;
		let file10 = this.pageForm.get('file10')?.value;
		let usergroup = this.categForm.get('usergroup')?.value;
	   if(lastName==null || lastName==''){
		  lastName="-";
	   }
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
				firstName: firstName,
				lastName: lastName,
				profession: profession,
				master: master,
				birthDate: birthDate,
				birthLocate: birthLocate,
				nationality: nationality,
				type: type,
				typeidcard: typeidcard,
				numidcard: numidcard,
				dateidcard: dateidcard,
				endidcard: endidcard,
				locateidcard: locateidcard,
				countryidcard: countryidcard,
				image1idcard: image1idcard,
				image2idcard: image2idcard,
				signbyidcard: signbyidcard,
				mobile: phone,
			    emailaddress: email,
				address: address,
				city: city,
				locateurl: locateurl,
				description: description,
				file1 : file1,
				file2 : file2,
				file3 : file3,
				file4 : file4,
				file5 : file5,
				file6 : file6,
				file7 : file7,
				file8 : file8,
				file9 : file9,
				file10 : file10,
				userName: this.Uuid,
				password: "0101",
				usergroup: this.usergroup
		    }
			
			this.httpClient.post(this.REST_API_SERVER+"/newuser", postData, {headers: header})
			.subscribe(data => {
					console.log(data);
					this.onList();
					this.addForm = false;
					this.isSend = false;
				    this.firstName = "";
				    this.lastName = "";
				    this.type = "";
				    this.master = "";
				    this.phone = "";
				    this.email = "";
				    this.address = "";
				    this.city = "";
				    this.locateurl = "";
				    this.description = "";
  
				}, error => {
					this.isSend = false;	
					console.log(error);
			});
	   }else{
			let postData = {
				firstName: firstName,
				lastName: lastName,
				profession: profession,
				master: master,
				birthDate: birthDate,
				birthLocate: birthLocate,
				nationality: nationality,
				type: type,
				typeidcard: typeidcard,
				numidcard: numidcard,
				dateidcard: dateidcard,
				endidcard: endidcard,
				locateidcard: locateidcard,
				countryidcard: countryidcard,
				image1idcard: image1idcard,
				image2idcard: image2idcard,
				signbyidcard: signbyidcard,
				mobile: phone,
			    emailaddress: email,
				address: address,
				city: city,
				locateurl: locateurl,
				file1 : file1,
				file2 : file2,
				file3 : file3,
				file4 : file4,
				file5 : file5,
				file6 : file6,
				file7 : file7,
				file8 : file8,
				file9 : file9,
				file10 : file10,
				usergroup : usergroup,
		    }
			console.log(postData);
		   this.httpClient.put(this.REST_API_SERVER+"/updateuser/"+this.id, postData, {headers: header})
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
  
  onAppartmenttenant(id:any): any{
	   var header = {
		'Content-Type': 'application/json',
		'enctype': 'application/json',
		'Accept': '*',
		'Authorization': 'Bearer '+this.walletId,
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
		'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
	   };
	 
		this.httpClient.get(this.REST_API_SERVER+"/apartment/delete/tenant/"+id, {headers: header})
				.subscribe(data => {
					console.log(data);
				}, error => {	
					console.log(error);
		});
 }
  onUpdatetype(id:any): any{
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
				usergroup : "locataire",
		    }
			console.log(postData);
		   this.httpClient.put(this.REST_API_SERVER+"/updateusertype/"+id, postData, {headers: header})
				.subscribe(data => {
					console.log(data);
					this.onList();
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

  private setFilteredList(): void {
    this.filtered = this.results.map(result => {
      return result.showcases.filter(line => line.firstName === this.searchValue)
    });
  }
  
    applyFilter() {
	  let filterValue = this.pageForm.get('word')?.value;
         if(filterValue === '' ) {
             this.results=this.alllist;
         }else{
			
           this.results = this.alllist.filter(results => results.firstName.toLowerCase().includes(filterValue.toLowerCase()));
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
		this.httpClient.get(this.REST_API_SERVER+"/users/usergroup/"+this.usergroup, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.results = data;
				this.alllist = data;
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
		this.httpClient.delete(this.REST_API_SERVER+"/users/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.onAppartmenttenant(id);
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
		this.httpClient.get(this.REST_API_SERVER+"/users/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.addForm = true;
				this.liboperation = "MODIFICATION";
				this.id = data['id'];
				this.firstName = data['firstName'];
				this.lastName = data['lastName'];
				this.master = data['master'];
				this.profession = data['profession'];
				
				if(data['birthDate']!="" && data['birthDate']!=null){
					let date01 = data['birthDate'];
					let date1 = date01.substr(0, 10);
					this.birthDate = date1;
				}
				this.birthLocate = data['birthLocate'];
				
				this.nationality = data['nationality'];
				this.typeidcard = data['typeidcard'];
				this.numidcard = data['numidcard'];
				
				if(data['dateidcard']!="" && data['dateidcard']!=null){
					let date02 = data['dateidcard'];
					let date2 = date02.substr(0, 10);
					this.dateidcard = date2;
				}
				
				if(data['endidcard']!="" && data['endidcard']!=null){
					let date02 = data['endidcard'];
					let date2 = date02.substr(0, 10);
					this.endidcard = date2;
				}
				this.usergroupselect = data['usergroup'];
				this.locateidcard = data['locateidcard'];
				this.countryidcard = data['countryidcard'];
				this.image1idcard = data['image1idcard'];
				this.image2idcard = data['image2idcard'];
				this.type = data['type'];
				this.signbyidcard = data['signbyidcard'];
				this.phone = data['mobile'];
				this.email = data['emailaddress'];
				this.address = data['address'];
				this.city = data['city'];
				this.locateurl = data['locateurl'];
				this.description = data['description'];
				this.file1 = data['file1'];
				this.file2 = data['file2'];
				this.file3 = data['file3'];
				this.file4 = data['file4'];
				this.file5 = data['file5'];
				this.file6 = data['file6'];
				this.file7 = data['file7'];
				this.file8 = data['file8'];
				this.file9 = data['file9'];
				this.walletId = data['walletId'];
				this.url = this.baseurl+"/#/home/"+this.walletId;
				if(this.file1!=""){
					this.onGetImageone(data['file1'], "file1");
				}
				if(this.file2!=""){
					this.onGetImageone(data['file2'], "file2");
				}
				if(this.file3!=""){
					this.onGetImageone(data['file3'], "file3");
				}
				if(this.file4!=""){
					this.onGetImageone(data['file4'], "file4");
				}
				if(this.file5!=""){
					this.onGetImageone(data['file5'], "file5");
				}
				if(this.type=="Personne morale"){
					this.libfile1="3 Dernières reçus de facture CIE ou SODECI";
					this.libfile2="3 Dernières quittances de  loyer";
					this.libfile3="3 Dernières relévés de compte ou document solvabilité";
					this.libfile4="Registre de commerce";
					this.libfile5="Copie pièce d'identité ou passeport";
				}else{
					this.libfile1="Reçus de facture CIE ou SODECI";
					this.libfile2="3 Dernières quittances de  loyer";
					this.libfile3="3 Dernières bulletins de salaire";
					this.libfile4="Attestation de travail";
					this.libfile5="Copie pièce d'identité ou passeport";
				}
				
				//this.onList();
			}, error => {
				console.log(error);
		});
 }
 

 onGetInfo(){
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
		this.httpClient.get(this.REST_API_SERVER+"/my-account", {headers: header})
			.subscribe(data => {
				console.log(data);
				this.baseurl= data['baseurl'];
				this.baseurl2= data['baseurl2'];
			}, error => {
				console.log(error);
		});
 }
 	
  
 onGetImageone(name:string, sel:any){
		this.imgselected= sel;
		this.httpClient.get(this.REST_API_SERVER+"/file/name/"+name)
			.subscribe(data => {
				console.log(data);
				if(sel=="file1"){
					this.imageurl1 =data['content'];
				}
				if(sel=="file2"){
					this.imageurl2 =data['content'];
				}
				if(sel=="file3"){
					this.imageurl3 =data['content'];
				}
				if(sel=="file4"){
					this.imageurl4 =data['content'];
				}
				if(sel=="file5"){
					this.imageurl5 =data['content'];
				}
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
