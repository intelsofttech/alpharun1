import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
import { SelectpartnerPage } from '../selectpartner/selectpartner.page';
import { SelectlotPage } from '../selectlot/selectlot.page';

@Component({
  selector: 'app-souscription',
  templateUrl: './souscription.page.html',
  styleUrls: ['./souscription.page.scss'],
})
export class SouscriptionPage implements OnInit {

		
  REST_API_SERVER="";
  walletId = "";
  agency = "";
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
  
  id="0";
  label :any="";
	idprogramme="";
	programme="";
	promotion="";
	logement="";
	lotid="";
	lot="";
	ilotid="";
	ilot="";
	supterrain="";
	superhabitable="";
	partnerid="";
	copartnerid="";
	nom="";
	mobile="";
	email="";
	adresse="";
	profession="";
	nationalite="";
	societe="";
	conom="";
	comobile="";
	coemail="";
	coadresse="";
	coprofession="";
	conationalite="";
	prix="";
	supsupplementaire="";
	cloture="";
	dossier="";
	prixtotal:any="";
	totalapayer:any="";
	tauxapport:any="";
	apportinitial:any="";
	resteapayer:any="";
	fraisdedossier="";
	fraisdecloture="";
	totaldepot:any="";
	totalpaye:any="";
	totalrestant:any="";
	mensualite:any="";
	debutremb="";
	finremb="";
	duree="";
	acompte="";
	modedepaiement="";
	livraisonprevu="";
	autre="";
	numdecomptesous="";
	banquesous="";
	salairenetsous="";
	autreressourcesous="";
	numdecomptecosous="";
	banquecosous="";
	salairenetcosous="";
	autreressourcecosous="";
	idnotaire="";
	notaire="";
	adressenot="";
	telephonenot="";
	emailnot="";
	faxnot="";
	totalressource="";
	montantpret="";
	dureepret="";
	rembourmenetmentuel="";
	other1="";
	other2="";
	other3="";
	other4="";
	other5="";
	parent="";
	type="";
	file="";
	status="";
	agencyid="";
	username="";
	userid="";
	code="";
	apikey="";
	description="";
  
  word = "";
			
  liboperation :any= "AJOUT";
  public results :any = [];
  public alllist :any = [];
  public filtered :any = [];
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
				    label: [''],
					idprogramme: [''],
					programme: [''],
					promotion: [''],
					logement: [''],
					lotid: [''],
					lot: [''],
					ilotid: [''],
					ilot: [''],
					supterrain: [''],
					superhabitable: [''],
					partnerid: [''],
					copartnerid: [''],
					nom: [''],
					mobile: [''],
					email: [''],
					adresse: [''],
					profession: [''],
					nationalite: [''],
					societe: [''],
					conom: [''],
					comobile: [''],
					coemail: [''],
					coadresse: [''],
					coprofession: [''],
					conationalite: [''],
					prix: [''],
					supsupplementaire: [''],
					prixtotal: [''],
					cloture: [''],
					dossier: [''],
					totalapayer: [''],
					tauxapport: [''],
					apportinitial: [''],
					resteapayer: [''],
					fraisdedossier: [''],
					fraisdecloture: [''],
					totaldepot: [''],
					totalpaye: [''],
					totalrestant: [''],
					mensualite: [''],
					debutremb: [''],
					finremb: [''],
					duree: [''],
					acompte: [''],
					modedepaiement: [''],
					livraisonprevu: [''],
					autre: [''],
					numdecomptesous: [''],
					banquesous: [''],
					salairenetsous: [''],
					autreressourcesous: [''],
					numdecomptecosous: [''],
					banquecosous: [''],
					salairenetcosous: [''],
					autreressourcecosous: [''],
					idnotaire: [''],
					notaire: [''],
					adressenot: [''],
					telephonenot: [''],
					emailnot: [''],
					faxnot: [''],
					totalressource: [''],
					montantpret: [''],
					dureepret: [''],
					rembourmenetmentuel: [''],
					other1: [''],
					other2: [''],
					other3: [''],
					other4: [''],
					other5: [''],
					parent: [''],
					type: [''],
					file: [''],
					status: [''],
					agency: [''],
					agencyid: [''],
					username: [''],
					userid: [''],
					code: [''],
					apikey: [''],
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
		
