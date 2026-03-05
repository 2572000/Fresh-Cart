import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  apiUrl: string = `https://ecommerce.routemisr.com/api/v1/wishlist`
  wishlistCount = new BehaviorSubject<number>(0);
  wishList = new BehaviorSubject<string[]>([]);
  constructor(private _HttpClient: HttpClient) {
    this.updateWishList();
  }
  updateWishList() {
    this.getProductWishList().subscribe({
      next: (res) => {
        this.wishlistCount.next(res.count);
        this.wishList.next(res.data.map((item: any) => item._id));
      }
    })
  }

  addProductToWidhList(productId: string): Observable<any> {
    return this._HttpClient.post(this.apiUrl, { productId });
  }

  getProductWishList(): Observable<any> {
    return this._HttpClient.get(this.apiUrl);
  }

  removeFromWishlist(productId: string): Observable<any> {
    return this._HttpClient.delete(`${this.apiUrl}/${productId}`);
  }
}
