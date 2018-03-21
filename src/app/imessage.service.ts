import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Resolve} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

export interface IMessage {
  name?: string;
  email?: string;
  message?: string;
}

@Injectable()
export class ImessageService {
private emailUrl: '/assets/mail.php';
  constructor(private http: Http) { }
  sendEmail(message: IMessage): Observable<IMessage> | any {
    return this.http.post(this.emailUrl, message)
      .map(response => {
        console.log('Sending email was successfull', response);
        return response;
      })
      .catch(error => {
        console.log('Sending email got error', error);
        return Observable.throw(error);
      } );
}
}
