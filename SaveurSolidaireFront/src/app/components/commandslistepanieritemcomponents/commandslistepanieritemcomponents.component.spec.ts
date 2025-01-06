import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandslistepanieritemcomponentsComponent } from './commandslistepanieritemcomponents.component';

describe('CommandslistepanieritemcomponentsComponent', () => {
  let component: CommandslistepanieritemcomponentsComponent;
  let fixture: ComponentFixture<CommandslistepanieritemcomponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandslistepanieritemcomponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandslistepanieritemcomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
