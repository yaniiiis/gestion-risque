import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionParPlusieursDatesComponent } from './position-par-plusieurs-dates.component';

describe('PositionParPlusieursDatesComponent', () => {
  let component: PositionParPlusieursDatesComponent;
  let fixture: ComponentFixture<PositionParPlusieursDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionParPlusieursDatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionParPlusieursDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
