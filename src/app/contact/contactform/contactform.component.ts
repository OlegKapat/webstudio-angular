import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import {SendMessageService} from '../../shared/send-message.service';
import {Send} from '../../send';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {
  textview: Send=new Send();
  mymessage: Send={};

  myForm=new FormGroup({
  name:new FormControl(),
  mail:new FormControl(),
  phone:new FormControl(),
  company:new FormControl(),
  message:new FormControl()
  })
  

  constructor(private sendmessageservice:SendMessageService, private fb:FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }
  buildForm(){
    this.myForm=this.fb.group({
      "name":[this.textview.Name,[Validators.required]],
      "mail":[this.textview.Mail,[Validators.required]],
      "phone":[this.textview.Phone,[Validators.required]],
      "company":[this.textview.Company,[Validators.required]],
      "message":[this.textview.Message,[Validators.required]]
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
  sendfillForm(mymessage:Send){
    this.sendmessageservice.sendForm(mymessage).subscribe(res=>{console.log("Sending success",res);}
    ,error=>{console.log("Sending wrong",error)}),this.myForm.reset();
  }
  onSubmit(){
    console.log("submitted");
    console.log(this.myForm.value);
  }
}
