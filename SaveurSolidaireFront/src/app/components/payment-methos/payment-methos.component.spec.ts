import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethosComponent } from './payment-methos.component';

describe('PaymentMethosComponent', () => {
  let component: PaymentMethosComponent;
  let fixture: ComponentFixture<PaymentMethosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentMethosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentMethosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
