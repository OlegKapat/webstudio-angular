import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import {FillForm} from '../../fillform';
import {SendmailService} from '../../shared/sendmail.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  userForm:FormGroup;
  user:FillForm=new FillForm();
  visible:boolean=false;
  message:FillForm={};

  subjects:string[]=["HTML5,CSS3","Angular 2/4","Joomla"];
  types:string[]=["Card site","Blog","Internet shop","Landing page"];

  constructor(private fb:FormBuilder,private service:SendmailService) { }
  contactForm=new FormGroup({
    name:new FormControl(),
    email:new FormControl(),
    subjects:new FormControl(),
    types:new FormControl()
  })
  formError={
    "name":"",
    "email":"",
    "subject":"",
    "types":""
  }
  validationMessage = {
    "name": {
        "required": "Required field.",
        "minlength": "Min length must be 4 symbol",
        "maxlength": "Max length must be not more 15 symbol"
    },
    "email": {
        "required": "Required field.",
        "pattern": "Wrong format email"
    },
    "subject": {
        "required": "Required field."
    },
    "types": {
        "required": "Required field.",
        
    }
};
  buildForm(){
    this.userForm=this.fb.group({
      "name":[this.user.Name,[Validators.required, Validators.minLength(4),Validators.maxLength(15)]],
      "email":[this.user.Email,[Validators.required,Validators.pattern("[^ @]*@[^ @]*")]],
      "subjects":[this.user.Object,[Validators.required]],
      "types":[this.user.Type,[Validators.required]]
    })
    this.userForm.valueChanges.subscribe(data=>this.onValueChange(data));
    this.onValueChange();
  }
  onValueChange(data?:any){
      if(!this.userForm)
      return;
      let form=this.userForm;
      for (let field in this.formError)
      {
        this.formError[field]="";
        let control=form.get(field);
        if(control&&control.dirty&&!control.valid){
          let message=this.validationMessage[field];
          for(let key in control.errors){
            this.formError[field]+=message[key]+" ";
          }
        }
      }
      
  }
  onSubmit(){
    console.log("submitted");
    console.log(this.userForm.value);
  }
  
  ngOnInit() {
    this.buildForm();
    
  }
  change(){
    this.visible=true;
  }
  sendMail(message:FillForm){
    this.service.sendEmail(message).subscribe(res=>{console.log("Sending success",res);}
    ,error=>{console.log("Sending wrong",error)}),this.userForm.reset();
  }
}
