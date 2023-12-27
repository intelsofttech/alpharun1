import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { v4 as uuidv4 } from 'uuid';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
import { SelectpartnerPage } from '../selectpartner/selectpartner.page';
import { SelectlotPage } from '../selectlot/selectlot.page';

@Component({
  selector: 'app-souscriptionprint',
  templateUrl: './souscriptionprint.page.html',
  styleUrls: ['./souscriptionprint.page.scss'],
})
export class SouscriptionprintPage implements OnInit {

  
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
  
  idbill="0";
  codebill="0";
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
	nom="< Séledtionnez >";
	mobile="";
	email="";
	adresse="";
	profession="";
	nationalite="";
	conom="< Séledtionnez >";
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
  success = "";
			
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
					nom: [''],
					mobile: [''],
					email: [''],
					adresse: [''],
					profession: [''],
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
		
		this.onGet(this.param1);	
		
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
				this.nom = data['nom'];
				this.mobile = data['mobile'];
				this.email = data['email'];
				this.adresse = data['adresse'];
				this.profession = data['profession'];
				this.nationalite = data['nationalite'];
				this.conom = data['conom'];
				this.comobile = data['comobile'];
				this.coemail = data['coemail'];
				this.coadresse = data['coadresse'];
				this.coprofession = data['coprofession'];
				this.conationalite = data['conationalite'];
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
				this.onFoundbill(this.id);
			}, error => {
				console.log(error);
		});
 }
 
 
 onFoundbill(id:any){
	
	this.success="";
	const Uuid =uuidv4();
	var header = {
			'Content-Type': 'application/json',
			'enctype': 'application/json',
			'Accept': '*',
			'Authorization': 'Bearer '+this.walletId,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token'
	   };

		this.httpClient.get(this.REST_API_SERVER+"/bills/parent/category/"+id+"/PROMOTION",{headers: header})
			.subscribe(data => {
				console.log("Found bill");
				console.log(data);
				if(data[0]!=undefined){
					console.log(data[0]);
					console.log(data[0]['id']);
					this.idbill = data[0]['id'];
					this.codebill = data[0]['code'];
				}else{
					console.log("not found");
					this.onAdd(id);
				}
			}, error => {
				console.log(error);
		});
 }
 
 
 onAdd(id:any){
	
	this.success="";
	const Uuid =uuidv4();
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
				title: this.label+" "+this.supterrain+"m² "+this.logement,
				parent: this.id,
				total: this.totalapayer,
				amounttaxe: '0',
				amountouttaxe: this.totalapayer,
				discount: '0',
			    amount: this.totalapayer,
			    stayamount: this.totalapayer,
			    reference:  Date.now(),
			    partner: this.nom,
			    partnercode: this.partnerid,
				phone1: "",
				email: "",
				address: "",
				city: "",
			    description: this.description,
			    uui: Uuid,
			    type: '1',
			    category: "PROMOTION",
			    propertyid: this.idprogramme,
			    property: this.programme,
			    counted: "COUNTED",
				statut: 'Validé'
				
		}
		console.log(postData);
		this.httpClient.post(this.REST_API_SERVER+"/bill", postData, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.success="Facture ajoutée avec succès.";
			}, error => {
				console.log(error);
				this.success="";
		});
 }
 
 
 

}
