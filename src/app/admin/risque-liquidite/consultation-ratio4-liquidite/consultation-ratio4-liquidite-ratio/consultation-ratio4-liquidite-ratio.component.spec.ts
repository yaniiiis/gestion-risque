import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationRatio4LiquiditeRatioComponent } from './consultation-ratio4-liquidite-ratio.component';

describe('ConsultationRatio4LiquiditeRatioComponent', () => {
  let component: ConsultationRatio4LiquiditeRatioComponent;
  let fixture: ComponentFixture<ConsultationRatio4LiquiditeRatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationRatio4LiquiditeRatioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationRatio4LiquiditeRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
