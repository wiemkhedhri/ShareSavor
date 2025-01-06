import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateprofileorganisationComponent } from './updateprofileorganisation.component';

describe('UpdateprofileorganisationComponent', () => {
  let component: UpdateprofileorganisationComponent;
  let fixture: ComponentFixture<UpdateprofileorganisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateprofileorganisationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateprofileorganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
