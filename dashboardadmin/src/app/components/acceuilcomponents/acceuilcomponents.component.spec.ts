import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilcomponentsComponent } from './acceuilcomponents.component';

describe('AcceuilcomponentsComponent', () => {
  let component: AcceuilcomponentsComponent;
  let fixture: ComponentFixture<AcceuilcomponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceuilcomponentsComponent]
    });
    fixture = TestBed.createComponent(AcceuilcomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
