import { Component, OnInit } from '@angular/core';
import {ModalController , NavParams  } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'; 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mouvementproduit',
  templateUrl: './mouvementproduit.page.html',
  styleUrls: ['./mouvementproduit.page.scss'],
})
export class MouvementproduitPage implements OnInit {

  REST_API_SERVER="";
  walletId="";
  postForm: FormGroup;
  libelle:any = "";
  qte:any = "1";
  prix:any = "0";
  total:any = "0";
  margin:any = "0";
  isSend = false;
  param1="";
  param2="";
  param3="";
  id="0";
  prodid="";
  title="Entrée";
  oper="";
  prixachat="0";
  prixvente="0";
  direction="in";
  liboperation="ENTREE PRODUIT";
  coloroperation="green";
  constructor(public  modalCtrl: ModalController,
			  public formBuilder: FormBuilder,
			  public httpClient: HttpClient,
			  private activatedRoute: ActivatedRoute,
			  private params: NavParams) { 
			  this.postForm = this.formBuilder.group({
				   libelle: ['', [Validators.required, Validators.minLength(2)]],
				   qte: ['', [Validators.required]],
				   prix: [''],
				   total: [''],
				   margin: ['']
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
	this.onList();
	var walletId_html: any =document.getElementById("walletId")  as HTMLElement;
	this.walletId= walletId_html.value;
	this.param1 = this.activatedRoute.snapshot.paramMap.get('param1');
	this.param2 = this.activatedRoute.snapshot.paramMap.get('param2');	
	this.param3 = this.activatedRoute.snapshot.paramMap.get('param3');
    console.log(this.params)
	this.prodid=  this.params.get('param1');
	this.title=  this.params.get('param2');
	this.oper=  this.params.get('param3');	
	this.prixachat=  this.params.get('param4');	
	this.prixvente=  this.params.get('param5');	
	if(this.oper=="add"){
		this.prix=this.prixachat;
		this.total=this.prixachat;
		this.liboperation="ENTREE PRODUIT";
		this.libelle="ENTREE PRODUIT";
        this.coloroperation="green";
        this.direction="add";
	}else{
		this.prix=this.prixvente;
		this.total=this.prixvente;
		this.liboperation="SORTIE PRODUIT";
		this.libelle="SORTIE PRODUIT";
        this.coloroperation="red";
		this.direction="out";
	}
  }
  
  
  onCalcul() {
	var qtehtml: any =document.getElementById("qte")  as HTMLElement;
	var prixhtml: any =document.getElementById("prix")  as HTMLElement;
	var totalhtml: any =document.getElementById("total")  as HTMLElement;
	let _qte= qtehtml.value;
	let _prix= prixhtml.value;
	let _total = parseInt(_qte)*parseInt(_prix);
	this.total=_total;
	this.margin=this.total-(parseInt(_qte)*parseInt(this.prixachat));
  }
  
    onAdd(): any{
      this.isSend = false;
	  if (!this.postForm.valid) {
		
	  }else {
	   const libelle = this.postForm.get('libelle')?.value;	   
	   const quantity = this.postForm.get('qte')?.value;
	   const price = this.postForm.get('prix')?.value;
	   const total = this.postForm.get('total')?.value;
	   const margin = this.postForm.get('margin')?.value;
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
				label: libelle,
				quantity : quantity,
				price : price,
				total : total,
				margin : margin,
				direction : this.direction,
				productid : this.prodid
		    }
			console.log(postData)
			this.httpClient.post(this.REST_API_SERVER+"/movementstock", postData, {headers: header})
			.subscribe(data => {
					console.log(data);
					console.log(data['stock']);
					this.modalCtrl.dismiss(quantity,"ok");
					this.isSend = false;
				}, error => {
					this.isSend = false;	
					console.log(error);
			});
	   }else{
			let postData = {
				libelle: libelle,
				quantity : quantity,
				price : price,
				total : total,
				margin : margin,
				direction : this.direction,
				productid : this.prodid
		    }
			console.log(postData)
		   this.httpClient.put(this.REST_API_SERVER+"/movementstock"+this.id, postData, {headers: header})
				.subscribe(data => {
					console.log(data);
					this.isSend = false;
				}, error => {
					this.isSend = false;	
					console.log(error);
			});
	   }
		
	  }
 }

  
  
  onList() {
  
  }



  onselect(id:string,stock:string)
  {
    //this.modalCtrl.dismiss(code,libelle);

  }
 closemodal()
 {
    this.modalCtrl.dismiss();

 }

}
