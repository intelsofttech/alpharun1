import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editcotisation',
  templateUrl: './editcotisation.page.html',
  styleUrls: ['./editcotisation.page.scss'],
})
export class EditcotisationPage implements OnInit {

  constructor() { }

  
  showmode :any = "grid";
  
  ngOnInit() {
		
		var showmode_html: any =document.getElementById("showmode")  as HTMLElement;
		this.showmode= showmode_html.value;
  }

}
