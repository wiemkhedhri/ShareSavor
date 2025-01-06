import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListepublicationcomponentComponent } from './listepublicationcomponent.component';

describe('ListepublicationcomponentComponent', () => {
  let component: ListepublicationcomponentComponent;
  let fixture: ComponentFixture<ListepublicationcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListepublicationcomponentComponent]
    });
    fixture = TestBed.createComponent(ListepublicationcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
