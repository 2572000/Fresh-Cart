import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  apiUrl = `https://ecommerce.routemisr.com/api/v2/cart`;
  cartCount = new BehaviorSubject<number>(0);

  constructor(private _HttpClient: HttpClient) { 
   this.updateCart();
  }

  updateCart(){
     this.getProductItem().subscribe({
      next:(response)=>{
        this.cartCount.next(response.numOfCartItems); 
      }
    })
  }


  addProductToCart(productId: string): Observable<any> {
    return this._HttpClient.post(this.apiUrl, { productId: productId });
  }

  getProductItem():Observable<any>{
    return this._HttpClient.get(this.apiUrl);
  }

  removeProductItem(productId:string):Observable<any>{
    return this._HttpClient.delete(`${this.apiUrl}/${productId}`);
  }


   updateCartCount(productId:string,count:number):Observable<any>{
    return this._HttpClient.put(`${this.apiUrl}/${productId}`,{count:count});
  }

   clearProductItem():Observable<any>{
    return this._HttpClient.delete(this.apiUrl,);
  }
}
