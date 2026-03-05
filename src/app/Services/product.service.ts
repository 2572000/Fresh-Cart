import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductResponse } from '../Interfaces/Product/iproduct-response';
import { IproductDetailsResponse } from '../Interfaces/Product/iproduct-details';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
ApiUrl="https://ecommerce.routemisr.com/api/v1/products"
  constructor(private _HttpClient:HttpClient) { }

  getAllProducts():Observable<IProductResponse>
  {
    return this._HttpClient.get<IProductResponse>(this.ApiUrl);
  }

  getProductById(id:string):Observable<IproductDetailsResponse>
  {
    return this._HttpClient.get<IproductDetailsResponse>(`${this.ApiUrl}/${id}`);
  }
  getProductsByCategory(id:string):Observable<IProductResponse>
  {
    return this._HttpClient.get<IProductResponse>(`${this.ApiUrl}?category=${id}`);
  }

    getProductsByBrand(id:string):Observable<IProductResponse>
  {
    return this._HttpClient.get<IProductResponse>(`${this.ApiUrl}?brand=${id}`);
  }

 

}
