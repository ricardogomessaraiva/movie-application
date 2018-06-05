import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'mov-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({          
      username: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(5)])      
    })
  }

}
