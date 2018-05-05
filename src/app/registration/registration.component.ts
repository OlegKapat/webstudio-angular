import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {FillForm} from '../fillform';

interface Login {
  login: string;
  password: string;
}


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  loginForm: FormGroup;
  user: FillForm = new FillForm();
  constructor(public build: FormBuilder) { }

  formErrors = {
    'name': '',
    'password': ''
};
validationMessages = {
  'name': {
      'required': 'Required field.',
      'minlength': 'Значение должно быть не менее 4х символов.',
      'maxlength': 'Значение не должно быть больше 15 символов.'
  },
  'password': {
      'required': 'Required field.',
      'wrong': 'wrong password.'
  },
};

  ngOnInit() {

    this.buildForm();
    }

    buildForm(): void {
      this.loginForm = this.build.group({
        'name': [this.user.Name, [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15)
        ]],
        'password': [this.user.Email, [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%-]')
        ]],
      });
      this.loginForm.valueChanges.subscribe(data => this.onValueChange(data));
      this.onValueChange();
    }
    onValueChange(data?: any) {
      if (!this.loginForm) {return;  }
      const form = this.loginForm;
      for (let field in this.formErrors)
      {
        this.formErrors[field]= '' ;
        let control = form.get(field);
        if ( control && control.dirty && !control.valid)
        {
          let message = this.validationMessages[field];
          for (let key in control.errors)
          {
            this.formErrors[field] += message[key] +'';
          }
        }
      }
     }
     onSubmit() {}
  }


