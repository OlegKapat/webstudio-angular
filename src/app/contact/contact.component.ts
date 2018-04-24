import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public map: any = { lat: 50.4350088, lng: 30.4532439};
  constructor() { }

  ngOnInit() {
  }

}
