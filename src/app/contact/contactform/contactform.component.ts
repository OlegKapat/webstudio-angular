import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import {SendMessageService} from '../../shared/send-message.service';
import {SendMessage} from '../../sendmessage';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {
  myForm=new FormGroup({
  name:new FormControl(),
  mail:new FormControl(),
  phone:new FormControl(),
  company:new FormControl(),
  text:new FormControl()
  })

  constructor(private sendmessageservice:SendMessageService, private fb:FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }
  buildForm(){
    this.myForm=this.fb.group({
      "name":[this.user.name,[Validators.required]],
      "mail":[this.user.mail,[Validators.required]],
      "subjects":[this.user.phone,[Validators.required]],
      "types":[this.user.company,[Validators.required]],
      "text":[this.user.message,[Validators.required]]
    })
    this.myForm.valueChanges.subscribe(data=>this.onValueChange(data));
    this.onValueChange();
  }

  onValueChange(data?:any){
    if(!this.myForm){
      return(console.log("problem"))
    }
    else{
      return ()=>console.log("Success");

    }
  }
  sendForm(message:SendMessage){
    this.sendmessageservice.sendForm(message).subscribe(res=>{console.log("Sending success",res);}
    ,error=>{console.log("Sending wrong",error)}),this.myForm.reset();
  }
}
