import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
import { PartnermodalPage } from '../../partnermodal/partnermodal.page';
import { PartnercontratPage } from '../../partnercontrat/partnercontrat.page';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';



@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.page.html',
  styleUrls: ['./apartment.page.scss'],
})
export class ApartmentPage implements OnInit {

  
  
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
  selectForm: FormGroup;
  typeForm: FormGroup;
  
  addForm = false;
  isSend = false;
  listmode = false;
  gridmode = true;
  param1 :any= "0";
  param2 :any= "0";
  param3 :any= "0";
  searchValue :any= "0";
  currentFile:any = "";
  id :any= "0";
  code :any= "0";
  name = "";
  ref = "";
  type = "";
  typelib = "";
  typelabel = "";
  etage = "";
  nbroom = "";
  area = "";
  price = "";
  fee = "";
  charge = "";
  amount = "";
  base = "";
  furniture = "";
  tenantid = "";
  tenant = "";
  propertyid = "";
  property = "";
  commissiontaux = "";
  commission = "";
  ownerid = "";
  owner = "";
  date = "";
  status = "";
  userid = "";
  username = "";
  url = "";
  facture = "";
  agencyid = "";
  description = "";
  agency = "0";
  baseurl = "0";
  baseurl2 = "0";
  
	caution = "";
	avance = "";
	agence = "";
	tva = "";
	cautionmois = "";
	avancemois = "";
	agencemois = "";
	tvataux = "";
	dossier = "";
	total1 = "";
	bail = "";
	cie = "";
	dijoncteur = "";
	sodeci = "";
	total2 = "";
	netapayer = "";
	
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
	
	imageurl1="assets/images/default.jpg";
	imageurl2="assets/images/default.jpg";
	imageurl3="assets/images/default.jpg";
	imageurl4="assets/images/default.jpg";
	imageurl5="assets/images/default.jpg";
	imageurl6="assets/images/default.jpg";
	imageurl7="assets/images/default.jpg";
	imageurl8="assets/images/default.jpg";
	imageurl9="assets/images/default.jpg";
	imageurl10="assets/images/default.jpg";
	
