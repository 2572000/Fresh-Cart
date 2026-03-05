import { IBrandData } from "./IBrandData";
import { IBrandMetadata } from "./IBrandMetadata";

export interface IBrandREsponse {
    results: number;
    metadata: IBrandMetadata;
    data: IBrandData[];
}


