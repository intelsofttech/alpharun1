import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.page.html',
  styleUrls: ['./other.page.scss'],
})
export class OtherPage implements OnInit {


  solde="";
  showsolde = false;
  constructor() { }

  ngOnInit() {
    var solde_html: any =document.getElementById("solde")  as HTMLElement;
	this.solde= solde_html.value;
  }

  Refresh() {
    var solde_html: any =document.getElementById("solde")  as HTMLElement;
	this.solde= solde_html.value;
	this.showsolde=!this.showsolde;
  }
  
  
}
