import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListemessagescomponentComponent } from './listemessagescomponent.component';

describe('ListemessagescomponentComponent', () => {
  let component: ListemessagescomponentComponent;
  let fixture: ComponentFixture<ListemessagescomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListemessagescomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListemessagescomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
