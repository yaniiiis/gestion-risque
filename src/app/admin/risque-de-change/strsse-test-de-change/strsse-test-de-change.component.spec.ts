import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrsseTestDeChangeComponent } from './strsse-test-de-change.component';

describe('StrsseTestDeChangeComponent', () => {
  let component: StrsseTestDeChangeComponent;
  let fixture: ComponentFixture<StrsseTestDeChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrsseTestDeChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrsseTestDeChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
