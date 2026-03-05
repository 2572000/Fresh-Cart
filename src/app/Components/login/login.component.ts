import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { CartService } from 'src/app/Services/cart.service';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private _AuthService: AuthService,
    private _Router: Router,
    private _CartService: CartService,
  private _WishlistService:WishlistService) { }
  apiErrorMessage: string = '';
  isLoading = false;


  handleLogin() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this._AuthService.login(this.loginForm.value).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);
          this._CartService.updateCart();
          this._WishlistService.updateWishList();
          this._Router.navigate(['/home']);
          this.isLoading = false;
          this._AuthService.isLoggedInSubject.next(true);
        },
        error: (err) => {
          this.apiErrorMessage = err.error.message;
          this.isLoading = false;
        }
      })
    }
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)]),
  });

}
