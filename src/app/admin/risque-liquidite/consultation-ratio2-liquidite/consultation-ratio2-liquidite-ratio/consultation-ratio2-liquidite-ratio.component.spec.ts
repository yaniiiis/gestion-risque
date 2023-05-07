import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationRatio2LiquiditeRatioComponent } from './consultation-ratio2-liquidite-ratio.component';

describe('ConsultationRatio2LiquiditeRatioComponent', () => {
  let component: ConsultationRatio2LiquiditeRatioComponent;
  let fixture: ComponentFixture<ConsultationRatio2LiquiditeRatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationRatio2LiquiditeRatioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationRatio2LiquiditeRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
