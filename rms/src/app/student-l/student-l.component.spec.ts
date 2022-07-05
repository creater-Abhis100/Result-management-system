import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLComponent } from './student-l.component';

describe('StudentLComponent', () => {
  let component: StudentLComponent;
  let fixture: ComponentFixture<StudentLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
