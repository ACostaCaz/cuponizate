import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCouponsComponent } from './business-coupons.component';

describe('BusinessCouponsComponent', () => {
  let component: BusinessCouponsComponent;
  let fixture: ComponentFixture<BusinessCouponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessCouponsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
