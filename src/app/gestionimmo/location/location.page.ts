import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
import { PartnermodalPage } from '../../partnermodal/partnermodal.page';
import { PartnercontratPage } from '../../partnercontrat/partnercontrat.page';
import { QuittancePage } from '../quittance/quittance.page';


@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  
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
  typeForm: FormGroup;
  
  addForm = false;
  isSend = false;
  listmode = false;
  gridmode = true;
  param1 :any= "0";
  param2 :any= "0";
  param3 :any= "0";
  searchValue :any= "0";
  id :any= "0";
  name = "";
  ref = "";
  type = "";
  typelib = "";
  area = "";
  etage = "";
  nbroom = "";
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
  ownerid = "";
  owner = "";
  date = "";
  status = "";
  userid = "";
  username = "";
  agencyid = "";
  etatcontrat :any= "";
  numcontrat :any= "";
  datesignature :any= "";
  file :any= ""; 
  description = "";
  agency = "0";
  
  word = "";
			
  liboperation :any= "AJOUT";
  public results :any = [];
  public alllist :any = [];
  public types :any = [];
  public filtered :any = [];
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
			  this.pageForm = this.formBuilder.group({
				 word: ['']
			  })
			  this.categForm = this.formBuilder.group({
				    name: [''],
					ref: [''],
					type: [''],
					typelib: [''],
					etage: [''],
					area: [''],
					nbroom: [''],
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
				    etatcontrat: [''],
				    numcontrat: [''],
				    datesignature: [''],
				    file: [''],
					description: ['']
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
	//this.onList();
	//this.onGet(this.param1)
  }
  handleInput(event:any) {
    const query = event.target.value.toLowerCase();
    //this.results = this.results.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }
   
  async Quittance(id:string){
  
		const modal = await this.modalCtrl.create({
			  component: QuittancePage,
			  componentProps: {
				'param1': id,
				'param2': "Quittance"
			  }
			});

			
			modal.onDidDismiss().then(data=>{
				console.log(data)
				
			})
			return await modal.present();
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
  onCalcul(){
	 const charge = this.categForm.get('charge')?.value;
     const price = this.categForm.get('price')?.value;
	 const amount = Number(price)+Number(charge);
	 this.amount = ''+amount;
  }  
  onNew(){
		
	   this.addForm = true;
	   this.id = "0";
	   this.liboperation = "AJOUT";
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
      
  onAdd(): any{
      this.isSend = false;
	  if (!this.categForm.valid) {
		
	  }else {
	   const name = this.categForm.get('name')?.value;
            const ref = this.categForm.get('ref')?.value;
            const type = this.categForm.get('type')?.value;
            const typelib = this.categForm.get('typelib')?.value;
            const area = this.categForm.get('area')?.value;
            const etage = this.categForm.get('etage')?.value;
            const nbroom = this.categForm.get('nbroom')?.value;
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
			const numcontrat = this.categForm.get('numcontrat')?.value;
			const etatcontrat = this.categForm.get('etatcontrat')?.value;
			const datesignature = this.categForm.get('datesignature')?.value;
			const file = this.categForm.get('file')?.value;
            const description = this.categForm.get('description')?.value;
				   
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
				area: area,
				nbroom: nbroom,
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
				numcontrat: numcontrat,
				etatcontrat: etatcontrat,
				datesignature: datesignature,
				file: file,
				status: status,
				description: description,
				agencyid: this.agency,
		    }
			
			this.httpClient.post(this.REST_API_SERVER+"/apartment", postData, {headers: header})
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
				name: "0",
				ref: ref,
				type: type,
				typelib: typelib,
				etage: etage,
				area: area,
				nbroom: nbroom,
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
				userid: userid,
				username: username,
				numcontrat: numcontrat,
				etatcontrat: etatcontrat,
				datesignature: datesignature,
				file: file,
				description: description
		    }
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
		this.httpClient.delete(this.REST_API_SERVER+"/property/"+id, {headers: header})
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
		this.httpClient.get(this.REST_API_SERVER+"/apartment/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.addForm = true;
				this.liboperation = "MODIFICATION";
				this.id = data['id'];
				this.ref = data['ref'];
				this.type = data['type'];
				this.typelib = data['typelib'];
				this.etage = data['etage'];
				this.area = data['area'];
				this.nbroom = data['nbroom'];
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
				if(data['datesignature']!="" && data['datesignature']!=null){
					let date01 = data['datesignature'];
					let date1 = date01.substr(0, 10);
					this.datesignature = date1;
				}
				this.etatcontrat = data['etatcontrat'];
				this.status = data['status'];
				this.userid = data['userid'];
				this.username = data['username'];
				this.propertyid = data['propertyid'];
				this.property = data['property'];
				this.ownerid = data['ownerid'];
				this.owner = data['owner'];
				this.description = data['description'];
				
			}, error => {
				console.log(error);
		});
 }
 
 onTypelib(){
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
