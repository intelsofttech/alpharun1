import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disponibilite',
  templateUrl: './disponibilite.page.html',
  styleUrls: ['./disponibilite.page.scss'],
})
export class DisponibilitePage implements OnInit {

  constructor() { }

  
  showmode :any = "grid";
  
  ngOnInit() {
		
		var showmode_html: any =document.getElementById("showmode")  as HTMLElement;
		this.showmode= showmode_html.value;
  }

}
