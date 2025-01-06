import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopByBuisinessComponent } from './shop-by-buisiness.component';

describe('ShopByBuisinessComponent', () => {
  let component: ShopByBuisinessComponent;
  let fixture: ComponentFixture<ShopByBuisinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopByBuisinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopByBuisinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
