import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationRatio2LiquiditeComponent } from './consultation-ratio2-liquidite.component';

describe('ConsultationRatio2LiquiditeComponent', () => {
  let component: ConsultationRatio2LiquiditeComponent;
  let fixture: ComponentFixture<ConsultationRatio2LiquiditeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationRatio2LiquiditeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationRatio2LiquiditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
