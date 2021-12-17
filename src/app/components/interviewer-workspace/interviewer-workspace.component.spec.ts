import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerWorkspaceComponent } from './interviewer-workspace.component';

describe('InterviewerWorkspaceComponent', () => {
  let component: InterviewerWorkspaceComponent;
  let fixture: ComponentFixture<InterviewerWorkspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewerWorkspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewerWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
