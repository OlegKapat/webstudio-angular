import { Component, OnInit,ViewChild } from '@angular/core';

import {OrderComponent } from './order/order.component';

@Component({
  selector: 'app-ourservice',
  templateUrl: './ourservice.component.html',
  styleUrls: ['./ourservice.component.css']
})
export class OurserviceComponent implements OnInit {
 @ViewChild(OrderComponent ) visibility:OrderComponent; 
 
  constructor() { }
  
  ngOnInit() {
  }
  visible(){
    this.visibility.change();
    
}
}
