import { IProduct } from "./iproduct";

export interface IProductResponse {
    results: number;
  metadata: IProductResponseMetadata;
  data: IProduct[];
}


export interface IProductResponseMetadata {
    currentPage:number;
    numberOfPages:number;
    limit:number;
    nextPage:number;
}