import { Component, OnInit } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.page.html',
  styleUrls: ['./finance.page.scss'],
})
export class FinancePage implements OnInit {


  solde="";
  constructor() { }
  showsolde = false;
  ngOnInit() {
	StatusBar.setOverlaysWebView({ overlay: true });
	var solde_html: any =document.getElementById("solde")  as HTMLElement;
	this.solde= solde_html.value;
  }

  Refresh() {
    var solde_html: any =document.getElementById("solde")  as HTMLElement;
	this.solde= solde_html.value;
	this.showsolde=!this.showsolde;
  }
}
