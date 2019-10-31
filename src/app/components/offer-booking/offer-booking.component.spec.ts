import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferBookingComponent } from './offer-booking.component';

describe('OfferBookingComponent', () => {
  let component: OfferBookingComponent;
  let fixture: ComponentFixture<OfferBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