		this.onList();	
		
  }
  
 onCalcul(){
	
		const prixtotal = this.categForm.get('prixtotal')?.value;
		const fraisdedossier = this.categForm.get('fraisdedossier')?.value;
		const fraisdecloture = this.categForm.get('fraisdecloture')?.value;
		this.totalapayer = Number(this.prixtotal)+Number(fraisdedossier)+Number(fraisdecloture);
		
	}
 onCalculapport(){
	
		const totalapayer = this.categForm.get('totalapayer')?.value;
		const tauxapport = this.categForm.get('tauxapport')?.value;
		const duree = this.categForm.get('duree')?.value;
		this.apportinitial = Number(this.totalapayer)*Number(tauxapport)/100;
		this.resteapayer = Number(this.totalapayer)-Number(this.apportinitial);
		this.mensualite = Number(this.resteapayer)/Number(this.duree);
		
	}
 onCalcultaux(){
	
		const totalapayer = this.categForm.get('totalapayer')?.value;
		const apportinitial = this.categForm.get('apportinitial')?.value;
		const duree = this.categForm.get('duree')?.value;
		this.tauxapport = Number(this.apportinitial)/Number(totalapayer)*100;
		this.resteapayer = Number(this.totalapayer)-Number(this.apportinitial);
		this.mensualite = Number(this.resteapayer)/Number(this.duree);
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
	this.liboperation = "AJOUT SOUSCRIPTION";
	this.label = Date.now();
	this.idprogramme="";
	this.programme="";
	this.promotion="";
	this.logement="";
	this.lotid="";
	this.lot="";
	this.ilotid="";
	this.ilot="";
	this.supterrain="";
	this.superhabitable="";
	this.partnerid="";
	this.copartnerid="";
	this.nom="";
	this.mobile="";
	this.email="";
	this.adresse="";
	this.profession="";
	this.nationalite="";
	this.societe="";
	this.conom="";
	this.comobile="";
	this.coemail="";
	this.coadresse="";
	this.coprofession="";
	this.conationalite="";
	this.prix="";
	this.supsupplementaire="";
	this.prixtotal="";
	this.cloture="";
	this.dossier="";
	this.totalapayer="";
	this.tauxapport="";
	this.apportinitial="";
	this.resteapayer="";
	this.fraisdedossier="";
	this.fraisdecloture="";
	this.totaldepot="";
	this.totalpaye="";
	this.totalrestant="";
	this.mensualite="";
	this.debutremb="";
	this.finremb="";
	this.duree="36";
	this.acompte="";
	this.modedepaiement="";
	this.livraisonprevu="";
	this.autre="";
	this.numdecomptesous="";
	this.banquesous="";
	this.salairenetsous="";
	this.autreressourcesous="";
	this.numdecomptecosous="";
	this.banquecosous="";
	this.salairenetcosous="";
	this.autreressourcecosous="";
	this.idnotaire="";
	this.notaire="";
	this.adressenot="";
	this.telephonenot="";
	this.emailnot="";
	this.faxnot="";
	this.totalressource="";
	this.montantpret="";
	this.dureepret="";
	this.rembourmenetmentuel="";
	this.other1="";
	this.other2="";
	this.other3="";
	this.other4="";
	this.other5="";
	this.parent="";
	this.type="";
	this.file="";
	this.status="";
	this.agency="";
	this.agencyid="";
	this.username="";
	this.userid="";
	this.code="";
	this.apikey="";
	this.description="";
	
	var now = new Date();
	var now2 = new Date();
	now2.setDate(now2.getDate() + Number(this.duree)*30+6);
	const dateFormatter = Intl.DateTimeFormat('sv-SE');
	this.debutremb = dateFormatter.format(now);
	this.finremb = dateFormatter.format(now2);
	
  } 
  onCancelNew(){
	   this.addForm = false;
  }
  
    onAdd(): any{
      this.isSend = false;
	  if (!this.categForm.valid) {
		
	  }else {
	    const label = this.categForm.get('label')?.value;
		const prixtotal = this.categForm.get('prixtotal')?.value;
		const cloture = this.categForm.get('cloture')?.value;
		const dossier = this.categForm.get('dossier')?.value;
		const totalapayer = this.categForm.get('totalapayer')?.value;
		const tauxapport = this.categForm.get('tauxapport')?.value;
		const apportinitial = this.categForm.get('apportinitial')?.value;
		const resteapayer = this.categForm.get('resteapayer')?.value;
		const fraisdedossier = this.categForm.get('fraisdedossier')?.value;
		const fraisdecloture = this.categForm.get('fraisdecloture')?.value;
		const totaldepot = this.categForm.get('totaldepot')?.value;
		const totalpaye = this.categForm.get('totalpaye')?.value;
		const totalrestant = this.categForm.get('totalrestant')?.value;
		const mensualite = this.categForm.get('mensualite')?.value;
		const debutremb = this.categForm.get('debutremb')?.value;
		const finremb = this.categForm.get('finremb')?.value;
		const duree = this.categForm.get('duree')?.value;
		const acompte = this.categForm.get('acompte')?.value;
		const modedepaiement = this.categForm.get('modedepaiement')?.value;
		const livraisonprevu = this.categForm.get('livraisonprevu')?.value;
		const autre = this.categForm.get('autre')?.value;
		const numdecomptesous = this.categForm.get('numdecomptesous')?.value;
		const banquesous = this.categForm.get('banquesous')?.value;
		const salairenetsous = this.categForm.get('salairenetsous')?.value;
		const autreressourcesous = this.categForm.get('autreressourcesous')?.value;
		const numdecomptecosous = this.categForm.get('numdecomptecosous')?.value;
		const banquecosous = this.categForm.get('banquecosous')?.value;
		const salairenetcosous = this.categForm.get('salairenetcosous')?.value;
		const autreressourcecosous = this.categForm.get('autreressourcecosous')?.value;
		const idnotaire = this.categForm.get('idnotaire')?.value;
		const notaire = this.categForm.get('notaire')?.value;
		const adressenot = this.categForm.get('adressenot')?.value;
		const telephonenot = this.categForm.get('telephonenot')?.value;
		const emailnot = this.categForm.get('emailnot')?.value;
		const faxnot = this.categForm.get('faxnot')?.value;
		const totalressource = this.categForm.get('totalressource')?.value;
		const montantpret = this.categForm.get('montantpret')?.value;
		const dureepret = this.categForm.get('dureepret')?.value;
		const rembourmenetmentuel = this.categForm.get('rembourmenetmentuel')?.value;
		const other1 = this.categForm.get('other1')?.value;
		const other2 = this.categForm.get('other2')?.value;
		const other3 = this.categForm.get('other3')?.value;
		const other4 = this.categForm.get('other4')?.value;
		const other5 = this.categForm.get('other5')?.value;
		const parent = this.categForm.get('parent')?.value;
		const type = this.categForm.get('type')?.value;
		const file = this.categForm.get('file')?.value;
		const status = this.categForm.get('status')?.value;
		const agency = this.categForm.get('agency')?.value;
		const agencyid = this.categForm.get('agencyid')?.value;
		const username = this.categForm.get('username')?.value;
		const userid = this.categForm.get('userid')?.value;
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
				label : this.type,
				idprogramme : this.idprogramme,
				programme : this.programme,
				promotion : this.promotion,
				logement : this.logement,
				lotid : this.lotid,
				lot : this.lot,
				ilotid : this.ilotid,
				ilot : this.ilot,
				supterrain : this.supterrain,
				superhabitable : this.superhabitable,
				partnerid : this.partnerid,
				copartnerid : this.copartnerid,
				nom :  this.nom,
				mobile : this.mobile,
				email : this.email,
				adresse : this.adresse,
				profession : this.profession,
				nationalite : this.nationalite,
				societe : this.societe,
				conom :  this.conom,
				comobile : this.comobile,
				coemail : this.coemail,
				coadresse : this.coadresse,
				coprofession : this.coprofession,
				conationalite : this.conationalite,
				prix : this.prix,
				supsupplementaire : this.supsupplementaire,
				prixtotal : prixtotal,
				cloture : this.cloture,
				dossier : this.dossier,
				totalapayer : totalapayer,
				tauxapport : tauxapport,
				apportinitial : apportinitial,
				resteapayer : resteapayer,
				fraisdedossier : fraisdedossier,
				fraisdecloture : fraisdecloture,
				totaldepot : totaldepot,
				totalpaye : totalpaye,
				totalrestant : totalapayer,
				mensualite : mensualite,
				debutremb : debutremb,
				finremb : finremb,
				duree : duree,
				acompte : acompte,
				modedepaiement : modedepaiement,
				livraisonprevu : livraisonprevu,
				autre : autre,
				numdecomptesous : numdecomptesous,
				banquesous : banquesous,
				salairenetsous : salairenetsous,
				autreressourcesous : autreressourcesous,
				numdecomptecosous : numdecomptecosous,
				banquecosous : banquecosous,
				salairenetcosous : salairenetcosous,
				autreressourcecosous : autreressourcecosous,
				idnotaire : idnotaire,
				notaire : notaire,
				adressenot : adressenot,
				telephonenot : telephonenot,
				emailnot : emailnot,
				faxnot : faxnot,
				totalressource : totalressource,
				montantpret : montantpret,
				dureepret : dureepret,
				rembourmenetmentuel : rembourmenetmentuel,
				other1 : other1,
				other2 : other2,
				other3 : other3,
				other4 : other4,
				other5 : other5,
				parent : parent,
				type : this.param1,
				file : file,
				status : status,
				description : description,
				agency : this.agency,
				agencyid : this.agencyid
		    }
			console.log(postData);
			this.httpClient.post(this.REST_API_SERVER+"/souscription", postData, {headers: header})
			.subscribe(data => {
					console.log(data['id']);
					console.log(data);
					this.onAddecheance(data['id'], postData);
					this.onList();
					this.addForm = false;
					this.isSend = false;
				}, error => {
					this.isSend = false;	
					console.log(error);
			});
	   }else{
			let postData = {
				prixtotal : prixtotal,
				totalapayer : totalapayer,
				tauxapport : tauxapport,
				apportinitial : apportinitial,
				resteapayer : resteapayer,
				fraisdedossier : fraisdedossier,
				fraisdecloture : fraisdecloture,
				totaldepot : totaldepot,
				mensualite : mensualite,
				debutremb : debutremb,
				finremb : finremb,
				duree : duree,
				acompte : acompte,
				modedepaiement : modedepaiement,
				livraisonprevu : livraisonprevu,
				autre : autre,
				partnerid : this.partnerid,
				copartnerid : this.copartnerid,
				nom :  this.nom,
				mobile : this.mobile,
				email : this.email,
				adresse : this.adresse,
				profession : this.profession,
				nationalite : this.nationalite,
				societe : this.societe,
				conom :  this.conom,
				comobile : this.comobile,
				coemail : this.coemail,
				coadresse : this.coadresse,
				coprofession : this.coprofession,
				conationalite : this.conationalite,
				numdecomptesous : numdecomptesous,
				banquesous : banquesous,
				salairenetsous : salairenetsous,
				autreressourcesous : autreressourcesous,
				numdecomptecosous : numdecomptecosous,
				banquecosous : banquecosous,
				salairenetcosous : salairenetcosous,
				autreressourcecosous : autreressourcecosous,
				idnotaire : idnotaire,
				notaire : notaire,
				adressenot : adressenot,
				telephonenot : telephonenot,
				emailnot : emailnot,
				faxnot : faxnot,
				totalressource : totalressource,
				montantpret : montantpret,
				dureepret : dureepret,
				rembourmenetmentuel : rembourmenetmentuel,
				other1 : other1,
				other2 : other2,
				other3 : other3,
				other4 : other4,
				other5 : other5,
				parent : parent,
				file : file,
				status : status,
				description : description,
		    }
		   this.httpClient.put(this.REST_API_SERVER+"/souscription/"+this.id, postData, {headers: header})
				.subscribe(data => {
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
  
  
 
   applyFilter() {
	  let filterValue = this.pageForm.get('word')?.value;
         if(filterValue === '' ) {
             this.results=this.alllist;
         }else{
			
           this.results = this.alllist.filter(results => results.firstName.toLowerCase().includes(filterValue.toLowerCase()));
	}
   }
  

   async Selectpartner() {
    
	const modal = await this.modalCtrl.create({
			  component: SelectpartnerPage,
			  componentProps: {
				'param1': 'souscripteur',
				'param2': 'Souscripteurs'
			  }
			});

			
			modal.onDidDismiss().then(data=>{
				console.log(data)
				this.onGetpartnerinfo(data['data']);
			})
			return await modal.present();
  }
   async Selectcopartner() {
    
	const modal = await this.modalCtrl.create({
			  component: SelectpartnerPage,
			  componentProps: {
				'param1': 'souscripteur',
				'param2': 'Souscripteurs'
			  }
			});

			
			modal.onDidDismiss().then(data=>{
				console.log(data)
				this.onGetcopartnerinfo(data['data']);
			})
			return await modal.present();
  }


   async Selectlot() {
    
	const modal = await this.modalCtrl.create({
			  component: SelectlotPage,
			  componentProps: {
			  
			  }
			});

			
			modal.onDidDismiss().then(data=>{
				console.log(data)
				this.onGetlotinfo(data['data']);
				//this.onGetpartnerinfo(data['data']);
			})
			return await modal.present();
  }

 onGetlotinfo(id:string){
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
				
				this.lotid = data['id'];
				this.lot = data['reference'];
				this.ilotid = data['parent'];
				this.ilot = data['ilot'];
				this.programme = data['property'];
				this.idprogramme = data['propertyid'];
				this.type = data['type'];
				this.promotion = data['type'];
				this.logement = data['logementlib'];
				this.supterrain = data['surface4'];
				this.superhabitable = data['surface3'];
				
				this.prix = data['total'];
				this.supsupplementaire = data['totalsup'];
				this.prixtotal = data['total'];
				this.cloture = data['cloture'];
				this.dossier = data['dossier'];
				this.fraisdedossier = data['dossier'];
				this.fraisdecloture = data['cloture'];
				this.totalapayer = data['net'];
				
			}, error => {
				console.log(error);
		});
 }
 
 onAddecheance(id:string, data:any){
		var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };
	    console.log(data);
		this.httpClient.post(this.REST_API_SERVER+"/newecheancier/"+id, data, {headers: header})
			.subscribe(data => {
				console.log(data);
				
			}, error => {
				console.log(error);
		});
 }
 

 onGetpartnerinfo(id:string){
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
				
				this.partnerid = data['id'];
				this.nom = data['firstName']+' '+data['lastName'];
				this.mobile = data['mobile'];
				this.email = data['emailaddress'];
				this.adresse = data['address'];
				this.profession = data['profession'];
				this.nationalite = data['nationality'];
				this.societe = data['societe'];
				//this.onList();
			}, error => {
				console.log(error);
		});
 }

 onGetcopartnerinfo(id:string){
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
				this.copartnerid = data['id'];
				this.conom = data['firstName']+' '+data['lastName'];
				this.comobile = data['mobile'];
				this.coemail = data['emailaddress'];
				this.coadresse = data['address'];
				this.coprofession = data['profession'];
				this.conationalite = data['nationality'];
				//this.onList();
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
		console.log(this.REST_API_SERVER+"/souscription");
		//this.httpClient.get(this.REST_API_SERVER+"/souscription/type/"+this.param1, {headers: header})
		this.httpClient.get(this.REST_API_SERVER+"/souscription", {headers: header})
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
		this.httpClient.delete(this.REST_API_SERVER+"/souscription/"+id, {headers: header})
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
		this.httpClient.get(this.REST_API_SERVER+"/souscription/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.addForm = true;
				this.liboperation = "MODIFICATION";
				this.id = data['id'];
				this.label = data['label'];
				this.idprogramme = data['idprogramme'];
				this.programme = data['programme'];
				this.promotion = data['promotion'];
				this.logement = data['logement'];
				this.lotid = data['lotid'];
				this.lot = data['lot'];
				this.ilotid = data['ilotid'];
				this.ilot = data['ilot'];
				this.supterrain = data['supterrain'];
				this.superhabitable = data['superhabitable'];
				this.partnerid = data['partnerid'];
				this.copartnerid = data['copartnerid'];
				this.nom = data['nom'];
				this.mobile = data['mobile'];
				this.email = data['email'];
				this.adresse = data['adresse'];
				this.profession = data['profession'];
				this.nationalite = data['nationalite'];
				this.prix = data['prix'];
				this.supsupplementaire = data['supsupplementaire'];
				this.prixtotal = data['prixtotal'];
				this.cloture = data['cloture'];
				this.dossier = data['dossier'];
				this.totalapayer = data['totalapayer'];
				this.tauxapport = data['tauxapport'];
				this.apportinitial = data['apportinitial'];
				this.resteapayer = data['resteapayer'];
				this.fraisdedossier = data['fraisdedossier'];
				this.fraisdecloture = data['fraisdecloture'];
				this.totaldepot = data['totaldepot'];
				this.totalpaye = data['totalpaye'];
				this.totalrestant = data['totalrestant'];
				this.mensualite = data['mensualite'];
				//this.debutremb = data['debutremb'];
				this.finremb = data['finremb'];
				this.duree = data['duree'];
				this.acompte = data['acompte'];
				this.modedepaiement = data['modedepaiement'];
				this.livraisonprevu = data['livraisonprevu'];
				this.autre = data['autre'];
				this.numdecomptesous = data['numdecomptesous'];
				this.banquesous = data['banquesous'];
				this.salairenetsous = data['salairenetsous'];
				this.autreressourcesous = data['autreressourcesous'];
				this.numdecomptecosous = data['numdecomptecosous'];
				this.banquecosous = data['banquecosous'];
				this.salairenetcosous = data['salairenetcosous'];
				this.autreressourcecosous = data['autreressourcecosous'];
				this.idnotaire = data['idnotaire'];
				this.notaire = data['notaire'];
				this.adressenot = data['adressenot'];
				this.telephonenot = data['telephonenot'];
				this.emailnot = data['emailnot'];
				this.faxnot = data['faxnot'];
				this.totalressource = data['totalressource'];
				this.montantpret = data['montantpret'];
				this.dureepret = data['dureepret'];
				this.rembourmenetmentuel = data['rembourmenetmentuel'];
				this.other1 = data['other1'];
				this.other2 = data['other2'];
				this.other3 = data['other3'];
				this.other4 = data['other4'];
				this.other5 = data['other5'];
				this.parent = data['parent'];
				this.file = data['file'];
				this.description = data['description'];
				
				if(data['debutremb']!="" && data['debutremb']!=null){
					let date01 = data['debutremb'];
					let date1 = date01.substr(0, 10);
					this.debutremb = date1;
				}
				if(data['finremb']!="" && data['finremb']!=null){
					let date01 = data['finremb'];
					let date1 = date01.substr(0, 10);
					this.finremb = date1;
				}
				if(data['livraisonprevu']!="" && data['livraisonprevu']!=null){
					let date01 = data['livraisonprevu'];
					let date1 = date01.substr(0, 10);
					this.livraisonprevu = date1;
				}
				
			}, error => {
				console.log(error);
		});
 }
 

}
