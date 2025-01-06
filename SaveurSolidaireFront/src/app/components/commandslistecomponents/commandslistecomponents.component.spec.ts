import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandslistecomponentsComponent } from './commandslistecomponents.component';

describe('CommandslistecomponentsComponent', () => {
  let component: CommandslistecomponentsComponent;
  let fixture: ComponentFixture<CommandslistecomponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandslistecomponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandslistecomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
