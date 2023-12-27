import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { PopoverController, ToastController ,ActionSheetController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-demandesdetail',
  templateUrl: './demandesdetail.page.html',
  styleUrls: ['./demandesdetail.page.scss'],
})
export class DemandesdetailPage implements OnInit {

  
  
  header = {
	//'Content-Type': 'application/json',
	'enctype': 'application/json',
	'Accept': '*',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
	'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
  };

  photo:any="../assets/images/default-img.jpg";

  
  @ViewChild(IonModal) modal: IonModal;
	 
  REST_API_SERVER="";
  walletId = "";
  pageForm: FormGroup;
  categForm: FormGroup;
  
  showsearchForm = false;
  notshowAddForm = false;
  search = false;
  addForm = false;
  step = false;
  stepsimple = false;
  stepdetail = false;
  stepsell = false;
  showdescashbtn = false;
  catterrain = false;
  isSend = false;
  param1 :any= "0";
  param2 :any= "0";
  param3 :any= "0";
  param4 :any= "0";
  searchValue :any= "0";
  id :any= "0";
  _categ = "";
  _date1 = "";
  _date2 = "";
  mois = "01";
  annee = "2023";
  paiement = "";
  property = "";
  
  
	name="";
	numcompte="";
	category="";
	type="";
	code="";
	nom="";
	codeperson="";
	typeperson="Personne physique";
	address="";
	phone="";
	email="";
	whatsapp="";
	profession="";
	option1="";
	option2="";
	option3="";
	option4="";
	option5="";
	selected="";
	url="";
	ville="";
	commune="";
	quartier="";
	villeid="";
	communeid="";
	quartierid="";
	villesearch="";
	communesearch="";
	quartiersearch="";
	dateevent="";
	numcontrat="";
	montant="";
	numattestation="";
	immatriculation="";
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
	
	caution = "";
	avance = "";
	agence = "";
	tva = "";
	dossier = "";
	total1 = "";
	bail = "";
	cie = "";
	dijoncteur = "";
	sodeci = "";
	total2 = "";
	netapayer = "";

	namefile1="assets/images/default.png";
	namefile2="assets/images/default.png";
	namefile3="assets/images/default.png";
	namefile4="assets/images/default.png";
	namefile5="assets/images/default.png";
	namefile6="assets/images/default.png";
	namefile7="assets/images/default.png";
	namefile8="assets/images/default.png";
	namefile9="assets/images/default.png";
	namefile10="assets/images/default.png";
	
  agency = "";
  cashdesk = "";
  
  amountBill :number= 0;
  amountTotal :number= 0;
  payamountTotal :number= 0;
  stayamountTotal :number= 0;
	
