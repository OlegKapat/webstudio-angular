import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menucomponent',
  templateUrl: './menucomponent.component.html',
  styleUrls: ['./menucomponent.component.css']
})
export class MenucomponentComponent implements OnInit {
  wasClicked = false;
  constructor() { 
   
  }
  onClick() {
      this.wasClicked= !this.wasClicked;
  }
  ngOnInit() {
  }

}
