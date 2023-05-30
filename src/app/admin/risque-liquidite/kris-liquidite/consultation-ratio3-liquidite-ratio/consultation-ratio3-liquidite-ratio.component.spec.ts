import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationRatio3LiquiditeRatioComponent } from './consultation-ratio3-liquidite-ratio.component';

describe('ConsultationRatio3LiquiditeRatioComponent', () => {
  let component: ConsultationRatio3LiquiditeRatioComponent;
  let fixture: ComponentFixture<ConsultationRatio3LiquiditeRatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationRatio3LiquiditeRatioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationRatio3LiquiditeRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
