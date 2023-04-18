import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionParDateComponent } from './position-par-date.component';

describe('PositionParDateComponent', () => {
  let component: PositionParDateComponent;
  let fixture: ComponentFixture<PositionParDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionParDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionParDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
