import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ApiUrl="https://ecommerce.routemisr.com/api/v1/auth/"

  isLoggedInSubject = new BehaviorSubject<boolean>(localStorage.getItem("token")?true:false);
  constructor(private _HttpClient:HttpClient,private _Router:Router) { }
  

  register(registerFormData:object):Observable<any>
  {
    return this._HttpClient.post(this.ApiUrl+"signup",registerFormData);
  }

  login(loginFormData:object):Observable<any>
  {
    return this._HttpClient.post(this.ApiUrl+"signin",loginFormData);
  }

  logOut(){
    localStorage.removeItem("token");
    this._Router.navigate(["/login"]);
    this.isLoggedInSubject.next(false);
  }

  forgotPassword(forgotPasswordData:object):Observable<any>
  {
    return this._HttpClient.post(this.ApiUrl+"forgotPasswords",forgotPasswordData);
  }

  verifyResetCode(verifyResetCodeData:object):Observable<any>
  {
    return this._HttpClient.post(this.ApiUrl+"verifyResetCode",verifyResetCodeData);
  }

  resetPassword(resetPasswordData:object):Observable<any>
  {
    return this._HttpClient.post(this.ApiUrl+"resetPassword",resetPasswordData);
  }
}
