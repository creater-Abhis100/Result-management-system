import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayResComponent } from './display-res.component';

describe('DisplayResComponent', () => {
  let component: DisplayResComponent;
  let fixture: ComponentFixture<DisplayResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayResComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
