import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListepublicationComponent } from './listepublication.component';

describe('ListepublicationComponent', () => {
  let component: ListepublicationComponent;
  let fixture: ComponentFixture<ListepublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListepublicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListepublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
