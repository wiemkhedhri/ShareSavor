import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBuissinFormComponent } from './add-buissin-form.component';

describe('AddBuissinFormComponent', () => {
  let component: AddBuissinFormComponent;
  let fixture: ComponentFixture<AddBuissinFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBuissinFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBuissinFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
