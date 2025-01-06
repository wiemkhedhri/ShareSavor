import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentBuisinessComponent } from './current-buisiness.component';

describe('CurrentBuisinessComponent', () => {
  let component: CurrentBuisinessComponent;
  let fixture: ComponentFixture<CurrentBuisinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentBuisinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentBuisinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
