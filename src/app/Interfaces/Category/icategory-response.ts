import { ICategoryData } from "./ICategoryData";
import { ICategoryMetadata } from "./ICategoryMetadata";

export interface ICategoryResponse {
    results:number;
    metadata:ICategoryMetadata;
    data:ICategoryData[];
}


