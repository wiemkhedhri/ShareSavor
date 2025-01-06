import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarcomponentComponent } from './sidebarcomponent.component';

describe('SidebarcomponentComponent', () => {
  let component: SidebarcomponentComponent;
  let fixture: ComponentFixture<SidebarcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarcomponentComponent]
    });
    fixture = TestBed.createComponent(SidebarcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
