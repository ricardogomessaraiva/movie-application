import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'mov-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formRegister = this.formBuilder.group({
      fullname: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      username: this.formBuilder.control('', [Validators.required, Validators.minLength(0)]),      
      city: this.formBuilder.control(''),      
      hobby: this.formBuilder.control(''),   
      slogan: this.formBuilder.control(''),         
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(0)]),
      confirmePassword: this.formBuilder.control('', [Validators.required, Validators.minLength(0)]),
      file: this.formBuilder.control(''),
      age: this.formBuilder.control('', [Validators.required, Validators.minLength(0), Validators.max(99)])
    })
  }

  save(): void {

  }

}
