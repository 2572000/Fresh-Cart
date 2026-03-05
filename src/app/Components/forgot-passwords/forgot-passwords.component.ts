import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-forgot-passwords',
  templateUrl: './forgot-passwords.component.html',
  styleUrls: ['./forgot-passwords.component.css']
})
export class ForgotPasswordsComponent {
  apiErrorMessage: string = '';
  isLoading: boolean = false;
  constructor(private _AuthService: AuthService,private _Router:Router) { }

  handleForgotPassword() {
    if (this.forgotPasswordForm.valid) {
      this.isLoading=true;
      this._AuthService.forgotPassword(this.forgotPasswordForm.value).subscribe({
        next: (response) => {
          this._Router.navigate(["verifyResetCode"]);
          this.isLoading = false;

        },
        error: (err) => {
          this.apiErrorMessage = err.error.message;
          this.isLoading = false;

        }

      })
    }
  }


  forgotPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email])
  });

  get email() {
    return this.forgotPasswordForm.get('email');
  }
}
