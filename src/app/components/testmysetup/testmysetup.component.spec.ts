import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestmysetupComponent } from './testmysetup.component';

describe('TestmysetupComponent', () => {
  let component: TestmysetupComponent;
  let fixture: ComponentFixture<TestmysetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestmysetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestmysetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
