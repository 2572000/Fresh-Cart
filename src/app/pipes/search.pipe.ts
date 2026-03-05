import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../Interfaces/Product/iproduct';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(productList:IProduct[],title:string): IProduct[] {

    return productList.filter((p)=>p.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()));
  }

}
