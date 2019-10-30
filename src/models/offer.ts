import { Product } from "./Product";

export class Offer {
    id: number;
    offerName: string;
    startData: Date;
    endDate: Date;
    products: Product[];
}
