import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsPerBuisinessComponent } from './items-per-buisiness.component';

describe('ItemsPerBuisinessComponent', () => {
  let component: ItemsPerBuisinessComponent;
  let fixture: ComponentFixture<ItemsPerBuisinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsPerBuisinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsPerBuisinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
