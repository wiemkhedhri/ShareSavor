import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSignInCompoenentComponent } from './log-sign-in-compoenent.component';

describe('LogSignInCompoenentComponent', () => {
  let component: LogSignInCompoenentComponent;
  let fixture: ComponentFixture<LogSignInCompoenentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogSignInCompoenentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogSignInCompoenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
