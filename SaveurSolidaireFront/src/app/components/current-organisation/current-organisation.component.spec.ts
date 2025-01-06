import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentOrganisationComponent } from './current-organisation.component';

describe('CurrentOrganisationComponent', () => {
  let component: CurrentOrganisationComponent;
  let fixture: ComponentFixture<CurrentOrganisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentOrganisationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentOrganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
