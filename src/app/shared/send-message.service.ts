import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import {Send} from '../send';
import {Observable} from 'rxjs/Observable';
import {Resolve} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SendMessageService {
  private emailUrl='/assets/form.php'
  constructor(private http:Http) { }
  sendForm(message:Send):Observable<Send>|any{
    return this.http.post(this.emailUrl,message).map(response=>{console.log("Sending form was successful",response);return response})
    .catch(error=>{console.log("Sending form was fail",error);return Observable.throw(error)})

}
}
