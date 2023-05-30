import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationRatio6LiquiditeRatioComponent } from './consultation-ratio6-liquidite-ratio.component';

describe('ConsultationRatio6LiquiditeRatioComponent', () => {
  let component: ConsultationRatio6LiquiditeRatioComponent;
  let fixture: ComponentFixture<ConsultationRatio6LiquiditeRatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationRatio6LiquiditeRatioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationRatio6LiquiditeRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
