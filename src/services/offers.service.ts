import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { Offer } from '../models/offer';
import { SampleOffers } from '../data/sample-offer-data';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

    private sampleOffers: SampleOffers = new SampleOffers;

    constructor() { }

    getOffersById(id: number): Observable<any> {
        const offersObservable = new Observable(observer => {
            observer.next(this.sampleOffers);
        });
        return offersObservable;
    }
}
