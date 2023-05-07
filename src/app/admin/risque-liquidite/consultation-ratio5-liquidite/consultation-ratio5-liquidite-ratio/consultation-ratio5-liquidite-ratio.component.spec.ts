import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationRatio5LiquiditeRatioComponent } from './consultation-ratio5-liquidite-ratio.component';

describe('ConsultationRatio5LiquiditeRatioComponent', () => {
  let component: ConsultationRatio5LiquiditeRatioComponent;
  let fixture: ComponentFixture<ConsultationRatio5LiquiditeRatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationRatio5LiquiditeRatioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationRatio5LiquiditeRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
