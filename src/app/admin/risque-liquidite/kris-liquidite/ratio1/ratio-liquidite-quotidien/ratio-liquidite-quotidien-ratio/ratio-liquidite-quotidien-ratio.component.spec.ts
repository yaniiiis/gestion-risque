import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatioLiquiditeQuotidienRatioComponent } from './ratio-liquidite-quotidien-ratio.component';

describe('RatioLiquiditeQuotidienRatioComponent', () => {
  let component: RatioLiquiditeQuotidienRatioComponent;
  let fixture: ComponentFixture<RatioLiquiditeQuotidienRatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatioLiquiditeQuotidienRatioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatioLiquiditeQuotidienRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