   image :any= "";
   imageurl :any= "";
   imageurl1 :any= "";
   imageurl2 :any= "";
   imageurl3 :any= "";
   imageurl4 :any= "";
   imageurl5 :any= "";
   currentFile:any = "";
   file :any ;
   imagebase64 :any ;
   imgselected :any ;
   selectedFiles:any = [];

   
  public results :any = [];
  public alllist :any = [];
  public list :any = [];
  public properties :any = [];
  public filtered :any = [];
  public cartprod :any = [];
  public projets :any = [];
  public listcategories :any = [];
  searchNotMatched = true;
  typeForm = false;
 constructor(public alertCtrl: AlertController,
			  public formBuilder: FormBuilder,
			  public modalCtrl: ModalController,
			  private activatedRoute: ActivatedRoute,
			  public httpClient: HttpClient) {
			  this.pageForm = this.formBuilder.group({
					numcompte: [''],
					type: [''],
					category: [''],
					nom: [''],
					codeperson: [''],
					typeperson: [''],
					address: [''],
					phone: [''],
					email: [''],
					whatsapp: [''],
					profession: [''],
					option1: [''],
					option2: [''],
					option3: [''],
					option4: [''],
					option5: [''],
					selected: [''],
					url: [''],
					ville: [''],
					villeid: [''],
					villesearch: [''],
					commune: [''],
					communeid: [''],
					communesearch: [''],
					quartier: [''],
					quartierid: [''],
					quartiersearch: [''],
					dateevent: [''],
					numcontrat: [''],
					montant: [''],
					numattestation: [''],
					immatriculation: [''],
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
					caution: [''],
					avance: [''],
					agence: [''],
					tva: [''],
					dossier: [''],
					total1: [''],
					bail: [''],
					cie: [''],
					dijoncteur: [''],
					sodeci: [''],
					total2: [''],
					netapayer: [''],
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
  simpleform :any = false;
  
  
  showmode :any = "grid";
  idadmin :any = "";
  
  
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
	
	var cashdesk_html: any =document.getElementById("cashdesk")  as HTMLElement;
	this.cashdesk= cashdesk_html.value;
	
	
	var agency_html: any =document.getElementById("agency")  as HTMLElement;
	this.agency= agency_html.value;
	
	var idadmin_html: any =document.getElementById("idadmin")  as HTMLElement;
	this.idadmin= idadmin_html.value;
	
	
	this.param1 = this.activatedRoute.snapshot.paramMap.get('param1');
	this.param2 = this.activatedRoute.snapshot.paramMap.get('param2');
	this.param3 = this.activatedRoute.snapshot.paramMap.get('param3');
	
	this.onGetStatment(this.param1);	
	
  }

  onAdd(): any{
      this.isSend = false;
	  if (!this.pageForm.valid) {
		
	  }else {
	    let numcompte = this.pageForm.get('numcompte')?.value;
		let category = this.pageForm.get('category')?.value;
		let type = this.pageForm.get('type')?.value;
		let nom = this.pageForm.get('nom')?.value;
		let codeperson = this.pageForm.get('codeperson')?.value;
		let typeperson = this.pageForm.get('typeperson')?.value;
		let address = this.pageForm.get('address')?.value;
		let phone = this.pageForm.get('phone')?.value;
		let email = this.pageForm.get('email')?.value;
		let whatsapp = this.pageForm.get('whatsapp')?.value;
		let profession = this.pageForm.get('profession')?.value;
		let option1 = this.pageForm.get('option1')?.value;
		let option2 = this.pageForm.get('option2')?.value;
		let option3 = this.pageForm.get('option3')?.value;
		let option4 = this.pageForm.get('option4')?.value;
		let option5 = this.pageForm.get('option5')?.value;
		let selected = this.pageForm.get('selected')?.value;
		let url = this.pageForm.get('url')?.value;
		let villeid = this.pageForm.get('villeid')?.value;
		let communeid = this.pageForm.get('communeid')?.value;
		let quartierid = this.pageForm.get('quartierid')?.value;
		let ville = this.pageForm.get('ville')?.value;
		let commune = this.pageForm.get('commune')?.value;
		let quartier = this.pageForm.get('quartier')?.value;
		let dateevent = this.pageForm.get('dateevent')?.value;
		let numcontrat = this.pageForm.get('numcontrat')?.value;
		let montant = this.pageForm.get('montant')?.value;
		let numattestation = this.pageForm.get('numattestation')?.value;
		let immatriculation = this.pageForm.get('immatriculation')?.value;	
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
	   
	   
			let postData = {
				numcompte : numcompte,
				category : category,
				type : type,
				nom : nom,
				codeperson : codeperson,
				typeperson : typeperson,
				address : address,
				phone : phone,
				email : email,
				whatsapp : whatsapp,
				profession : profession,
				option1 : option1,
				option2 : option2,
				option3 : option3,
				option4 : option4,
				option5 : option5,
				selected : selected,
				url : url,
				villeid : villeid,
				communeid : communeid,
				quartierid : quartierid,
				ville : ville,
				commune : commune,
				quartier : quartier,
				dateevent : dateevent,
				numcontrat : numcontrat
		    }
			
		   this.httpClient.put(this.REST_API_SERVER+"/statement/"+this.param1, postData, {headers: header})
				.subscribe(data => {
					console.log(data);
					alert("Modifications enregistrées avec succès")
					this.isSend = false;
				}, error => {
					this.isSend = false;	
					console.log(error);
			});
		
	  }
 }
  
  
   onGetStatment(id:string){
		
	    console.log(id);
		this.httpClient.get(this.REST_API_SERVER+"/statement/"+id)
			.subscribe(data => {
				console.log(data);
				this.id = data['id'];
				this.code = data['code'];
				this.numcompte = data['numcompte'];
				this.category = data['category'];
				this.type = data['type'];
				this.nom = data['nom'];
				this.codeperson = data['codeperson'];
				this.typeperson = data['typeperson'];
				this.address = data['address'];
				this.phone = data['phone'];
				this.email = data['email'];
				this.whatsapp = data['whatsapp'];
				this.profession = data['profession'];
				this.option1 = data['option1'];
				this.option2 = data['option2'];
				this.option3 = data['option3'];
				this.option4 = data['option4'];
				this.option5 = data['option5'];
				this.selected = data['selected'];
				this.url = data['url'];
				this.villeid = data['villeid'];
				this.communeid = data['communeid'];
				this.quartierid = data['quartierid'];
				this.ville = data['ville'];
				this.commune = data['commune'];
				this.quartier = data['quartier'];
				this.dateevent = data['dateevent'];
				this.numcontrat = data['numcontrat'];
				this.montant = data['montant'];
				this.numattestation = data['numattestation'];
				this.immatriculation = data['immatriculation'];
				this.file1 = data['file1'];
				this.file2 = data['file2'];
				this.file3 = data['file3'];
				this.file4 = data['file4'];
				this.file5 = data['file5'];
				this.file6 = data['file6'];
				this.file7 = data['file7'];
				this.file8 = data['file8'];
				this.file9 = data['file9'];
				this.file10 = data['file10'];
				this.caution = data['caution'];
				this.avance = data['avance'];
				this.agence = data['agence'];
				this.tva = data['tva'];
				this.dossier = data['dossier'];
				this.total1 = data['total1'];
				this.bail = data['bail'];
				this.cie = data['cie'];
				this.dijoncteur = data['dijoncteur'];
				this.sodeci = data['sodeci'];
				this.total2 = data['total2'];
				this.netapayer = data['netapayer'];
				
				if(this.category=="Terrain"){
					this.catterrain = true;
				}else{
					this.catterrain = false;
				}
				if(this.typeperson=="Personne physique"){
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
				this.onGetImageone("image1");
				this.onGetImageone("image2");
				this.onGetImageone("image3");
				this.onGetImageone("image4");
				this.onGetImageone("image5");
			}, error => {
				console.log(error);
		});
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
	onTypeSelect(){
		const category = this.pageForm.get('category')?.value;
		console.log(category)
		if(category=="Terrain"){
			this.catterrain = true;
		}else{
			this.catterrain = false;
		}
   }
   onTypePersonne(){
		const typeperson = this.pageForm.get('typeperson')?.value;
		console.log(typeperson)
		if(typeperson=="Personne physique"){
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
			if(this.imgselected=="image1"){
				this.file1 = this.image;
			}
			if(this.imgselected=="image2"){
				this.file2 = this.image;
			}
			if(this.imgselected=="image3"){
				this.file3 = this.image;
			}
			if(this.imgselected=="image4"){
				this.file4 = this.image;
			}
			if(this.imgselected=="image5"){
				this.file5 = this.image;
			}
			
			this.onUpdateimage(this.image);
			this.onGetImageone(this.image);
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
 
  
  
 onGetImageone(name:string){
		
		this.httpClient.get(this.REST_API_SERVER+"/file/name/"+name)
			.subscribe(data => {
				console.log(data);
				if(this.imgselected=="image1"){
					this.imageurl1 =data['content'];
				}
				if(this.imgselected=="image2"){
					this.imageurl2 =data['content'];
				}
				if(this.imgselected=="image3"){
					this.imageurl3 =data['content'];
				}
				if(this.imgselected=="image4"){
					this.imageurl4 =data['content'];
				}
				if(this.imgselected=="image5"){
					this.imageurl5 =data['content'];
				}
			}, error => {
				console.log(error);
		});
 }
 
 	
	
  onselect(code:string,libelle:string){
    
    this.communeid=code;
    this.commune=libelle;
    this.modal.dismiss(this.name, 'confirm');
  }
  
  
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
   
    if (ev.detail.role === 'confirm') {
      //this.message = 'Hello, ${ev.detail.data}!';
    }
  }
	
	

}
