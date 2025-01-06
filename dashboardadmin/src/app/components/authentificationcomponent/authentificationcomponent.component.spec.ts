import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentificationcomponentComponent } from './authentificationcomponent.component';

describe('AuthentificationcomponentComponent', () => {
  let component: AuthentificationcomponentComponent;
  let fixture: ComponentFixture<AuthentificationcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthentificationcomponentComponent]
    });
    fixture = TestBed.createComponent(AuthentificationcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
