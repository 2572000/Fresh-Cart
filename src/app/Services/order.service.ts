import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl:string=`https://ecommerce.routemisr.com/api/v1/orders/checkout-session`;
  baseUrl:string=`https://fresh-cart-navy-seven.vercel.app`
  constructor(private _HttpClient:HttpClient) { }

  Checkout(cartId:string,shippingAddress:object):Observable<any>
  {
    return this._HttpClient.post(`${this.apiUrl}/${cartId}?url=${this.baseUrl}`,{shippingAddress:shippingAddress});
  }
}
