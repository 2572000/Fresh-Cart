import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
constructor(private _AuthService:AuthService,private _Router:Router){}
apiErrorMessage:string='';
isLoading=false;


  handleResetPassword() {
    if(this.resetPasswordForm.valid){
      this.isLoading=true;
      this._AuthService.login(this.resetPasswordForm.value).subscribe({
      next:(response)=>{
        this._Router.navigate(['/login']);
        this.isLoading=false;
      },
      error:(err)=>{
        this.apiErrorMessage=err.error.message;
        this.isLoading=false;      
      }
    })
    }
  }

  get email() {
    return this.resetPasswordForm.get('email');
  }
  get password() {
    return this.resetPasswordForm.get('password');
  }

  resetPasswordForm:FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)]),
  });
}
