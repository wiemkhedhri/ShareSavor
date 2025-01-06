import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderbuisinesrepComponent } from './headerbuisinesrep.component';

describe('HeaderbuisinesrepComponent', () => {
  let component: HeaderbuisinesrepComponent;
  let fixture: ComponentFixture<HeaderbuisinesrepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderbuisinesrepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderbuisinesrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
