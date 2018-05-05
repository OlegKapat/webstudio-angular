import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Resolve} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { FillForm } from '../fillform';


@Injectable()
export class SendmailService {
private emailUrl='/assets/email.php'
  constructor(private http:Http) { }
  sendEmail(message:FillForm):Observable<FillForm>|any{
  return this.http.post(this.emailUrl,message).map(response=>{console.log("Sending form was successful",response);return response})
  .catch(error=>{console.log("Sending form was fail",error);return Observable.throw(error)})
  
  }

}
