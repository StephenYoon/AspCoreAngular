import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferAdminComponent } from './offer-admin.component';

describe('OfferAdminComponent', () => {
  let component: OfferAdminComponent;
  let fixture: ComponentFixture<OfferAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
