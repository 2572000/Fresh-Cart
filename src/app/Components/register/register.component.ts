import { Component } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  passwordMatchValidator } from 'src/app/Custom Validators/match-password';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  apiErrorMessage:string='';
  isLoading=false;
  constructor(private _AuthService: AuthService,private _Router:Router) {

  }

  handelRegistor() {
    if (this.registerForm.valid)
   {
      this.isLoading=true;
       this._AuthService.register(this.registerForm.value).subscribe({
        next: () => { 
          this._Router.navigate(['/login']);
          this.isLoading=false; 
        },
        error: (err) => { 
          this.apiErrorMessage=err.error.message;
          this.isLoading=false;
         }
      })
   }
  }


  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)]),
    rePassword: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
  },{validators:passwordMatchValidator});


    get name() {
    return this.registerForm.get('name');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get rePassword() {
    return this.registerForm.get('rePassword');
  }
  get phone() {
    return this.registerForm.get('phone');
  }

}
