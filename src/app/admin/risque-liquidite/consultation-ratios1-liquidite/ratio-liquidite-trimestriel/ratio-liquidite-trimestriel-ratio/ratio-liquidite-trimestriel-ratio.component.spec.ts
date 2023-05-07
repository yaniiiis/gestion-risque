import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatioLiquiditeTrimestrielRatioComponent } from './ratio-liquidite-trimestriel-ratio.component';

describe('RatioLiquiditeTrimestrielRatioComponent', () => {
  let component: RatioLiquiditeTrimestrielRatioComponent;
  let fixture: ComponentFixture<RatioLiquiditeTrimestrielRatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatioLiquiditeTrimestrielRatioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatioLiquiditeTrimestrielRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