  word = "";
  imgselected="";
  image="";
  liboperation :any= "AJOUT";
  public results :any = [];
  public alllist :any = [];
  public types :any = [];
  public filtered :any = [];
   selectedFiles:any = [];
  searchNotMatched = true;
 constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient) {
			  this.typeForm = this.formBuilder.group({
				 type: [''],
				 status: ['']
			  })
			  this.selectForm = this.formBuilder.group({
				 word: ['']
			  })
			  this.pageForm = this.formBuilder.group({
				 word: ['']
			  })
			  this.categForm = this.formBuilder.group({
				    name: [''],
					ref: [''],
					type: [''],
					typelib: [''],
					etage: [''],
					nbroom: [''],
					area: [''],
					price: [''],
					fee: [''],
					charge: [''],
					amount: [''],
					base: [''],
					furniture: [''],
					tenantid: [''],
					tenant: [''],
					propertyid: [''],
					property: [''],
					ownerid: [''],
					owner: [''],
					date: [''],
					status: [''],
					userid: [''],
					username: [''],
					agencyid: [''],
					agency: [''],
					description: [''],
					caution: [''],
					avance: [''],
					agence: [''],
					tva: [''],
					cautionmois: [''],
					avancemois: [''],
					agencemois: [''],
					tvataux: [''],
					dossier: [''],
					total1: [''],
					bail: [''],
					cie: [''],
					dijoncteur: [''],
					sodeci: [''],
					total2: [''],
					netapayer: [''],
					commission: [''],
					commissiontaux: [''],
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
					namefile10: [''],
					facture: [''],
					url: ['']
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
	this.param3 = this.activatedRoute.snapshot.paramMap.get('param3');	
	this.onType();	
	if(this.param1=="0"){
		this.onListbyType();
	}else{
		this.onList();
	}
	this.onGetInfo();
  }
  handleInput(event:any) {
    const query = event.target.value.toLowerCase();
    //this.results = this.results.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }
   
  async onSelectLocataire(id:string){
  
		const modal = await this.modalCtrl.create({
			  component: PartnercontratPage,
			  componentProps: {
				'param1': 'locataire',
				'param2': 'Locataires',
				'param3': id
			  }
			});

			
			modal.onDidDismiss().then(data=>{
				console.log(data)
				if(this.param1=="0"){
					this.onListbyType();
				}else{
					this.onList();
				}
			})
			return await modal.present();
	}
  async onSelectPartner(){
  
		const modal = await this.modalCtrl.create({
			  component: PartnermodalPage,
			  componentProps: {
				'param1': 'proprietaire',
				'param2': 'Propriétaires'
			  }
			});

			
			modal.onDidDismiss().then(data=>{
				console.log(data)
				this.ownerid= data['data'];
				this.owner= data['role'];
			})
			return await modal.present();
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
  onCalculTaux(){
	 const commission = this.categForm.get('commission')?.value;
     const price = this.categForm.get('price')?.value;
	 const taux = Number(commission)*100/Number(price);
	 this.commissiontaux = ''+taux;
  }  
  onCalculCom(){
	 const commissiontaux = this.categForm.get('commissiontaux')?.value;
     const price = this.categForm.get('price')?.value;
	 const commission = Number(price)*Number(commissiontaux)/100;
	 this.commission = ''+commission;
  }   
  onCalcul(){
	 const charge = this.categForm.get('charge')?.value;
     const price = this.categForm.get('price')?.value;
	 const amount = Number(price)+Number(charge);
	 this.amount = ''+amount;
  }  
  onNew(){
		
	   this.addForm = true;
	   this.id = "0";
	   this.type = "";
	   this.liboperation = "AJOUT";
	   this.name = "";
	   this.ref = "";
	   this.type = "";
	   this.typelib = "";
	   this.typelabel = "";
	   this.etage = "";
	   this.nbroom = "";
	   this.area = "";
	   this.price = "";
	   this.fee = "";
	   this.charge = "";
	   this.amount = "";
	   this.base = "";
	   this.furniture = "";
	   this.tenantid = "";
	   this.tenant = "";
	   this.propertyid = "";
	   this.property = "";
	   this.ownerid = "";
	  this.owner = "";
	  this.date = "";
	  this.status = "";
	  this.userid = "";
	  this.username = "";
	  this.agencyid = "";
	  this.description = "";
  
      this.caution = "";
	  this.avance = "";
	  this.agence = "";
	  this.tva = "";
	  this.cautionmois = "";
	  this.avancemois = "";
	  this.agencemois = "";
	  this.tvataux = "";
	  this.dossier = "";
	  this.total1 = "";
	  this.bail = "";
	  this.cie = "";
	  this.dijoncteur = "";
	  this.sodeci = "";
	  this.total2 = "";
	  this.netapayer = "";
	  this.commission = "";
	  this.commissiontaux = "";
	
	   this.file1="";
	   this.file2="";
	   this.file3="";
	   this.file4="";
	   this.file5="";
	   this.file6="";
	   this.file7="";
	   this.file8="";
	   this.file9="";
	   this.file10="";
	   this.url="";
	   this.onGetproperty(this.param1);
  } 
  onCancelNew(){
	   this.addForm = false;
  }
   applyFilter() {
	  let filterValue = this.pageForm.get('word')?.value;
         if(filterValue === '' ) {
             this.results=this.alllist;
         }else{
			
           this.results = this.alllist.filter(results => results.firstName.toLowerCase().includes(filterValue.toLowerCase()));
	}
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
 	  
  onMouvTenant(id:any){
			let postData = {
				tenantid: "0",
				tenant: " ",
				status: "Libre"
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
			console.log(this.id);
			console.log(postData);
		   this.httpClient.put(this.REST_API_SERVER+"/apartment/"+id, postData, {headers: header})
				.subscribe(data => {
					console.log(data);
					
					if(this.param1=="0"){
						this.onListbyType();
					}else{
						this.onList();
					}
				}, error => {	
					console.log(error);
			});
  }
  onAdd(): any{
      this.isSend = false;
	  if (!this.categForm.valid) {
		
	  }else {
	   const name = this.categForm.get('name')?.value;
            const ref = this.categForm.get('ref')?.value;
            const type = this.categForm.get('type')?.value;
            const typelib = this.categForm.get('typelib')?.value;
            const etage = this.categForm.get('etage')?.value;
            const nbroom = this.categForm.get('nbroom')?.value;
            const area = this.categForm.get('area')?.value;
            const price = this.categForm.get('price')?.value;
            const fee = this.categForm.get('fee')?.value;
            const charge = this.categForm.get('charge')?.value;
            const amount = this.categForm.get('amount')?.value;
            const base = this.categForm.get('base')?.value;
            const furniture = this.categForm.get('furniture')?.value;
            const tenantid = this.categForm.get('tenantid')?.value;
            const tenant = this.categForm.get('tenant')?.value;
            const propertyid = this.categForm.get('propertyid')?.value;
            const property = this.categForm.get('property')?.value;
            const ownerid = this.categForm.get('ownerid')?.value;
            const owner = this.categForm.get('owner')?.value;
            const date = this.categForm.get('date')?.value;
            const status = this.categForm.get('status')?.value;
            const userid = this.categForm.get('userid')?.value;
            const username = this.categForm.get('username')?.value;
            const agencyid = this.categForm.get('agencyid')?.value;
            const agency = this.categForm.get('agency')?.value;
            const description = this.categForm.get('description')?.value;
			const caution = this.categForm.get('caution')?.value;
			const avance = this.categForm.get('avance')?.value;
			const agence = this.categForm.get('agence')?.value;
			const tva = this.categForm.get('tva')?.value;
			const cautionmois = this.categForm.get('cautionmois')?.value;
			const avancemois = this.categForm.get('avancemois')?.value;
			const agencemois = this.categForm.get('agencemois')?.value;
			const tvataux = this.categForm.get('tvataux')?.value;
			const dossier = this.categForm.get('dossier')?.value;
			const total1 = this.categForm.get('total1')?.value;
			const bail = this.categForm.get('bail')?.value;
			const cie = this.categForm.get('cie')?.value;
			const dijoncteur = this.categForm.get('dijoncteur')?.value;
			const sodeci = this.categForm.get('sodeci')?.value;
			const total2 = this.categForm.get('total2')?.value;
			const netapayer = this.categForm.get('netapayer')?.value;	
			const commission = this.categForm.get('commission')?.value;	
			const commissiontaux = this.categForm.get('commissiontaux')?.value;	
			const file1 = this.categForm.get('file1')?.value;
			const file2 = this.categForm.get('file2')?.value;
			const file3 = this.categForm.get('file3')?.value;
			const file4 = this.categForm.get('file4')?.value;
			const file5 = this.categForm.get('file5')?.value;
			const file6 = this.categForm.get('file6')?.value;
			const file7 = this.categForm.get('file7')?.value;
			const file8 = this.categForm.get('file8')?.value;
			const file9 = this.categForm.get('file9')?.value;
			const file10 = this.categForm.get('file10')?.value;
			
				   
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
				name: "0",
				ref: ref,
				type: type,
				typelib: typelib,
				etage: etage,
				nbroom: nbroom,
				area: area,
				price: price,
				fee: fee,
				charge: charge,
				amount: amount,
				base: base,
				furniture: furniture,
				tenantid: tenantid,
				tenant: tenant,
				propertyid: this.param1,
				property: this.param3,
				ownerid: ownerid,
				owner: owner,
				date: date,
				userid: userid,
				username: username,
				agency: agency,
				status: status,
				description: description,
				agencyid: this.agency,
				caution : caution,
				avance : avance,
				agence : agence,
				tva : tva,
				cautionmois : cautionmois,
				avancemois : avancemois,
				agencemois : agencemois,
				tvataux : tvataux,
				dossier : dossier,
				total1 : total1,
				bail : bail,
				cie : cie,
				dijoncteur : dijoncteur,
				sodeci : sodeci,
				total2 : total2,
				netapayer : netapayer,
				commission : commission,
				commissiontaux : commissiontaux,
				file1 : file1,
				file2 : file2,
				file3 : file3,
				file4 : file4,
				file5 : file5,
				file6 : file6,
				file7 : file7,
				file8 : file8,
				file9 : file9,
				file10 : file10
		    }
			
			this.httpClient.post(this.REST_API_SERVER+"/apartment", postData, {headers: header})
			.subscribe(data => {
					console.log(data);
					
					if(this.param1=="0"){
						this.onListbyType();
					}else{
						this.onList();
					}
					this.addForm = false;
					this.isSend = false;
				}, error => {
					this.isSend = false;	
					console.log(error);
			});
	   }else{
			let postData = {
				name: "0",
				ref: ref,
				type: type,
				typelib: typelib,
				etage: etage,
				nbroom: nbroom,
				area: area,
				price: price,
				fee: fee,
				charge: charge,
				amount: amount,
				base: base,
				furniture: furniture,
				tenantid: tenantid,
				tenant: tenant,
				date: date,
				status: status,
				ownerid: ownerid,
				owner: owner,
				userid: userid,
				username: username,
				description: description,
				caution : caution,
				avance : avance,
				agence : agence,
				tva : tva,
				cautionmois : cautionmois,
				avancemois : avancemois,
				agencemois : agencemois,
				tvataux : tvataux,
				dossier : dossier,
				total1 : total1,
				bail : bail,
				cie : cie,
				dijoncteur : dijoncteur,
				sodeci : sodeci,
				total2 : total2,
				netapayer : netapayer,
				commission : commission,
				commissiontaux : commissiontaux,
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
		    }
			
			console.log(this.id);
			console.log(postData);
		   this.httpClient.put(this.REST_API_SERVER+"/apartment/"+this.id, postData, {headers: header})
				.subscribe(data => {
					console.log(data);
					
					if(this.param1=="0"){
						this.onListbyType();
					}else{
						this.onList();
					}
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

  onType(){
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
		this.httpClient.get(this.REST_API_SERVER+"/configs/status/typebien/true", {headers: header})
			.subscribe(data => {
				console.log(data);
				this.types = data;
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
		
		this.httpClient.get(this.REST_API_SERVER+"/apartment/property/"+this.param1, {headers: header})
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
	   let postData = {
			
		}
		const type = this.typeForm.get('type')?.value;
		const status = this.typeForm.get('status')?.value;
		
		console.log(type);
		console.log(status);
		if(type==undefined || type==''){
			if(status==undefined || status==''){
				console.log(this.REST_API_SERVER+"/apartment/apikey");
				this.httpClient.get(this.REST_API_SERVER+"/apartment/apikey", {headers: header})
					.subscribe(data => {
						console.log(data);
						this.results = data;
						this.alllist = data;
					}, error => {
						console.log(error);
				});
			}else{
				console.log(this.REST_API_SERVER+"/apartment/status/"+status);
				this.httpClient.get(this.REST_API_SERVER+"/apartment/status/"+status, {headers: header})
					.subscribe(data => {
						console.log(data);
						this.results = data;
						this.alllist = data;
					}, error => {
						console.log(error);
				});
			}
		}else{
			if(status==undefined || status==''){
				console.log(this.REST_API_SERVER+"/apartment/type/"+type);
				this.httpClient.get(this.REST_API_SERVER+"/apartment/type/"+type, {headers: header})
					.subscribe(data => {
						console.log(data);
						this.results = data;
						this.alllist = data;
					}, error => {
						console.log(error);
				});
			}else{
				console.log(this.REST_API_SERVER+"/apartment/type/status/"+type+"/"+status);
				this.httpClient.get(this.REST_API_SERVER+"/apartment/type/status/"+type+"/"+status, {headers: header})
					.subscribe(data => {
						console.log(data);
						this.results = data;
						this.alllist = data;
					}, error => {
						console.log(error);
				});
			}
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
		
		this.httpClient.delete(this.REST_API_SERVER+"/apartment/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				
					this.onListbyType();
					if(this.param1=="0"){
						
					}else{
						//this.onList();
					}
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
		this.httpClient.get(this.REST_API_SERVER+"/apartment/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.addForm = true;
				this.liboperation = "MODIFICATION";
				this.id = data['id'];
				this.code = data['code'];
				this.ref = data['ref'];
				this.type = data['type'];
				this.typelib = data['typelib'];
				this.etage = data['etage'];
				this.nbroom = data['nbroom'];
				this.area = data['area'];
				this.price = data['price'];
				this.fee = data['fee'];
				this.charge = data['charge'];
				this.amount = data['amount'];
				this.base = data['base'];
				this.furniture = data['furniture'];
				this.tenantid = data['tenantid'];
				this.tenant = data['tenant'];
				if(data['date']!="" && data['date']!=null){
					let date01 = data['date'];
					let date1 = date01.substr(0, 10);
					this.date = date1;
				}
				this.status = data['status'];
				this.userid = data['userid'];
				this.username = data['username'];
				this.propertyid = data['propertyid'];
				this.property = data['property'];
				this.ownerid = data['ownerid'];
				this.owner = data['owner'];
				this.description = data['description'];
				
				this.caution = data['caution'];
				this.avance = data['avance'];
				this.agence = data['agence'];
				this.tva = data['tva'];
				this.cautionmois = data['cautionmois'];
				this.avancemois = data['avancemois'];
				this.agencemois = data['agencemois'];
				this.tvataux = data['tvataux'];
				this.dossier = data['dossier'];
				this.total1 = data['total1'];
				this.bail = data['bail'];
				this.cie = data['cie'];
				this.dijoncteur = data['dijoncteur'];
				this.sodeci = data['sodeci'];
				this.total2 = data['total2'];
				this.netapayer = data['netapayer'];
				this.commissiontaux = data['commissiontaux'];
				this.commission = data['commission'];
				this.url = this.baseurl+"/#/appartement/photo/"+this.code;
				this.facture = this.baseurl+"/#/appartement/facture/"+this.code;
				
				if(data['file1']!=""){
				this.onGetImageone(data['file1'], "file1");
				}
				if(data['file2']!=""){
				this.onGetImageone(data['file2'], "file2");
				}
				if(data['file3']!=""){
				this.onGetImageone(data['file3'], "file3");
				}
				if(data['file4']!=""){
				this.onGetImageone(data['file4'], "file4");
				}
				if(data['file5']!=""){
				this.onGetImageone(data['file5'], "file5");
				}
				if(data['file6']!=""){
				this.onGetImageone(data['file6'], "file6");
				}
				if(data['file7']!=""){
				this.onGetImageone(data['file7'], "file7");
				}
				if(data['file8']!=""){
				this.onGetImageone(data['file8'], "file8");
				}
				if(data['file9']!=""){
				this.onGetImageone(data['file9'], "file9");
				}
				if(data['file10']!=""){
				this.onGetImageone(data['file10'], "file10");
				}
			}, error => {
				console.log(error);
		});
 }
 
  onGetImageone(name:string, img:any){
	if(name!=""){	
		this.httpClient.get(this.REST_API_SERVER+"/file/name/"+name)
			.subscribe(data => {
				console.log(data);
				if(img=="file1"){
					this.imageurl1 =data['content'];
				}
				if(img=="file2"){
					this.imageurl2 =data['content'];
				}
				if(img=="file3"){
					this.imageurl3 =data['content'];
				}
				if(img=="file4"){
					this.imageurl4 =data['content'];
				}
				if(img=="file5"){
					this.imageurl5 =data['content'];
				}
				if(img=="file6"){
					this.imageurl6 =data['content'];
				}
				if(img=="file7"){
					this.imageurl7 =data['content'];
				}
				if(img=="file8"){
					this.imageurl8 =data['content'];
				}
				if(img=="file9"){
					this.imageurl9 =data['content'];
				}
				if(img=="file10"){
					this.imageurl10 =data['content'];
				}
			}, error => {
				console.log(error);
		});
	}	
 }
 
 
 
  
 onSelectImage(sel:any){
	var img_html: any =document.getElementById("open-action-sheet")  as HTMLElement;
	img_html.click();
	console.log(sel)
	this.imgselected=sel;
 }
 result: any =[];
  public actionSheetButtons = [
    {
      text: 'La caméra',
      data: {
        action: 'camera',
      },
    },
    {
      text: 'La librairie',
      data: {
        action: 'librairie',
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
  
  setResult(ev) {
    console.log(ev.detail)
    this.result = ev.detail;
	if(this.result['data']['action']=="camera"){
		this.getImageFromCamera();
	}
	if(this.result['data']['action']=="librairie"){
		this.getImageFromGalery();
	}
  }


 
	async getImageFromCamera() {
		const image = await Camera.getPhoto({
			quality: 90,
			allowEditing: false,
			resultType: CameraResultType.Base64,
			source: CameraSource.Camera // Camera, Photos or Prompt!
		});

		if (image) {
			console.log(image);
			this.onpostData("data:image/"+image.format+";base64,"+image.base64String);
			
		}
	}
	
	async getImageFromGalery() {
		const image = await Camera.getPhoto({
			quality: 90,
			allowEditing: false,
			resultType: CameraResultType.Base64,
			source: CameraSource.Photos // Camera, Photos or Prompt!
		});

		if (image) {
			console.log(image);
			this.onpostData("data:image/"+image.format+";base64,"+image.base64String);
			
		}
	}

	onpostData(file:any) {
				 
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
			content: file,
			type : 'Image',
		}
	    //alert("post")
	    //alert(file)
	    this.currentFile = file;
	    this.httpClient.post(this.REST_API_SERVER+"/file", postData, {headers: header})
		.subscribe(data => {
			console.log(data);
			this.image=data['name'];
			if(this.imgselected=="file1"){
				this.file1 = this.image;
			}
			if(this.imgselected=="file2"){
				this.file2 = this.image;
			}
			if(this.imgselected=="file3"){
				this.file3 = this.image;
			}
			if(this.imgselected=="file4"){
				this.file4 = this.image;
			}
			if(this.imgselected=="file5"){
				this.file5 = this.image;
			}
			if(this.imgselected=="file6"){
				this.file6 = this.image;
			}
			if(this.imgselected=="file7"){
				this.file7 = this.image;
			}
			if(this.imgselected=="file8"){
				this.file8 = this.image;
			}
			if(this.imgselected=="file9"){
				this.file9 = this.image;
			}
			if(this.imgselected=="file10"){
				this.file10 = this.image;
			}
			
			//this.onUpdateimage(this.image);
			this.onGetImageone(this.image, this.imgselected);
		}, error => {	
			console.log(error);
		});
	  this.selectedFiles = undefined;
	}

 onUpdateimage(img:any){
 
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
			image: img,
	   }
		this.httpClient.put(this.REST_API_SERVER+"/updateuser/"+this.id, postData, {headers: header})
			.subscribe(data => {
				console.log(data);
			}, error => {
				console.log(error);
		});
 }
 
  
  
  
 onTypelib($event: any){
	const type = this.categForm.get('type')?.value;
   console.log(type);
	
	this.onGettype(type);
 }
 onGettype(id:string){
		console.log(id);
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
		
		this.httpClient.get(this.REST_API_SERVER+"/config/"+id)
			.subscribe(data => {
				console.log(data);
				this.typelib = data['label'];
				
			}, error => {
				console.log(error);
		});
 }
 onGetproperty(id:string){
		console.log(id);
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
		
		this.httpClient.get(this.REST_API_SERVER+"/property/"+id)
			.subscribe(data => {
				console.log(data);
				this.typelib = data['label'];
				this.ownerid = data['ownerid'];
				this.owner = data['owner'];
				
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
