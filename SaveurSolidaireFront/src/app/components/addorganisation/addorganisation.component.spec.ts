import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddorganisationComponent } from './addorganisation.component';

describe('AddorganisationComponent', () => {
  let component: AddorganisationComponent;
  let fixture: ComponentFixture<AddorganisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddorganisationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddorganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
