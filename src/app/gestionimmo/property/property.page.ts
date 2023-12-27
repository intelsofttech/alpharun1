import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController, Platform, IonRouterOutlet, ModalController, MenuController   } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';  
import { ActivatedRoute, Router } from '@angular/router';
import { PartnermodalPage } from '../../partnermodal/partnermodal.page';
 

@Component({
  selector: 'app-property',
  templateUrl: './property.page.html',
  styleUrls: ['./property.page.scss'],
})
export class PropertyPage implements OnInit {

  
  
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
  listmode = false;
  gridmode = true;
  param1 :any= "0";
  param2 :any= "0";
  searchValue :any= "0";
  id :any= "0";
  ref :any= "";
  parent :any= "";
  label :any= "";
  name :any= "";
  ownerid :any= "";
  owner :any= "";
  type :any= "";
  image :any= "";
  foncier :any= "";
  ilot :any= "";
  lot :any= "";
  permis :any= "";
  file :any= "";
  location :any= "";
  neiberhood :any= "";
  commune :any= "";
  ville :any= "";
  description :any= "";
  agency = "0";
  
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
				   ref: [''],
				   parent: [''],
				   ownerid: [''],
				   owner: [''],
				   type: [''],
				   image: [''],
				   foncier: [''],
				   ilot: [''],
				   lot: [''],
				   permis: [''],
				   file: [''],
				   location: [''],
				   ville: [''],
				   neiberhood: [''],
				   commune: [''],
				   description: [''],
				   name: ['', [Validators.required]]
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
		
		this.onList();	
		
  }
  handleInput(event:any) {
    const query = event.target.value.toLowerCase();
    //this.results = this.results.filter((d) => d.toLowerCase().indexOf(query) > -1);
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
	   this.liboperation = "AJOUT";
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
  onAdd(): any{
      this.isSend = false;
	  if (!this.categForm.valid) {
		
	  }else {
	   const ref = this.categForm.get('ref')?.value;
	   const parent = this.categForm.get('parent')?.value;
	   const ownerid = this.categForm.get('ownerid')?.value;
	   const owner = this.categForm.get('owner')?.value;
	   const type = this.categForm.get('type')?.value;
	   const image = this.categForm.get('image')?.value;
	   const foncier = this.categForm.get('foncier')?.value;
	   const ilot = this.categForm.get('ilot')?.value;
	   const lot = this.categForm.get('lot')?.value;
	   const permis = this.categForm.get('permis')?.value;
	   const file = this.categForm.get('file')?.value;
	   const location = this.categForm.get('location')?.value;
	   const neiberhood = this.categForm.get('neiberhood')?.value;
	   const commune = this.categForm.get('commune')?.value;
	   const ville = this.categForm.get('ville')?.value;
	   const name = this.categForm.get('name')?.value;
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
				category: this.param1,
				ref: ref,
				parent: parent,
				ownerid: ownerid,
				owner: owner,
				type: type,
				file: file,
				location: location,
				neiberhood: neiberhood,
				commune: commune,
				ville: ville,
				name: name,
				foncier: foncier,
				ilot: ilot,
				lot: lot,
				permis: permis,
				agencyid: this.agency,
				description: description
		    }
			console.log(postData);
			this.httpClient.post(this.REST_API_SERVER+"/property", postData, {headers: header})
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
				ref: ref,
				parent: parent,
				ownerid: ownerid,
				owner: owner,
				type: type,
				file: file,
				location: location,
				neiberhood: neiberhood,
				commune: commune,
				ville: ville,
				name: name,
				foncier: foncier,
				ilot: ilot,
				lot: lot,
				permis: permis,
				description: description
		    }
		   this.httpClient.put(this.REST_API_SERVER+"/property/"+this.id, postData, {headers: header})
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

  private setFilteredList(): void {
    this.filtered = this.results.map(result => {
      return result.showcases.filter(line => line.label === this.searchValue)
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
		this.httpClient.get(this.REST_API_SERVER+"/property/category/"+this.param1, {headers: header})
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
		this.httpClient.get(this.REST_API_SERVER+"/property/"+id, {headers: header})
			.subscribe(data => {
				console.log(data);
				this.addForm = true;
				this.liboperation = "MODIFICATION";
				this.id = data['id'];
				this.ref = data['ref'];
				this.parent = data['parent'];
				this.ownerid = data['ownerid'];
				this.owner = data['owner'];
				this.type = data['type'];
				this.file = data['file'];
				this.location = data['location'];
				this.neiberhood = data['neiberhood'];
				this.commune = data['commune'];
				this.ville = data['ville'];
				this.name = data['name'];
				this.foncier = data['foncier'];
				this.ilot = data['ilot'];
				this.lot = data['lot'];
				this.permis = data['permis'];
				this.description = data['description'];
				
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
