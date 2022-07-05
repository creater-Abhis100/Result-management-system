import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStudComponent } from './update-stud.component';

describe('UpdateStudComponent', () => {
  let component: UpdateStudComponent;
  let fixture: ComponentFixture<UpdateStudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
