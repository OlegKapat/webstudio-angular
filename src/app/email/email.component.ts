import { Component, OnInit } from '@angular/core';
import { ImessageService, IMessage } from '../imessage.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
title: 'Email form';
message: IMessage = {};
  constructor(private imessage: ImessageService) { }
 sendEmail(message: IMessage) {
   this.imessage.sendEmail(message).subscribe(res => {console.log('Sending access', res); },
 error => {
   console.log('Sending error', error);
   }
  ); }
    ngOnInit() {
  }

}
