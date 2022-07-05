import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTeachComponent } from './new-teach.component';

describe('NewTeachComponent', () => {
  let component: NewTeachComponent;
  let fixture: ComponentFixture<NewTeachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTeachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
