import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderorganisationrepreComponent } from './headerorganisationrepre.component';

describe('HeaderorganisationrepreComponent', () => {
  let component: HeaderorganisationrepreComponent;
  let fixture: ComponentFixture<HeaderorganisationrepreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderorganisationrepreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderorganisationrepreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
