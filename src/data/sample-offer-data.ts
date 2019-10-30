import { Product } from '../models/product';
import { Offer } from '../models/offer';

export class SampleOffers {
    sampleData: [
        {
            id: 1, offerName: "Offer 1", startDate: "2019-10-01", endDate: "2019-12-31", products: [{ id: 101, productName: "Product 1", addOns: [] }],
        },
        {
            id: 2, offerName: "Offer 2", startDate: "2019-9-01", endDate: "2019-12-31", products: [{ id: 102, productName: "Product 2", addOns: [] }],
        }
    ]
}
