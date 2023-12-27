import { Component, OnInit } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';


@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.page.html',
  styleUrls: ['./retrait.page.scss'],
})
export class RetraitPage implements OnInit {


  solde="";
  showsolde = false;
  constructor() { }

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
