import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoLijstComponent } from './to-do-lijst.component';

describe('ToDoLijstComponent', () => {
  let component: ToDoLijstComponent;
  let fixture: ComponentFixture<ToDoLijstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoLijstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoLijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
