import { Ibrand } from "./ibrand";
import { Icategory } from "./icategory";
import { Isubcategory } from "./isubcategory";

export interface IProduct {
    sold:number;
    images:string[];
    subcategory:Isubcategory[];
    ratingsQuantity:number;
    _id:string;
    title:string;
    description:string;
    quantity:number;
    price:number;
    imageCover:string;
    category:Icategory;
    brand:Ibrand;
    ratingsAverage:number;
}
