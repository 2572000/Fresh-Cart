import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategoryResponse } from '../Interfaces/Category/icategory-response';
import { ICategoryData } from '../Interfaces/Category/ICategoryData';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl=`https://ecommerce.routemisr.com/api/v1/categories`
  constructor(private _HttpClient:HttpClient) { }
  GetAllCategories():Observable<ICategoryResponse>
  {
    return this._HttpClient.get<ICategoryResponse>(this.apiUrl);
  }

   GetCategoryById(id:string):Observable<ICategoryData>
  {
    return this._HttpClient.get<ICategoryData>(`${this.apiUrl}/${id}`);
  }
}
