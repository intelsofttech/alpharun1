import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, NavParams, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
import { SelectconducteurPage } from '../selectconducteur/selectconducteur.page';
import { SelectproprietairePage } from '../selectproprietaire/selectproprietaire.page';


@Component({
  selector: 'app-selectauto',
  templateUrl: './selectauto.page.html',
  styleUrls: ['./selectauto.page.scss'],
})
export class SelectautoPage implements OnInit {

  
  
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
  reference:any="";
	marque:any="";
	model:any="";
	serie:any="";
	cylindre:any="";
	couleur:any="";
	kilometrage:any="";
	type:any="";
	origine:any="";
	category:any="";
	immatriculation:any="";
	montant:any="";
	frais:any="";
	charge:any="";
	total:any="";
	base:any="";
	honoraire:any="";
	recette:any="";
	provider:any="";
	tenantid:any="";
	tenant:any="";
	tenantid2:any="";
	tenant2:any="";
	ownerid:any="";
	owner:any="";
	status:any="";
	dateachat:any="";
	datecirculation:any="";
	debutassurance:any="";
	finassurance:any="";
	debutvisite:any="";
	finvisite:any="";
	debutpatente:any="";
	finpatente:any="";
	datestation:any="";
	event:any="";
	motif:any="";
	description:any="";
	agency:any="";
	agencyid:any="";
	username:any="";
	userid:any="";
	numcontrat:any="";
	etatcontrat:any="";
	datesignature:any="";
	image:any="";
	file:any="";
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
			  public httpClient: HttpClient,
			  private params: NavParams) {
			  this.typeForm = this.formBuilder.group({
				 type: [''],
				 status: ['']
			  })
			  this.pageForm = this.formBuilder.group({
				 word: ['']
			  })
			  this.categForm = this.formBuilder.group({
				    reference: [''],
					marque: [''],
					model: [''],
					serie: [''],
					cylindre: [''],
					couleur: [''],
					kilometrage: [''],
					type: [''],
					origine: [''],
					category: [''],
					immatriculation: [''],
					montant: [''],
					frais: [''],
					charge: [''],
					total: [''],
					base: [''],
					honoraire: [''],
					recette: [''],
					provider: [''],
					tenantid: [''],
					tenant: [''],
					tenantid2: [''],
					tenant2: [''],
					ownerid: [''],
					owner: [''],
					status: [''],
					dateachat: [''],
					datecirculation: [''],
					debutassurance: [''],
					finassurance: [''],
					debutvisite: [''],
					finvisite: [''],
					debutpatente: [''],
					finpatente: [''],
					datestation: [''],
					event: [''],
					motif: [''],
					description: [''],
					agency: [''],
					agencyid: [''],
					username: [''],
					userid: [''],
					numcontrat: [''],
					etatcontrat: [''],
					datesignature: [''],
					image: [''],
					file: ['']
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
		
	
		this.param1=  this.params.get('param1');
		this.param2=  this.params.get('param2');
			
		this.onList();
		
  }
  handleInput(event:any) {
    const query = event.target.value.toLowerCase();
    //this.results = this.results.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }
  
  async onSelectConducteur1(){
  
		const modal = await this.modalCtrl.create({
			  component: SelectconducteurPage,
			  componentProps: {
				'param1': 'conducteur',
				'param2': 'Conducteurs'
			  }
			});

			
			modal.onDidDismiss().then(data=>{
				console.log(data)
				this.tenantid= data['data'];
				this.tenant= data['role'];
			})
			return await modal.present();
  } 
	
  
  async onSelectConducteur2(){
  
		const modal = await this.modalCtrl.create({
			  component: SelectconducteurPage,
			  componentProps: {
				'param1': 'conducteur',
				'param2': 'Conducteurs'
			  }
			});

			
			modal.onDidDismiss().then(data=>{
				console.log(data)
				this.tenantid2= data['data'];
				this.tenant2= data['role'];
			})
			return await modal.present();
  } 
  
  async onSelectProprietaire(){
  
		const modal = await this.modalCtrl.create({
			  component: SelectproprietairePage,
			  componentProps: {
				'param1': 'proprietaireauto',
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
	
	
  onNew(){
		
	    this.addForm = true;
	    this.id = "0";
	    this.liboperation = "AJOUT AUTOMBILE";
	    this.reference="";
		this.marque="";
		this.model="";
		this.serie="";
		this.cylindre="";
		this.couleur="";
		this.kilometrage="";
		this.type="";
		this.origine="";
		this.category="";
		this.immatriculation="";
		this.montant="";
		this.frais="";
		this.charge="";
		this.total="";
		this.base="";
		this.honoraire="";
		this.recette="";
		this.provider="";
		this.tenantid="";
		this.tenant="";
		this.tenantid2="";
		this.tenant2="";
		this.ownerid="";
		this.owner="";
		this.status="";
		this.dateachat="";
		this.datecirculation="";
		this.debutassurance="";
		this.finassurance="";
		this.debutvisite="";
		this.finvisite="";
		this.debutpatente="";
		this.finpatente="";
		this.datestation="";
		this.event="";
		this.motif="";
		this.description="";
		this.agency="";
		this.agencyid="";
		this.username="";
		this.userid="";
		this.numcontrat="";
		this.etatcontrat="";
		this.datesignature="";
		this.image="";
		this.file="";
  } 
  
  
  onAdd(): any{
      this.isSend = false;
	  if (!this.categForm.valid) {
		
	  }else {
	    const reference = this.categForm.get('reference')?.value;
            const marque = this.categForm.get('marque')?.value;
            const model = this.categForm.get('model')?.value;
            const serie = this.categForm.get('serie')?.value;
            const cylindre = this.categForm.get('cylindre')?.value;
            const couleur = this.categForm.get('couleur')?.value;
            const kilometrage = this.categForm.get('kilometrage')?.value;
            const type = this.categForm.get('type')?.value;
            const origine = this.categForm.get('origine')?.value;
            const category = this.categForm.get('category')?.value;
            const immatriculation = this.categForm.get('immatriculation')?.value;
            const montant = this.categForm.get('montant')?.value;
            const frais = this.categForm.get('frais')?.value;
            const charge = this.categForm.get('charge')?.value;
            const total = this.categForm.get('total')?.value;
            const base = this.categForm.get('base')?.value;
            const honoraire = this.categForm.get('honoraire')?.value;
            const recette = this.categForm.get('recette')?.value;
            const provider = this.categForm.get('provider')?.value;
            const tenantid = this.categForm.get('tenantid')?.value;
            const tenant = this.categForm.get('tenant')?.value;
            const tenantid2 = this.categForm.get('tenantid2')?.value;
            const tenant2 = this.categForm.get('tenant2')?.value;
            const ownerid = this.categForm.get('ownerid')?.value;
            const owner = this.categForm.get('owner')?.value;
            const status = this.categForm.get('status')?.value;
            const dateachat = this.categForm.get('dateachat')?.value;
            const datecirculation = this.categForm.get('datecirculation')?.value;
            const debutassurance = this.categForm.get('debutassurance')?.value;
            const finassurance = this.categForm.get('finassurance')?.value;
            const debutvisite = this.categForm.get('debutvisite')?.value;
            const finvisite = this.categForm.get('finvisite')?.value;
            const debutpatente = this.categForm.get('debutpatente')?.value;
            const finpatente = this.categForm.get('finpatente')?.value;
            const datestation = this.categForm.get('datestation')?.value;
            const event = this.categForm.get('event')?.value;
            const motif = this.categForm.get('motif')?.value;
            const description = this.categForm.get('description')?.value;
            const agency = this.categForm.get('agency')?.value;
            const agencyid = this.categForm.get('agencyid')?.value;
            const username = this.categForm.get('username')?.value;
            const userid = this.categForm.get('userid')?.value;
            const numcontrat = this.categForm.get('numcontrat')?.value;
            const etatcontrat = this.categForm.get('etatcontrat')?.value;
            const datesignature = this.categForm.get('datesignature')?.value;
            const image = this.categForm.get('image')?.value;
            const file = this.categForm.get('file')?.value;				   
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
				reference : reference,
				marque : marque,
				model : model,
				serie : serie,
				cylindre : cylindre,
				couleur : couleur,
				kilometrage : kilometrage,
				type : type,
				origine : origine,
				category : category,
				immatriculation : immatriculation,
				montant : montant,
				frais : frais,
				charge : charge,
				total : total,
				base : base,
				honoraire : honoraire,
				recette : recette,
				provider : provider,
				tenantid : tenantid,
				tenant : tenant,
				tenantid2 : tenantid2,
				tenant2 : tenant2,
				ownerid : ownerid,
				owner : owner,
				status : status,
				dateachat : dateachat,
				datecirculation : datecirculation,
				debutassurance : debutassurance,
				finassurance : finassurance,
				debutvisite : debutvisite,
				finvisite : finvisite,
				debutpatente : debutpatente,
				finpatente : finpatente,
				datestation : datestation,
				event : event,
				motif : motif,
				description : description,
				agency : agency,
				agencyid : agencyid,
				username : username,
				userid : userid,
				numcontrat : numcontrat,
				etatcontrat : etatcontrat,
				datesignature : datesignature,
				image : image,
				file : file
		    }
			
			this.httpClient.post(this.REST_API_SERVER+"/car", postData, {headers: header})
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
				reference : reference,
				marque : marque,
				model : model,
				serie : serie,
				cylindre : cylindre,
				couleur : couleur,
				kilometrage : kilometrage,
				type : type,
				origine : origine,
				category : category,
				immatriculation : immatriculation,
				montant : montant,
				frais : frais,
				charge : charge,
				total : total,
				base : base,
				honoraire : honoraire,
				recette : recette,
				provider : provider,
				tenantid : tenantid,
				tenant : tenant,
				tenantid2 : tenantid2,
				tenant2 : tenant2,
				ownerid : ownerid,
				owner : owner,
				status : status,
				dateachat : dateachat,
				datecirculation : datecirculation,
				debutassurance : debutassurance,
				finassurance : finassurance,
				debutvisite : debutvisite,
				finvisite : finvisite,
				debutpatente : debutpatente,
				finpatente : finpatente,
				datestation : datestation,
				event : event,
				motif : motif,
				description : description,
				agency : agency,
				agencyid : agencyid,
				username : username,
				userid : userid,
				numcontrat : numcontrat,
				etatcontrat : etatcontrat,
				datesignature : datesignature,
				image : image,
				file : file
		    }
			
			console.log(this.id);
			console.log(postData);
		   this.httpClient.put(this.REST_API_SERVER+"/car/"+this.id, postData, {headers: header})
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
  

  onChangemode(sel:any){
	   if(sel=="list"){
		  this.listmode = true;
	      this.gridmode = false;
	   }else{
	      this.listmode = false;
	      this.gridmode = true;
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
		this.httpClient.get(this.REST_API_SERVER+"/cars", {headers: header})
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
		this.httpClient.delete(this.REST_API_SERVER+"/car/"+id, {headers: header})
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
		this.httpClient.get(this.REST_API_SERVER+"/car/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.addForm = true;
				this.liboperation = "MODIFICATION";
				this.id = data['id'];
				this.reference = data['reference'];
				this.marque = data['marque'];
				this.model = data['model'];
				this.serie = data['serie'];
				this.cylindre = data['cylindre'];
				this.couleur = data['couleur'];
				this.kilometrage = data['kilometrage'];
				this.type = data['type'];
				this.origine = data['origine'];
				this.category = data['category'];
				this.immatriculation = data['immatriculation'];
				this.montant = data['montant'];
				this.frais = data['frais'];
				this.charge = data['charge'];
				this.total = data['total'];
				this.base = data['base'];
				this.honoraire = data['honoraire'];
				this.recette = data['recette'];
				this.provider = data['provider'];
				this.tenantid = data['tenantid'];
				this.tenant = data['tenant'];
				this.tenantid2 = data['tenantid2'];
				this.tenant2 = data['tenant2'];
				this.ownerid = data['ownerid'];
				this.owner = data['owner'];
				this.status = data['status'];
				this.dateachat = data['dateachat'];
				this.datecirculation = data['datecirculation'];
				this.debutassurance = data['debutassurance'];
				this.finassurance = data['finassurance'];
				this.debutvisite = data['debutvisite'];
				this.finvisite = data['finvisite'];
				this.debutpatente = data['debutpatente'];
				this.finpatente = data['finpatente'];
				this.datestation = data['datestation'];
				this.event = data['event'];
				this.motif = data['motif'];
				this.description = data['description'];
				this.agency = data['agency'];
				this.agencyid = data['agencyid'];
				this.username = data['username'];
				this.userid = data['userid'];
				this.numcontrat = data['numcontrat'];
				this.etatcontrat = data['etatcontrat'];
				this.datesignature = data['datesignature'];
				this.image = data['image'];
				this.file = data['file'];
				//this.onList();
			}, error => {
				console.log(error);
		});
 }
 
 
onSelect(code:string,libelle:string)
  {
    this.modalCtrl.dismiss(code,libelle);

  }
 closemodal(code:string,libelle:string)
 {
    this.modalCtrl.dismiss(code,libelle);

 }


}
