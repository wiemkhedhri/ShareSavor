import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactcomponentComponent } from './contactcomponent.component';

describe('ContactcomponentComponent', () => {
  let component: ContactcomponentComponent;
  let fixture: ComponentFixture<ContactcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
