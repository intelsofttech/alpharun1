import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ilot',
  templateUrl: './ilot.page.html',
  styleUrls: ['./ilot.page.scss'],
})
export class IlotPage implements OnInit {

  
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
  onenum = true;
  showprice = false;
  param1 :any= "0";
  param2 :any= "0";
  param3 :any= "0";
  searchValue :any= "0";
  id :any= "0";
  
	reference:any="";
	reference2:any="";
	parent:any="";
	property:any="";
	propertyid:any="";
	type:any="0";
	exploitation:any="0";
	logement:any="0";
	plan:any="";
	vente:any="";
	surface1:any="";
	surface2:any="";
	surface3:any="";
	surface4:any="";
	prixunit:any="";
	total:any="";
	totalsup:any="";
	promo:any="";
	montpromo:any="";
	cloture:any="";
	dossier:any="";
	other:any="";
	net:any="";
	reduction:any="";
	motif:any="";
	apikey:any="";
	code:any="";
	superior:any="";
	ext1:any="";
	ext2:any="";
	ext3:any="";
	description:any="";
	userid:any="";
	username:any="";
	status:any="";
  
  num1 = "N°";
  num2 = "";
  liboperation :any= "AJOUT";
  public results :any = [];
  public alllist :any = [];
  public filtered :any = [];
  public typesexploitation :any = [];
  public typeslogement :any = [];
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
				    reference: [''],
				    reference2: [''],
					parent: [''],
					property: [''],
					propertyid: [''],
					type: [''],
					exploitation: [''],
					logement: [''],
					plan: [''],
					vente: [''],
					surface1: [''],
					surface2: [''],
					surface3: [''],
					surface4: [''],
					prixunit: [''],
					total: [''],
					totalsup: [''],
					promo: [''],
					montpromo: [''],
					cloture: [''],
					dossier: [''],
					other: [''],
					net: [''],
					reduction: [''],
					motif: [''],
					apikey: [''],
					code: [''],
					superior: [''],
					ext1: [''],
					ext2: [''],
					ext3: [''],
					description: [''],
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
		this.onTypesLogement();
		this.onTypesExploitation();
 
  }
  handleInput(event:any) {
    const query = event.target.value.toLowerCase();
    //this.results = this.results.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }
   
  onNew(){
	this.addForm = true;
	this.id = "0";
	this.liboperation = "AJOUT ILOT";
	this.reference="";
	this.parent="";
	this.property="";
	this.propertyid="";
	this.type="";
	this.exploitation="";
	this.logement="";
	this.plan="";
	this.vente="false";
	this.surface1="";
	this.surface2="";
	this.surface3="";
	this.surface4="";
	this.prixunit="";
	this.total="";
	this.totalsup="";
	this.promo="";
	this.montpromo="";
	this.cloture="";
	this.dossier="";
	this.other="";
	this.net="";
	this.reduction="";
	this.motif="";
	this.apikey="";
	this.code="";
	this.superior="";
	this.ext1="";
	this.ext2="";
	this.ext3="";
	this.status="";
	this.userid="";
	this.username="";
	this.description="";
  } 
  onCancelNew(){
	   this.addForm = false;
  } 
  addFile(){
	  var file_html: any =document.getElementById("file")  as HTMLElement;
	  file_html.click; 
  }
  onAdd(): any{
      this.isSend = false;
	  if (!this.categForm.valid) {
		
	  }else {
	    const reference = this.categForm.get('reference')?.value;
	    this.reference2 = this.categForm.get('reference2')?.value;
		const parent = this.categForm.get('parent')?.value;
		const property = this.categForm.get('property')?.value;
		const propertyid = this.categForm.get('propertyid')?.value;
		const type = this.categForm.get('type')?.value;
		const exploitation = this.categForm.get('exploitation')?.value;
		const logement = this.categForm.get('logement')?.value;
		const plan = this.categForm.get('plan')?.value;
		const vente = this.categForm.get('vente')?.value;
		const surface1 = this.categForm.get('surface1')?.value;
		const surface2 = this.categForm.get('surface2')?.value;
		const surface3 = this.categForm.get('surface3')?.value;
		const surface4 = this.categForm.get('surface4')?.value;
		const prixunit = this.categForm.get('prixunit')?.value;
		const total = this.categForm.get('total')?.value;
		const totalsup = this.categForm.get('totalsup')?.value;
		const promo = this.categForm.get('promo')?.value;
		const montpromo = this.categForm.get('montpromo')?.value;
		const cloture = this.categForm.get('cloture')?.value;
		const dossier = this.categForm.get('dossier')?.value;
		const other = this.categForm.get('other')?.value;
		const net = this.categForm.get('net')?.value;
		const reduction = this.categForm.get('reduction')?.value;
		const motif = this.categForm.get('motif')?.value;
		const apikey = this.categForm.get('apikey')?.value;
		const code = this.categForm.get('code')?.value;
		const superior = this.categForm.get('superior')?.value;
		const ext1 = this.categForm.get('ext1')?.value;
		const ext2 = this.categForm.get('ext2')?.value;
		const ext3 = this.categForm.get('ext3')?.value;
		const status = this.categForm.get('status')?.value;
		const userid = this.categForm.get('userid')?.value;
		const username = this.categForm.get('username')?.value;
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
	  
	   if(this.reference2==""){
			this.reference2 = reference;
	   }
	   if(this.onenum==true){
			this.reference2 = reference;
	   }
	   if(this.id=="0"){
			let postData = {
			    reference: reference,
			    reference2: this.reference2,
				parent: parent,
				ilot: reference,
				category: "ilot",
				property: this.param3,
				propertyid: this.param1,
				type: type,
				exploitation: exploitation,
				logement: logement,
				plan: plan,
				vente: vente,
				surface1: surface1,
				surface2: surface2,
				surface3: surface3,
				surface4: surface4,
				prixunit: prixunit,
				total: total,
				totalsup: totalsup,
				promo: promo,
				montpromo: montpromo,
				cloture: cloture,
				dossier: dossier,
				other: other,
				net: net,
				reduction: reduction,
				motif: motif,
				superior: superior,
				ext1: ext1,
				ext2: ext2,
				ext3: ext3,
				status: status,
				userid: userid,
				username: username,
				description: description
		    }
			console.log(postData);
			this.httpClient.post(this.REST_API_SERVER+"/subdivision", postData, {headers: header})
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
				reference: reference,
				reference2: this.reference2,
				parent: parent,
				type: type,
				exploitation: exploitation,
				logement: logement,
				plan: plan,
				vente: vente,
				surface1: surface1,
				surface2: surface2,
				surface3: surface3,
				surface4: surface4,
				prixunit: prixunit,
				total: total,
				totalsup: totalsup,
				promo: promo,
				montpromo: montpromo,
				cloture: cloture,
				dossier: dossier,
				other: other,
				net: net,
				reduction: reduction,
				motif: motif,
				superior: superior,
				ext1: ext1,
				ext2: ext2,
				ext3: ext3,
				status: status,
				userid: userid,
				username: username,
				description: description
		    }
			console.log(postData);
		   this.httpClient.put(this.REST_API_SERVER+"/subdivision/"+this.id, postData, {headers: header})
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
  
  listmode = false;
  gridmode = true;
  
  onOnsell(){
	const vente = this.categForm.get('vente')?.value;
	console.log(vente);
	if(vente==true){
		this.showprice = true;
	}else{
	    this.showprice = false;
	}
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
 onTypereference(sel:any){
	if(sel=="one"){
		this.num1 = "N°";
		this.num2 = "N°";
		this.reference2 = "0";
		this.onenum=true;
	}
	if(sel=="several"){
		this.num1 = "De";
		this.num2 = "A";
		this.reference2 = "";
		this.onenum=false;
		
	}	
 }
 
 
 onCalcul(){
	
		const surface1 = this.categForm.get('surface1')?.value;
		const prixunit = this.categForm.get('prixunit')?.value;
		this.total = Number(surface1)*Number(prixunit);
		const cloture = this.categForm.get('cloture')?.value;
		const dossier = this.categForm.get('dossier')?.value;
		this.net = Number(this.total)+Number(cloture)+Number(dossier);
		
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
		
		this.httpClient.get(this.REST_API_SERVER+"/subdivision/property/category/"+this.param1+"/ilot", {headers: header})
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
		this.httpClient.delete(this.REST_API_SERVER+"/subdivision/"+id, {headers: header})
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
		this.httpClient.get(this.REST_API_SERVER+"/subdivision/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.addForm = true;
				
				this.liboperation = "MODIFICATION ILOT";
				
				this.id = data['id'];
				this.reference = data['reference'];
				this.parent = data['parent'];
				this.property = data['property'];
				this.propertyid = data['propertyid'];
				this.type = data['type'];
				this.exploitation = data['exploitation'];
				this.logement = data['logement'];
				this.plan = data['plan'];
				this.vente = data['vente'];
				this.surface1 = data['surface1'];
				this.surface2 = data['surface2'];
				this.surface3 = data['surface3'];
				this.surface4 = data['surface4'];
				this.prixunit = data['prixunit'];
				this.total = data['total'];
				this.totalsup = data['totalsup'];
				this.promo = data['promo'];
				this.montpromo = data['montpromo'];
				this.cloture = data['cloture'];
				this.dossier = data['dossier'];
				this.other = data['other'];
				this.net = data['net'];
				this.reduction = data['reduction'];
				this.motif = data['motif'];
				this.apikey = data['apikey'];
				this.code = data['code'];
				this.superior = data['superior'];
				this.ext1 = data['ext1'];
				this.ext2 = data['ext2'];
				this.ext3 = data['ext3'];
				this.status = data['status'];
				this.userid = data['userid'];
				this.username = data['username'];
				this.description = data['description'];
				if(data['vente']=="true"){
					this.showprice = true;
				}else{
					this.showprice = false;
				}
	
			}, error => {
				console.log(error);
		});
 }
 
 onTypesExploitation(){
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
		this.httpClient.get(this.REST_API_SERVER+"/configs/exploitation", {headers: header})
			.subscribe(data => {
				console.log(data);
				this.typesexploitation = data;
			}, error => {
				console.log(error);
		});
 }
 

 onTypesLogement(){
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
		this.httpClient.get(this.REST_API_SERVER+"/configs/logement", {headers: header})
			.subscribe(data => {
				console.log(data);
				this.typeslogement = data;
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
