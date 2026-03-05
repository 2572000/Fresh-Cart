import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBrandREsponse } from '../Interfaces/Brand/ibrand-response';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
apiUrl=`https://ecommerce.routemisr.com/api/v1/brands`;
  constructor(private _HttpClient:HttpClient) { }

  GetAllBrands():Observable<IBrandREsponse>{
    return this._HttpClient.get<IBrandREsponse>(this.apiUrl);
  }
}
